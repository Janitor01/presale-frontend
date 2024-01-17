#![cfg_attr(not(feature = "std"), no_std, no_main)]

#[ink::contract]
mod bugbite {
    use ink::contract_ref;
    use ink::prelude::vec::Vec;
    use psp22::PSP22;

    #[ink(storage)]
    pub struct Token {
        owner: AccountId,
        price_per_token: Balance,
        presale_asset: AccountId,
        paused: bool,
        total_presale_tokens: Balance,
        tokens_sold: Balance,
    }

    #[ink(event)]
    pub struct Purchased {
        from: AccountId,
        value: Balance,
        price: Balance,
    }

    #[ink(event)]
    pub struct PriceUpdated {
        price_per_token: Balance,
    }

    #[derive(Debug, PartialEq, Eq, scale::Encode, scale::Decode)]
    #[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]
    pub enum Error {
        InsufficientBalance,
        TransferredValueNotMatchingPrice,
        TransferFailed,
        NotOwner,
        ContractPaused,
    }

    impl Token {
        #[ink(constructor)]
        pub fn new(
            price_per_token: Balance,
            presale_token: AccountId,
            total_presale: Balance,
        ) -> Self {
            assert!(price_per_token > 0);
            let caller = Self::env().caller();
            Self {
                price_per_token,
                owner: caller,
                presale_asset: presale_token,
                paused: false,
                total_presale_tokens: total_presale,
                tokens_sold: 0,
            }
        }

        #[ink(message)]
        pub fn get_total_presale_tokens(&self) -> Balance {
            let token: contract_ref!(PSP22) = self.presale_asset.into();
            token.balance_of(Self::env().account_id())
        }

        #[ink(message)]
        pub fn get_tokens_sold(&self) -> Balance {
            self.tokens_sold
        }

        #[ink(message)]
        pub fn pause(&mut self) -> Result<(), Error> {
            self.only_owner()?;
            self.paused = true;
            Ok(())
        }

        #[ink(message)]
        pub fn unpause(&mut self) -> Result<(), Error> {
            self.only_owner()?;
            self.paused = false;
            Ok(())
        }

        fn only_owner(&self) -> Result<(), Error> {
            if self.env().caller() != self.owner {
                return Err(Error::NotOwner);
            }
            Ok(())
        }

        #[ink(message)]
        pub fn get_owner(&self) -> AccountId {
            self.owner
        }

        #[ink(message)]
        pub fn set_price_per_token(&mut self, new_price: Balance) -> Result<(), Error> {
            self.only_owner()?;
            assert!(new_price > 0, "New price must be greater than 0");
            self.price_per_token = new_price;
            Self::env().emit_event(PriceUpdated {
                price_per_token: new_price,
            });
            Ok(())
        }

        #[ink(message)]
        pub fn get_price(&self) -> u128 {
            self.price_per_token
        }

        #[ink(message, payable)]
        pub fn buy_token(&mut self, amount_to_purchase: Balance) -> Result<Balance, Error> {
            self.ensure_not_paused()?;
            if amount_to_purchase == 0 {
                return Err(Error::InsufficientBalance);
            }

            let from = self.env().caller();
            let price: Balance = (amount_to_purchase * self.price_per_token) / 1000_000_000_000;
            let transferred_value = self.env().transferred_value();

            if transferred_value < price {
                return Err(Error::TransferredValueNotMatchingPrice);
            }

            self.env()
                .transfer(self.owner, price)
                .map_err(|_| Error::TransferFailed)?;

            let mut token: contract_ref!(PSP22) = self.presale_asset.into();
            let to_balance_before = token.balance_of(from);
            token
                .transfer(from, amount_to_purchase, Vec::<u8>::new())
                .map_err(|_| Error::TransferFailed)?;
            let to_balance_after = token.balance_of(from);

            let new_balance = to_balance_after - to_balance_before;
            if new_balance != amount_to_purchase {
                return Err(Error::TransferFailed);
            }

            if transferred_value > price {
                self.env()
                    .transfer(from, transferred_value - price)
                    .map_err(|_| Error::TransferFailed)?;
            }

            self.tokens_sold += amount_to_purchase;

            Self::env().emit_event(Purchased {
                from,
                value: amount_to_purchase,
                price,
            });

            Ok(new_balance)
        }

        #[ink(message)]
        pub fn claim_tokens(&mut self, amount_tokens: Balance) -> Result<Balance, Error> {
            self.only_owner()?;
            let mut token: contract_ref!(PSP22) = self.presale_asset.into();
            token
                .transfer(self.owner, amount_tokens, Vec::<u8>::new())
                .map_err(|_| Error::TransferFailed)?;
            Ok(amount_tokens)
        }

        #[ink(message, payable)]
        pub fn claim_native_token(&mut self) -> Result<Balance, Error> {
            self.only_owner()?;
            let contract_balance = Self::env().balance();
            Self::env()
                .transfer(self.owner, contract_balance)
                .map_err(|_| Error::TransferFailed)?;
            Ok(contract_balance)
        }

        #[ink(message)]
        pub fn set_code(&mut self, code_hash: [u8; 32]) {
            if self.env().caller() != self.owner {
                panic!("Only the owner can set the code hash");
            }
            ink::env::set_code_hash(&code_hash).unwrap_or_else(|err| {
                panic!(
                    "Failed to `set_code_hash` to {:?} due to {:?}",
                    code_hash, err
                )
            });
            ink::env::debug_println!("Switched code hash to {:?}.", code_hash);
        }

        fn ensure_not_paused(&self) -> Result<(), Error> {
            if self.paused {
                Err(Error::ContractPaused)
            } else {
                Ok(())
            }
        }
    }
}
# $IOU Presale Token Contract Frontend

## Overview

<<<<<<< HEAD
The $IOU Presale Token Contract Frontend is an interface for a blockchain-based smart contract designed for the presale of $IOU tokens. It allows users to exchange `$AZERO` for $IOU tokens in a secure and automated environment.
=======
This project presents a frontend for the $IOU presale token contract, leveraging the Inkathon boilerplate. It's designed to facilitate blockchain-based token transactions, allowing users to exchange `$AZERO` for $IOU tokens.
>>>>>>> 9c6c5ae3881973635dd0951d526ddc9b09449e77

## Smart Contract Functionality

<<<<<<< HEAD
- **Automatic Transactions**: The smart contract automates the transaction process. When a user decides to buy $IOU tokens with `$AZERO`, the contract automatically calculates the number of tokens they should receive and completes the transaction.
- **Token Pricing and Purchase Limits**: The contract includes a preset price for each $IOU token. It also enforces a maximum purchase limit to ensure fair distribution among participants.
=======
- **Wallet Connection**: Enable interactions with blockchain wallets for transaction processes.
- **Purchase $IOU Tokens**: Users can buy $IOU tokens using `$AZERO`.
- **Real-Time Price Calculation**: Dynamically computes the amount of $IOU tokens based on the `$AZERO` input and current token pricing.
- **Token Purchase Handling**: Efficiently manages the token purchase procedure, including error handling and providing transaction status updates.
>>>>>>> 9c6c5ae3881973635dd0951d526ddc9b09449e77

- **Owner Controls**: The contract owner has special privileges, such as setting or updating the token price, pausing or resuming the sale, and withdrawing funds raised during the presale.

<<<<<<< HEAD
- **Security Measures**: The contract contains various security features to prevent unauthorized access and ensure that only the contract owner can modify crucial settings.
=======
- **React**: Utilized for constructing the user interface.
- **TypeScript**: Employed for developing type-safe code.
- **useInkathon**: A custom React hook from `@scio-labs/use-inkathon` for streamlined contract interactions.
- **React Hook Form**: Applied for managing form state and validations.
- **react-hot-toast**: Used for displaying notifications related to transaction statuses and errors.
>>>>>>> 9c6c5ae3881973635dd0951d526ddc9b09449e77

- **Real-Time Updates**: Events such as token purchases or price changes are immediately recorded and can be viewed in real-time, providing transparency for all transactions.

<<<<<<< HEAD
- **Error Handling**: The contract is designed to handle common errors, such as insufficient balance or mismatched transaction values, ensuring a smooth user experience.
=======
To modify or introduce new contracts:

1. **Add New Contract**: Establish a new directory under `contracts/src/` for your contract.
2. **Update Workspace**: Include it as a workspace member in `contracts/Cargo.toml`.
3. **Modify Deployment Script**: Alter `contracts/scripts/deploy.ts` to accommodate new deployment scripts.
4. **Update Frontend**: Modify `ContractIds` enum and `getDeployments` function in `frontend/src/deployments/deployments.ts`.
>>>>>>> 9c6c5ae3881973635dd0951d526ddc9b09449e77

## Installation and Setup

1. **Clone the Repository**:
<<<<<<< HEAD
   git clone https://github.com/Janitor01/iou-presale-frontend.git

2. **Install Dependencies**:
   cd iou-presale-frontend
   pnpm install

3. **Run the Application**:
   pnpm run dev

=======
git clone https://github.com/Janitor01/iou-presale-frontend.git

2. **Install Dependencies**:
cd iou-presale-frontend
pnpm install

3. **Run the Application**:
pnpm run dev
>>>>>>> 9c6c5ae3881973635dd0951d526ddc9b09449e77
Access at `http://localhost:3000`.

## Usage

<<<<<<< HEAD
1. **Connect Wallet**: Users must connect their blockchain wallets.
2. **Enter `$AZERO` Amount**: Specify the amount to spend.
3. **View $IOU Token Amount**: See the calculated equivalent in $IOU tokens.
=======
1. **Connect Wallet**: Users need to connect their blockchain wallets.
2. **Enter `$AZERO` Amount**: Specify the amount to be spent.
3. **View $IOU Token Amount**: Observe the calculated equivalent in $IOU tokens.
>>>>>>> 9c6c5ae3881973635dd0951d526ddc9b09449e77
4. **Purchase Tokens**: Click 'Buy' to execute the transaction.

## Contributing

<<<<<<< HEAD
We welcome contributions. Please follow the existing coding conventions and add tests for any new functionality. Fork the repository and create a pull request with your changes.
=======
Contributions are highly appreciated. Please adhere to the existing code style and include tests for new features. Fork the repository and submit a pull request with your changes.
>>>>>>> 9c6c5ae3881973635dd0951d526ddc9b09449e77

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) file for details.

---

<<<<<<< HEAD
_Note: Customize the repository links, project details, and instructions as per your actual project setup and functionality._
=======
*Note: Ensure to customize the repository links, project details, and instructions as per your actual project setup and functionality.*
>>>>>>> 9c6c5ae3881973635dd0951d526ddc9b09449e77

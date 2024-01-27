# $IOU Presale Token Contract Frontend

## Overview

The $IOU Presale Token Contract Frontend is an interface for a blockchain-based smart contract designed for the presale of $IOU tokens. It allows users to exchange `$AZERO` for $IOU tokens in a secure and automated environment.

## Smart Contract Functionality

- **Automatic Transactions**: The smart contract automates the transaction process. When a user decides to buy $IOU tokens with `$AZERO`, the contract automatically calculates the number of tokens they should receive and completes the transaction.
- **Token Pricing and Purchase Limits**: The contract includes a preset price for each $IOU token. It also enforces a maximum purchase limit to ensure fair distribution among participants.

- **Owner Controls**: The contract owner has special privileges, such as setting or updating the token price, pausing or resuming the sale, and withdrawing funds raised during the presale.

- **Security Measures**: The contract contains various security features to prevent unauthorized access and ensure that only the contract owner can modify crucial settings.

- **Real-Time Updates**: Events such as token purchases or price changes are immediately recorded and can be viewed in real-time, providing transparency for all transactions.

- **Error Handling**: The contract is designed to handle common errors, such as insufficient balance or mismatched transaction values, ensuring a smooth user experience.

## Installation and Setup

1. **Clone the Repository**:

   `git clone https://github.com/Janitor01/iou-presale-frontend.git`

2. **Run the Application**:

   `cd iou-presale-frontend`

   `pnpm install`

3. **Run the Application**:

   `pnpm run dev`

Access at `http://localhost:3000`.

## Usage

1. **Connect Wallet**: Users must connect their blockchain wallets.
2. **Enter `$AZERO` Amount**: Specify the amount to spend.
3. **View $IOU Token Amount**: See the calculated equivalent in $IOU tokens.
4. **Purchase Tokens**: Click 'Buy' to execute the transaction.

## Contributing

We welcome contributions. Please follow the existing coding conventions and add tests for any new functionality. Fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) file for details.

---

_Note: Customize the repository links, project details, and instructions as per your actual project setup and functionality._

# Presale Frontend for Inkathon Boilerplate

## Overview

This project is the frontend code for a presale contract using the Inkathon boilerplate. It provides an interface for blockchain-based token transactions, enabling users to exchange `$AZERO` for Custom Tokens.

## Features

- **Wallet Connection**: Allows blockchain wallet interactions for transactions.
- **Buy Tokens**: Facilitates the purchase of Custom Tokens in exchange for `$AZERO`.
- **Real-Time Calculation**: Dynamically calculates the amount of Custom Tokens based on the `$AZERO` input and current token price.
- **Transaction Handling**: Manages the buying process, including error handling and status updates.

## Technology Stack

- **React**: For building the user interface.
- **TypeScript**: For type-safe code development.
- **useInkathon**: A custom hook from `@scio-labs/use-inkathon` for contract interactions.
- **React Hook Form**: For form state and validation management.
- **react-hot-toast**: For displaying transaction status and error notifications.

## Custom Contracts

To modify or add new contracts:

1. **Add New Contract**: Create a new directory under `contracts/src/` for your contract.
2. **Update Workspace**: Add it as a workspace member in `contracts/Cargo.toml`.
3. **Deployment Script**: Modify `contracts/scripts/deploy.ts` for new deployment scripts.
4. **Adjust Frontend**: Update `ContractIds` enum and `getDeployments` function in `frontend/src/deployments/deployments.ts`.

## Installation and Setup

1. **Clone the Repository**:
git clone https://github.com/Janitor01/presale-frontend.git

2. **Install Dependencies**:
cd presale-frontend
npm install

markdown
Copy code
3. **Run the Application**:
npm start

markdown
Copy code
Access at `http://localhost:3000`.

## Usage

1. **Connect Wallet**: Users must connect their blockchain wallets.
2. **Enter `$AZERO` Amount**: Specify the amount to spend.
3. **View Custom Token Amount**: See calculated equivalent tokens.
4. **Buy Tokens**: Click 'Buy' to execute the transaction.

## Contributing

Contributions are welcome. Follow the existing code style and add tests for new functionality. Fork the repository and submit a pull request with your changes.

## License

Licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

*Ensure to customize the repository links, project details, and instructions as per your actual project setup and functionality.*

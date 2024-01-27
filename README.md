# $IOU Presale Token Contract Frontend

## Overview

This project presents a frontend for the $IOU presale token contract, leveraging the Inkathon boilerplate. It's designed to facilitate blockchain-based token transactions, allowing users to exchange `$AZERO` for $IOU tokens.

## Features

- **Wallet Connection**: Enable interactions with blockchain wallets for transaction processes.
- **Purchase $IOU Tokens**: Users can buy $IOU tokens using `$AZERO`.
- **Real-Time Price Calculation**: Dynamically computes the amount of $IOU tokens based on the `$AZERO` input and current token pricing.
- **Token Purchase Handling**: Efficiently manages the token purchase procedure, including error handling and providing transaction status updates.

## Technology Stack

- **React**: Utilized for constructing the user interface.
- **TypeScript**: Employed for developing type-safe code.
- **useInkathon**: A custom React hook from `@scio-labs/use-inkathon` for streamlined contract interactions.
- **React Hook Form**: Applied for managing form state and validations.
- **react-hot-toast**: Used for displaying notifications related to transaction statuses and errors.

## Custom Contracts

To modify or introduce new contracts:

1. **Add New Contract**: Establish a new directory under `contracts/src/` for your contract.
2. **Update Workspace**: Include it as a workspace member in `contracts/Cargo.toml`.
3. **Modify Deployment Script**: Alter `contracts/scripts/deploy.ts` to accommodate new deployment scripts.
4. **Update Frontend**: Modify `ContractIds` enum and `getDeployments` function in `frontend/src/deployments/deployments.ts`.

## Installation and Setup

1. **Clone the Repository**:
git clone https://github.com/Janitor01/iou-presale-frontend.git

2. **Install Dependencies**:
cd iou-presale-frontend
pnpm install

3. **Run the Application**:
pnpm run dev
Access at `http://localhost:3000`.

## Usage

1. **Connect Wallet**: Users need to connect their blockchain wallets.
2. **Enter `$AZERO` Amount**: Specify the amount to be spent.
3. **View $IOU Token Amount**: Observe the calculated equivalent in $IOU tokens.
4. **Purchase Tokens**: Click 'Buy' to execute the transaction.

## Contributing

Contributions are highly appreciated. Please adhere to the existing code style and include tests for new features. Fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) file for details.

---

*Note: Ensure to customize the repository links, project details, and instructions as per your actual project setup and functionality.*

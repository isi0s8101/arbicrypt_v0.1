# Installation Guide for Arbicrypt

This guide provides detailed instructions on how to install and configure the Arbicrypt crypto arbitrage bot, including the backend, bot, and frontend components.

## Prerequisites

- Node.js and npm installed for the backend and frontend.
- Python and pip installed for the bot.
- MongoDB installed and running for the backend database.

## Backend Setup

1. Navigate to the `backend` directory.
2. Install dependencies with `npm install`.
3. Create a `.env` file in the root of the backend directory with the following content, adjusting the values as necessary:
   ```
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/arbicrypt
   SECRET_KEY=your_secret_key_here
   ```
4. Start the backend server with `npm start`.

## Bot Setup

1. Navigate to the `bot` directory.
2. Install Python dependencies with `pip install -r requirements.txt`.
3. Ensure you have API keys and secrets for the exchanges you want to use with the bot.
4. Update `bot/arbitrage.py` and `bot/exchange_client.py` with your exchange API keys and secrets as necessary.

## Frontend Setup

1. Navigate to the `frontend` directory.
2. Install dependencies with `npm install`.
3. Start the development server with `npm run serve`.

## Running the Application

With the backend and frontend servers running, you can access the frontend application in your browser at `http://localhost:8080`. The backend API will be available at `http://localhost:3000`.

Ensure the MongoDB service is running as the backend requires access to the database.

## Testing

- Backend tests can be run from the `backend` directory with `npm test`.
- Frontend unit tests can be run from the `frontend` directory with `npm run test:unit`.
- Frontend e2e tests require the development server running and can be run with `npm run test:e2e`.

Please refer to the README.md for more details on the project structure and components.

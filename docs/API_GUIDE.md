# API Guide for Arbicrypt

This guide provides detailed information about the API endpoints available in the Arbicrypt crypto arbitrage bot backend, including request methods, parameters, and example responses.

## User Management

### Register a New User
- **Endpoint**: `/api/users/register`
- **Method**: `POST`
- **Body**:
  ```
  {
    "username": "string",
    "email": "string",
    "password": "string"
  }
  ```
- **Response**:
  ```
  {
    "message": "User successfully registered"
  }
  ```

### Login
- **Endpoint**: `/api/users/login`
- **Method**: `POST`
- **Body**:
  ```
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Response**:
  ```
  {
    "token": "JWT token"
  }
  ```

## Arbitrage Operations

### Execute an Arbitrage Operation
- **Endpoint**: `/api/arbitrage/execute`
- **Method**: `POST`
- **Headers**: `Authorization: Bearer <your_jwt_token>`
- **Body**:
  ```
  {
    "symbol": "BTC/USD",
    "quantity": 1,
    "price": 10000,
    "exchange": "binance",
    "transactionType": "buy"
  }
  ```
- **Response**:
  ```
  {
    "message": "Arbitrage transaction executed successfully",
    "transaction": { ... }
  }
  ```

## Note

This API guide assumes that you have already set up and started the Arbicrypt backend server as described in the INSTALLATION.md document. All API requests should be made to the base URL of the backend server, which is `http://localhost:3000` by default.

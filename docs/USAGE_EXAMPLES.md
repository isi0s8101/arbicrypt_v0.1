# Usage Examples for Arbicrypt

This document provides examples of how to use the Arbicrypt crypto arbitrage bot, including interacting with the backend API, running the bot, and navigating the frontend application.

## Backend API

### Register a New User
```
POST /api/users/register
Content-Type: application/json

{
  "username": "newuser",
  "email": "newuser@example.com",
  "password": "password123"
}
```

### Login
```
POST /api/users/login
Content-Type: application/json

{
  "email": "newuser@example.com",
  "password": "password123"
}
```

## Bot Usage

To start the arbitrage bot, navigate to the `bot` directory and run:
```
python arbitrage.py
```
Ensure your API keys are configured as per the installation guide.

## Frontend Application

After starting the frontend server with `npm run serve`, you can access the application in your browser at `http://localhost:8080`.

### Login
Navigate to the `/login` route and enter your credentials to log in to the application.

### Dashboard
Once logged in, the dashboard will display real-time arbitrage opportunities identified by the bot. Navigate to the `/dashboard` route.

### Profile
To view or update your profile information, navigate to the `/profile` route.

## Note

These examples assume the backend, bot, and frontend have been installed and configured as described in the INSTALLATION.md document. Adjust the URLs and commands based on your setup and environment.

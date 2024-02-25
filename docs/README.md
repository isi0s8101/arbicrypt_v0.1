# Arbicrypt - Crypto Arbitrage Bot

Arbicrypt est un bot d'arbitrage de crypto-monnaie conçu pour identifier et exécuter des opérations d'arbitrage entre différentes plateformes d'échange. Ce projet comprend un backend Node.js, un bot d'arbitrage Python, et un frontend Vue.js.

## Fonctionnalités

- **Backend Node.js** : Authentification sécurisée, gestion des utilisateurs, et API pour interagir avec le bot d'arbitrage.
- **Bot d'Arbitrage Python** : Intégration avec les plateformes d'échange via ccxt, logique d'arbitrage, et apprentissage automatique pour optimiser les stratégies.
- **Frontend Vue.js** : Interface utilisateur dynamique pour la visualisation des opérations d'arbitrage, gestion du profil utilisateur, et configuration du bot.

## Installation

### Backend

1. Naviguez vers le dossier `backend`.
2. Installez les dépendances avec `npm install`.
3. Configurez vos variables d'environnement dans un fichier `.env`.
4. Lancez le serveur avec `npm start`.

### Bot d'Arbitrage

1. Naviguez vers le dossier `bot`.
2. Installez les dépendances Python avec `pip install -r requirements.txt`.
3. Configurez vos clés API pour les plateformes d'échange.
4. Exécutez le script d'arbitrage.

### Frontend

1. Naviguez vers le dossier `frontend`.
2. Installez les dépendances avec `npm install`.
3. Lancez le serveur de développement avec `npm run serve`.

## Tests

- Exécutez les tests backend avec `npm test` dans le dossier `backend`.
- Exécutez les tests unitaires frontend avec `npm run test:unit` dans le dossier `frontend`.
- Exécutez les tests e2e frontend avec `npm run test:e2e` dans le dossier `frontend`.

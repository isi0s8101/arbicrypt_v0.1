import ccxt
import pandas as pd
from exchange_client import ExchangeClient

class ArbitrageBot:
    def __init__(self, exchange_ids, api_keys, secrets):
        self.clients = {
            exchange_id: ExchangeClient(exchange_id, api_key, secret)
            for exchange_id, api_key, secret in zip(exchange_ids, api_keys, secrets)
        }

    def find_arbitrage_opportunities(self, symbol):
        tickers = {}
        for exchange_id, client in self.clients.items():
            ticker = client.fetch_ticker(symbol)
            tickers[exchange_id] = ticker
        
        df = pd.DataFrame(tickers)
        print("Arbitrage opportunities for:", symbol)
        print(df)

# Example usage
if __name__ == "__main__":
    exchange_ids = ['binance', 'kraken']
    api_keys = ['your_binance_api_key', 'your_kraken_api_key']
    secrets = ['your_binance_secret', 'your_kraken_secret']
    
    bot = ArbitrageBot(exchange_ids, api_keys, secrets)
    bot.find_arbitrage_opportunities('BTC/USD')

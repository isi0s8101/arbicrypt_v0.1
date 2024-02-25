import ccxt

class ExchangeClient:
    def __init__(self, exchange_id, api_key, secret):
        self.exchange = getattr(ccxt, exchange_id)({
            'apiKey': api_key,
            'secret': secret,
        })

    def fetch_balance(self):
        return self.exchange.fetch_balance()

    def fetch_ticker(self, symbol):
        return self.exchange.fetch_ticker(symbol)

    def create_order(self, symbol, type, side, amount, price=None, params={}):
        return self.exchange.create_order(symbol, type, side, amount, price, params)

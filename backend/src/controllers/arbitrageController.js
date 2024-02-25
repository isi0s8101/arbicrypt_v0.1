const Transaction = require('../models/transactionModel');

exports.executeArbitrage = async (req, res) => {
  try {
    const { userId, symbol, quantity, price, exchange, transactionType } = req.body;
    const transaction = new Transaction({ userId, symbol, quantity, price, exchange, transactionType });
    await transaction.save();
    res.status(201).json({ message: 'Arbitrage transaction executed successfully', transaction });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

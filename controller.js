const Transaction = require("./model"); 


//  Get all transactions
exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.findAll();
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching transactions", error });
  }
};

//  Add a new transaction
exports.addTransaction = async (req, res) => {
  try {
    const { title, amount, category, type } = req.body;
    const transaction = await Transaction.create({ title, amount, category, type });
    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({ message: "Error adding transaction", error });
  }
};

//  Update a transaction
exports.updateTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, amount, category, type } = req.body;
    const transaction = await Transaction.findByPk(id);
    if (!transaction) return res.status(404).json({ message: "Transaction not found" });

    await transaction.update({ title, amount, category, type });
    res.json(transaction);
  } catch (error) {
    res.status(500).json({ message: "Error updating transaction", error });
  }
};

//  Delete a transaction
exports.deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const transaction = await Transaction.findByPk(id);
    if (!transaction) return res.status(404).json({ message: "Transaction not found" });

    await transaction.destroy();
    res.json({ message: "Transaction deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting transaction", error });
  }
};

const Expense = require('../models/ExpenseModel');

exports.addExpense = async (req, res) => {
    try {
        const { title, amount, category, description, date } = req.body;
        if (!title || !category || !description || !date || amount <= 0) {
            return res.status(400).json({ message: 'All fields are required and amount must be positive!' });
        }

        await Expense.create({ title, amount, category, description, date });
        res.status(201).json({ message: 'Expense Added' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.findAll({ order: [['createdAt', 'DESC']] });
        res.status(200).json(expenses);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.deleteExpense = async (req, res) => {
    try {
        const { id } = req.params;
        await Expense.destroy({ where: { id } });
        res.status(200).json({ message: 'Expense Deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

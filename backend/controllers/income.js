const Income = require('../models/IncomeModel');

exports.addIncome = async (req, res) => {
    try {
        const { title, amount, category, description, date } = req.body;
        if (!title || !category || !description || !date || amount <= 0) {
            return res.status(400).json({ message: 'All fields are required and amount must be positive!' });
        }

        await Income.create({ title, amount, category, description, date });
        res.status(201).json({ message: 'Income Added' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.getIncomes = async (req, res) => {
    try {
        const incomes = await Income.findAll({ order: [['createdAt', 'DESC']] });
        res.status(200).json(incomes);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.deleteIncome = async (req, res) => {
    try {
        const { id } = req.params;
        await Income.destroy({ where: { id } });
        res.status(200).json({ message: 'Income Deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

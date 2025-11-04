import Expense from "../models/expense.model.js";

//post ....create expense
export const createExpense = async (req, res) => {
  try {
    const { title, amount, category, date, userId } = req.body;

    const expense = await Expense.create({
      title,
      amount,
      category,
      date,
      userId,
    });

    res.status(201).json({ message: "Expense added successfully", expense });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating expense", error: error.message });
  }
};

//Get ... fetch all expenses
export const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.findAll();
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: "Error fetching expenses", error });
  }
};

// Get total expenses amount
export const getTotalExpenses = async (req, res) => {
  try {
    const total = await Expense.sum("amount");
    res.status(200).json({ totalExpenses: total || 0 });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching total expenses",
      error: error.message,
    });
  }
};

//Get ... fetch single expense by id
export const getExpenseById = async (req, res) => {
  try {
    const { id } = req.params;

    const expense = await Expense.findByPk(id);
    if (!expense) return res.status(404).json({ message: "Expense not found" });

    res.status(200).json(expense);
  } catch (error) {
    res.status(500).json({ message: "Error fetching expense", error });
  }
};

//Put ... update expense by id
export const updateExpense = async (req, res) => {
  try {
    const { id } = req.params;

    const expense = await Expense.findByPk(id);
    if (!expense) return res.status(404).json({ message: "Expense not found" });

    await expense.update(req.body);
    res.status(200).json({ message: "Expense updated successfully", expense });
  } catch (error) {
    res.status(500).json({ message: "Error updating expense", error });
  }
};

//Delete ... delete expense by id
export const deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;

    const expense = await Expense.findByPk(id);
    if (!expense) return res.status(404).json({ message: "Expense not found" });

    await expense.destroy();
    res.status(200).json({ message: "Expense deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting expense", error });
  }
};

export const deleteAllExpenses = async (req, res) => {
  try {
    await Expense.destroy({ where: {} });
    res.status(200).json({ message: "All expenses deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting all expenses", error });
  }
};

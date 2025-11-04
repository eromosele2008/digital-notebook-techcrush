import Sale from "../models/sale.model.js";
import Expense from "../models/expense.model.js";

export const getProfitLoss = async (req, res) => {
  try {
    // Get total sales (money in)
    const totalSales = (await Sale.sum("amount")) || 0;

    // Get total expenses (money out)
    const totalExpenses = (await Expense.sum("amount")) || 0;

    // Compute profit or loss
    const profitOrLoss = totalSales - totalExpenses;

    // Determine financial status
    const status = profitOrLoss >= 0 ? "Profit" : "Loss";

    // Return result
    res.status(200).json({
      totalSales,
      totalExpenses,
      profitOrLoss,
      status,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error calculating profit and loss",
      error: error.message,
    });
  }
};

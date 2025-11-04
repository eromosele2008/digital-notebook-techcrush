import express from "express";
import {
  createExpense,
  getExpenses,
  getExpenseById,
  updateExpense,
  deleteExpense,
  deleteAllExpenses,
  getTotalExpenses,
} from "../controllers/expense.controller.js";

const router = express.Router();

// POST Create a new expense
router.post("/", createExpense);

// GET Get all expenses
router.get("/", getExpenses);

// GET Get total expenses amount
router.get("/total/amount", getTotalExpenses);

// GET Get one expense by ID
router.get("/:id", getExpenseById);

// PUTUpdate an expense by ID
router.put("/:id", updateExpense);

//Delete by ID
router.delete("/:id", deleteExpense);

//Delete all expenses
router.delete("/", deleteAllExpenses);

export default router;

import express from "express";
import {
  createSale,
  getSales,
  getSaleById,
  updateSale,
  deleteSale,
  deleteAllSales,
  getTotalSales,
} from "../controllers/sale.controller.js";

const router = express.Router();

// Routes for sales
router.post("/", createSale);
router.get("/", getSales);
router.get("/total/amount", getTotalSales);
router.get("/:id", getSaleById);
router.put("/:id", updateSale);
router.delete("/:id", deleteSale);
router.delete("/", deleteAllSales);

export default router;

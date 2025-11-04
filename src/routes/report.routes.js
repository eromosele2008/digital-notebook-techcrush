import express from "express";
import { getProfitLoss } from "../controllers/report.controller.js";
const router = express.Router();

router.get("/profit-loss", getProfitLoss);
export default router;

import express from "express";
import dotenv from "dotenv";
import expenseRoutes from "./routes/expense.routes.js";
import { connectDB } from "./config/db.js";
import db from "./config/db.js";
import "./models/user.model.js";
import "./models/expense.model.js";
import "./models/setting.model.js";
import userRoutes from "./routes/user.route.js";
import saleRoutes from "./routes/sale.routes.js";
import reportRoutes from "./routes/report.routes.js";

dotenv.config();
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect to database
connectDB();

// Sync database tables
db.sync({ alter: true })
  .then(() => console.log("Database synced successfully"))
  .catch((err) => console.error("Sync error:", err));

// route for expenses
app.use("/api/expenses", expenseRoutes);

// route for users
app.use("/api/users", userRoutes);

//route for users with ID
app.use("/api/users/:id", userRoutes);

// route for sales
app.use("/api/sales", saleRoutes);

// route for reports
app.use("/api/reports", reportRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to the Digital Notebook API");
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

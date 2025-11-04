import express from "express";
import {
  createUser,
  getUsers,
  getUserById,
} from "../controllers/user.controller.js";

const router = express.Router();

// POST /api/users → Create a new user
router.post("/", createUser);

// GET /api/users → Fetch all users
router.get("/", getUsers);

//Get user by ID
router.get("/:id", getUserById);

export default router;

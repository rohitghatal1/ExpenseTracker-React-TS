import { Router,  } from "express";

import {addExpense, deleteExpense, getExpenses} from "../controllers/expenseController"

const router = Router();

// interface paramsWithId{
//     id: string;
// }

// Add a new expense
router.post("/", addExpense);

// Fetch all expenses
router.get("/", getExpenses);

// Update an expense by ID
// router.put("/:id", updateExpense);

// Delete an expense by ID
router.delete("/:id", deleteExpense);

export default router;

import { Router, Request, Response } from "express";
import Expenses from "../models/Expenses";

const router = Router();

// Add a new expense
router.post("/", async (req: Request, res: Response) => {
    try {
        const { title, amount, category, date, notes } = req.body;

        const newExpense = new Expenses({
            title,
            amount,
            category,
            date,
            notes,
        });

        await newExpense.save();
        res.status(201).json(newExpense);
    } catch (error) {
        console.error("Error saving expense:", error);
        res.status(500).json({ error: "Error saving expense" });
    }
});

// Fetch all expenses
router.get("/", async (req: Request, res: Response) => {
    try {
        const expenses = await Expenses.find();
        res.status(200).json(expenses);
    } catch (error) {
        console.error("Error fetching expenses:", error);
        res.status(500).json({ error: "Error fetching expenses" });
    }
});

// Update an expense by ID
router.patch("/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, amount, category, date, notes } = req.body;

    try {
        const updatedExpense = await Expenses.findByIdAndUpdate(
            id,
            { title, amount, category, date, notes },
            { new: true }
        );

        if (!updatedExpense) {
            return res.status(404).json({ message: "Expense not found" });
        }

        res.status(200).json(updatedExpense);
    } catch (error) {
        console.error("Error updating expense:", error);
        res.status(500).json({ error: "Error updating expense" });
    }
});

// Delete an expense by ID
router.delete("/:id", async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const deletedExpense = await Expenses.findByIdAndDelete(id);

        if (deletedExpense) {
            res.status(200).json({ message: "Expense deleted successfully!" });
        } else {
            res.status(404).json({ error: "Expense not found" });
        }
    } catch (error) {
        console.error("Error deleting expense:", error);
        res.status(500).json({ error: "Error deleting expense" });
    }
});

export default router;

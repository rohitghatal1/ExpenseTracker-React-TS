import { Router, Request, Response } from "express";
import Expenses from "../models/Expenses"; // Verify this path

const router = Router();

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
        res.status(500).json({ error: "Error Saving expenses" });
    }
});

//to fetch data from backend

router.get("/", async (req: Request, res: Response) => {
    try{
        const expenses = await Expenses.find();
        res.status(200).json(expenses);
    } catch(error){
        console.error("Error fetching expenses: ", error);
        res.status(500).json({ error: "Error fetching expenses"})
    }
});

export default router;

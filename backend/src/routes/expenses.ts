import { Router, Request, Response } from "express";
import Expenses from "../models/Expenses";

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

// to deletre data from database 
router.delete("/:id", async (req: Request, res: Response) => {
    try{
        const {id} = req.params;
        const deletExpense = await Expenses.findByIdAndDelete(id);

        if(deletExpense){
            res.status(200).json({message: "Expenses deleted successfully!!!"});
        }
        else{
            res.status(400).json({error: "Exense not found"});
        }
    } catch(err){
        console.log("Error deleting expense", err);
        res.status(500).json({error: "Error deleting expsnes"});
    }
})

export default router;

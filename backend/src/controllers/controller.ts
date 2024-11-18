import Expenses from "../models/Expenses";
async function update(req: Request<paramsWithId>, res:Response) {
    const { id } = req.params;
    const { title, amount, category, date, notes } = req.body;

    try {
        const updatedExpense = await Expenses.findByIdAndUpdate(
            id,
            { title, amount, category, date, notes },
            { new: true }
        );

        if (!updatedExpense) {
            console.log("Expense Updated successfully");
        }

        console.log("Data updated successfully");
        res.status(200).json(updatedExpense);
    } catch (error) {
        console.error("Error updating expense:", error);
    }
}
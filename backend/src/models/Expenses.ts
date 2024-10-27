import { Schema, model, Document } from "mongoose";

interface IExpense extends Document {
    title: string;
    amount: number;
    category: string;
    date: Date;
    notes?: string;
}

const expenseSchema = new Schema<IExpense>({
    title: {type: String, required: true},
    amount: { type: Number, required: true },
    category: { type: String, required: true },
    date: { type: Date, required: true },
    notes: { type: String}
})

export default model<IExpense>("Expense", expenseSchema);
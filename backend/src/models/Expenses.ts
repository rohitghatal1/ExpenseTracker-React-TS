import { Schema, model, Document } from "mongoose";

interface IExpense extends Document {
    title: string;
    amount: number;
    category: string;
    date: Date;
    notes?: string;
}
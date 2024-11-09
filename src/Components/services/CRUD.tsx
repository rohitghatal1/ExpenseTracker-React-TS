import React from "react";

interface Expense {
  _id: string;
  title: string;
  amount: number;
  category: string;
  date: string;
  notes?: string;
}

interface FormData {
  title: string;
  amount: number;
  category: string;
  date: string;
  notes?: string;
}

// Submits the expense form, handling both adding and updating expenses
export const submitExpenseForm = async (
  e: React.FormEvent,
  formData: FormData,
  editingExpense: Expense | null,
  setExpenses: React.Dispatch<React.SetStateAction<Expense[]>>,
  closeAddExpenseModal: () => void,
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
) => {
  e.preventDefault();
  const url = editingExpense
    ? `http://localhost:5000/api/expenses/${editingExpense._id}`
    : "http://localhost:5000/api/expenses";

  const method = editingExpense ? "PUT" : "POST";

  try {
    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const newExpense = await response.json();

    setExpenses((prevExpenses) => {
      if (editingExpense) {
        return prevExpenses.map((expense) =>
          expense._id === newExpense._id ? newExpense : expense
        );
      } else {
        return [...prevExpenses, newExpense];
      }
    });

    closeAddExpenseModal();
    setFormData({
      title: "",
      amount: 0,
      category: "",
      date: "",
      notes: "",
    });
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};

// Deletes an expense by ID
export const deleteExpense = async (
  id: string,
  setExpenses: React.Dispatch<React.SetStateAction<Expense[]>>
) => {
  try {
    await fetch(`http://localhost:5000/api/expenses/${id}`, {
      method: "DELETE",
    });
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense._id !== id)
    );
  } catch (error) {
    console.error("Error deleting expense:", error);
  }
};

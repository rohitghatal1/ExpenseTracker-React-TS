import React, { useEffect, useState } from "react";
import axios from "axios";
import "../CSS/expense.css";

import { submitExpenseForm, deleteExpense } from "./services/CRUD";
import { DatePicker, Form, Input, Select } from "antd";
const { Option } = Select;

interface NavbarProps {
  isCollapsed: boolean;
}

// Defining the Expense interface to ensure all expenses are of the same type
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

const Expenses: React.FC<NavbarProps> = ({ isCollapsed }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isAddButtonVisible, setIsAddButtonVisible] = useState<boolean>(true);
  const [editingExpense, setEditingExpense] = useState<Expense | null>(null);

  const [formData, setFormData] = useState<FormData>({
    title: "",
    amount: 0,
    category: "",
    date: "",
    notes: "",
  });

  const openDatePicker = () => {
    (document.getElementById("date-field") as HTMLInputElement)!.showPicker();
  };

  const [expenses, setExpenses] = useState<Expense[]>([]);

  const totalExpense = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/expenses");
        setExpenses(response.data);
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    };

    fetchExpenses();
  }, []);

  const openNewExpenseModal = (): void => {
    setFormData({ title: "", amount: 0, category: "", date: "", notes: "" });
    setEditingExpense(null);
    setIsModalOpen(true);
    setIsAddButtonVisible(false);
  };

  const openUpdateExpenseModal = (expense: Expense): void => {
    setFormData({
      title: expense.title,
      amount: expense.amount,
      category: expense.category,
      date: expense.date,
      notes: expense.notes || "",
    });
    setEditingExpense(expense);
    setIsModalOpen(true);
    setIsAddButtonVisible(false);
  };

  const closeAddExpenseModal = (): void => {
    setIsModalOpen(false);
    setIsAddButtonVisible(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    submitExpenseForm(
      e,
      formData,
      editingExpense,
      setExpenses,
      closeAddExpenseModal,
      setFormData
    );
  };

  const handleDelete = (id: string) => {
    deleteExpense(id, setExpenses);
  };

  const convertIsoToDateString = (isoString: string) => {
    if (!isoString) return "";
    const date = new Date(isoString);
    if (isNaN(date.getTime())) return "";
    return date.toISOString().split("T")[0];
  };

  const getFormattedDate = (isoString: string): string => {
    const date = new Date(isoString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return "Today";
    } else if (date.toDateString() === yesterday.toDateString()) {
      return "Yesterday";
    } else {
      return date.toLocaleDateString();
    }
  };

  const todayExpense: Expense[] = [];
  const yesterdayExpense: Expense[] = [];
  const olderExpenses: Expense[] = [];

  expenses.forEach((expense) => {
    const formattedDate = getFormattedDate(expense.date);

    if (formattedDate === "Today") {
      todayExpense.push(expense);
    } else if (formattedDate === "Yesterday") {
      yesterdayExpense.push(expense);
    } else {
      olderExpenses.push(expense);
    }
  });

  return (
    <div>
      <div className={`expenseComponent ${isCollapsed ? "collapsed" : ""}`}>
        <div className="expenseHeading">
          <h2>Expenses</h2>
          <span>RS {totalExpense}</span>
        </div>

        <section className="newExpenseSection">
          {isModalOpen && (
            <div className="addExpenseModal">
              <Form className="addExpenseForm" onFinish={handleSubmit}>
                <div className="formData">
                  <div className="expenseElement">
                    <label htmlFor="title">Title</label>
                    <Input
                      type="text"
                      name="title"
                      placeholder="Expense description"
                      value={formData.title}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Amount */}
                  <div className="expenseElement">
                    <label htmlFor="amount">Amount</label>
                    <Input
                      type="number"
                      name="amount"
                      placeholder="Amount"
                      value={formData.amount}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Category */}
                  <div className="expenseElement">
                    <label htmlFor="category">Category</label>
                    <Select
                      // name="category"
                      // value={formData.category}
                      onChange={handleInputChange}
                    >
                      <Option value="Food">Food</Option>
                      <Option value="Drinks">Drinks</Option>
                      <Option value="Fast Food">Fast Food</Option>
                      <Option value="Grocery">Grocery</Option>
                      <Option value="Stationery">Stationery</Option>
                      <Option value="Fruits">Fruits</Option>
                      <Option value="Vegetables">Vegetables</Option>
                      <Option value="Furniture">Furniture</Option>
                      <Option value="Machinery/Equipment">
                        Machinery/Equipment
                      </Option>
                    </Select>
                  </div>

                  {/* Date */}
                  <div className="expenseElement">
                    <label htmlFor="date">Expense Date</label>
                    <DatePicker
                      type="date"
                      name="date"
                      placeholder="Date"
                      id="date-field"
                      // value={convertIsoToDateString(formData.date)}
                      onChange={handleInputChange}
                      // onClick={openDatePicker}
                    />
                  </div>

                  {/* Notes */}
                  <div className="expenseElement">
                    <label htmlFor="notes">Additional Note</label>
                    <Input.TextArea
                      name="notes"
                      placeholder="Additional notes if any."
                      value={formData.notes}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Confirm and Cancel buttons */}
                <div className="confirmCancel">
                  <button className="submitBtn" type="submit">
                    <i className="fas fa-check"></i> Confirm
                  </button>
                  <button className="cancelBtn" onClick={closeAddExpenseModal}>
                    <i className="fas fa-times"></i> Cancel
                  </button>
                </div>
              </Form>
            </div>
          )}

          {/* Add new expense button */}
          {isAddButtonVisible && (
            <div className="addNewExpense">
              <button className="addExpensebtn" onClick={openNewExpenseModal}>
                <i className="fa-solid fa-plus"></i> Add Expense
              </button>
            </div>
          )}
        </section>

        <div className="expenseContainer">
          <div className="expenseItemsContainer">
            {todayExpense.length > 0 && (
              <div className="expenseByDate">
                <h4>Today</h4>

                {todayExpense?.map((expense) => (
                  <div className="expenseItem" key={expense._id}>
                    <div className="expenseDetails">
                      <div className="expenseNameCat">
                        <span className="expenseName">{expense.title}</span>
                        <br />
                        <span className="category">({expense.category})</span>
                      </div>

                      <div className="expenseAmount">
                        <span>Rs {expense.amount}</span>
                      </div>
                    </div>

                    <div className="deleteUpdateExpense">
                      <button
                        className="updateBtn"
                        onClick={() => openUpdateExpenseModal(expense)}
                      >
                        <i className="fas fa-edit"></i> Update
                      </button>

                      <button
                        className="deleteBtn"
                        onClick={() => handleDelete(expense._id)}
                      >
                        <i className="fa-solid fa-trash"></i> Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {yesterdayExpense.length > 0 && (
              <div className="expenseByDate">
                <h4>Yesterday</h4>
                {yesterdayExpense.map((expense) => (
                  <div className="expenseItem" key={expense._id}>
                    <div className="expenseDetails">
                      <div className="expenseNameCat">
                        <span className="expenseName">{expense.title}</span>
                        <br />
                        <span className="category">({expense.category})</span>
                      </div>
                      <div className="expenseAmount">
                        <span>Rs {expense.amount}</span>
                      </div>
                    </div>

                    <div className="deleteUpdateExpense">
                      <button
                        className="updateBtn"
                        onClick={() => openUpdateExpenseModal(expense)}
                      >
                        <i className="fas fa-edit"></i> Update
                      </button>

                      <button
                        className="deleteBtn"
                        onClick={() => handleDelete(expense._id)}
                      >
                        <i className="fa-solid fa-trash"></i> Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {olderExpenses.length > 0 && (
              <div className="expenseByDate">
                {olderExpenses.map((expense) => (
                  <div>
                    <h4>{getFormattedDate(expense.date)}</h4>
                    <div className="expenseItem" key={expense._id}>
                      <div className="expenseDetails">
                        <div className="expenseNameCat">
                          <span className="expenseName">{expense.title}</span>
                          <br />
                          <span className="category">({expense.category})</span>
                        </div>
                        <div className="expenseAmount">
                          <span>Rs {expense.amount}</span>
                        </div>
                      </div>

                      <div className="deleteUpdateExpense">
                        <button
                          className="updateBtn"
                          onClick={() => openUpdateExpenseModal(expense)}
                        >
                          <i className="fas fa-edit"></i> Update
                        </button>

                        <button
                          className="deleteBtn"
                          onClick={() => handleDelete(expense._id)}
                        >
                          <i className="fa-solid fa-trash"></i> Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expenses;

import React from "react";
import "../CSS/expense.css";

const Expenses: React.FC = () => {
  return (
    <div>
      <div className="expenseComponent">
        <div className="expenseHeading">
          <h3>Expenses</h3>
          <span>Rs 28500</span>
        </div>
        <section className="newExpenseSection">
          <div className="addExpenseModal">
            <form className="addExpenseForm">
              <div className="expenseElement">
                <label htmlFor="title">Title</label>
                <input type="text" placeholder="Expense description" />
              </div>

              <div className="expenseElement">
                <label htmlFor="amount">Amount</label>
                <input type="text" placeholder="Amount" />
              </div>

              <div className="expenseElement">
                <label htmlFor="category">Category</label>
                <select name="" id="">
                  <option value="">Grocery</option>
                  <option value="">Grocery</option>
                  <option value="">Grocery</option>
                  <option value="">Grocery</option>
                </select>
              </div>

              <div className="expenseElement">
                <label htmlFor="date">Expense Date</label>
                <input type="date" name="" id="" placeholder="Date" />
              </div>

              <div className="expenseElement">
                <label htmlFor="notes">Additonal Note</label>
                <textarea
                  name=""
                  id=""
                  placeholder="Addtional notes if any."
                ></textarea>
              </div>
            </form>
          </div>

          <div className="addNewExpense">
            <button className="addExpensebtn">
              <i className="fa-solid fa-plus"></i> Add Expense
            </button>
          </div>
        </section>
        <div className="expenseContainer"></div>
      </div>
    </div>
  );
};

export default Expenses;

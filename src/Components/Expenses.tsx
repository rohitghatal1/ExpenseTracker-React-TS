import React, { useState } from "react";
import "../CSS/expense.css";

interface NavbarProps{
  isCollapsed: boolean;
}

const Expenses: React.FC<NavbarProps> = ({isCollapsed}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isAddButtonVisible, setIsAddButtonVisible] = useState<boolean>(true);

  const openNewExpenseModal = (): void => {
    setIsModalOpen(true);
    setIsAddButtonVisible(false);
  };

  const closeAddExpenseModal = (): void => {
    setIsModalOpen(false);
    setIsAddButtonVisible(true);
  };
  return (
    <div>
      <div className={`expenseComponent ${isCollapsed ? "collapsed": ""}`}>
        <div className="expenseHeading">
          <h2>Expenses</h2>
          <span>Rs 28500</span>
        </div>

        <section className="newExpenseSection">
          {isModalOpen && (
            <div className="addExpenseModal">
              <form className="addExpenseForm">
                <div className="formData">
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
                      <option value="">Food</option>
                      <option value="">Drinks</option>
                      <option value="">Fast Food</option>
                      <option value="">Grocery</option>
                      <option value="">Stationery</option>
                      <option value="">Fruits</option>
                      <option value="">Machinery/Equipment</option>
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
                </div>
                <div className="confirmCancel">
                  <button className="submitBtn">
                    <i className="fas fa-check"></i> Confirm
                  </button>
                  <button className="cancelBtn" onClick={closeAddExpenseModal}>
                    <i className="fas fa-times"></i> Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

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
            <div className="expenseItem">
              <div className="expenseDetails">
                <div className="expenseNameCat">
                  <span className="expenseName">Chaumin</span><br />
                  <span className="category">(Food)</span>
                </div>
                <div className="expenseAmount">
                  <span>Rs 60</span>
                </div>
              </div>
              <div className="deleteUpdateExpense">
                <button className="updateBtn">
                  <i className="fas fa-edit"></i> Update
                </button>
                <button className="deleteBtn">
                  <i className="fa-solid fa-trash"></i> Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expenses;

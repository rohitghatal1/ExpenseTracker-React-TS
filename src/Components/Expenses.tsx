import React, { useState } from "react";
import "../CSS/expense.css";

interface NavbarProps{
  isCollapsed: boolean;
}

const Expenses: React.FC<NavbarProps> = ({isCollapsed}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isAddButtonVisible, setIsAddButtonVisible] = useState<boolean>(true);
  const [formData, setFormData] = useState({
    title: '',
    amount: 0,
    category: '',
    date: '',
    notes: ''
  });

  const openNewExpenseModal = (): void => {
    setIsModalOpen(true);
    setIsAddButtonVisible(false);
  };

  const closeAddExpenseModal = (): void => {
    setIsModalOpen(false);
    setIsAddButtonVisible(true);
  };


  const hanldeInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
  };

  const submitExpenseForm = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("expense form called");

    try{
      const response = await fetch('http://localhost:5000/api/expenses', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(formData)
      });

      console.log("try completed");
      if(response.ok){
        console.log("Expense Added Successfully");
        closeAddExpenseModal();
      }
      else{
        const errorResponse = await response.json(); 
        console.error("Failed to add expense");
      }
    } catch(error){
      console.error("Error: ", error);
    }
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
              <form className="addExpenseForm" onSubmit={submitExpenseForm}>
                <div className="formData">
                  <div className="expenseElement">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" placeholder="Expense description" onChange={hanldeInputChange} />
                  </div>

                  <div className="expenseElement">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" name="amount" placeholder="Amount" onChange={hanldeInputChange} />
                  </div>

                  <div className="expenseElement">
                    <label htmlFor="category">Category</label>
                    <select name="category" onChange={hanldeInputChange}>
                      <option value="Food">Food</option>
                      <option value="Drinks">Drinks</option>
                      <option value="Fast Food">Fast Food</option>
                      <option value="Grocery">Grocery</option>
                      <option value="Stationery">Stationery</option>
                      <option value="Fruits">Fruits</option>
                      <option value="Macheniry/Equipment">Machinery/Equipment</option>
                    </select>
                  </div>

                  <div className="expenseElement">
                    <label htmlFor="date">Expense Date</label>
                    <input type="date" name="date" placeholder="Date" onChange={hanldeInputChange} />
                  </div>

                  <div className="expenseElement">
                    <label htmlFor="notes">Additonal Note</label>
                    <textarea name="notes" placeholder="Addtional notes if any." onChange={hanldeInputChange}></textarea>
                  </div>
                </div>
                <div className="confirmCancel">
                  <button className="submitBtn" type="submit">
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

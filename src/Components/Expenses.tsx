import React from 'react'
import '../CSS/expense.css'

const Expenses: React.FC = () => {
    return(
        <div>
            <div className="expenseComponent">
                <div className="expenseHeading">
                    <h3>Expenses</h3>
                    <span>Rs 28500</span>
                </div>
                <section className="newExpenseSection">
                    <div className="addExpenseModal">
                        <input type="text" placeholder='Expense Title'/>
                        <input type="text" placeholder='Amount'/>
                        <select name="" id="">
                            <option value="">Grocery</option>
                            <option value="">Grocery</option>
                            <option value="">Grocery</option>
                            <option value="">Grocery</option>
                        </select>
                        <input type="date" name="" id="" placeholder='Date'/>
                        <textarea name="" id="" placeholder='Addtional notes if any.'></textarea>
                    </div>
                    <div className="addNewExpense">
                        <button className='addExpensebtn'><i className="fa-solid fa-plus"></i> Add Expense</button>
                    </div>
                </section>
                <div className="expenseContainer">

                </div>
            </div>
        </div>
    )
}

export default Expenses
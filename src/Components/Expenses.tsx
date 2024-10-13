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
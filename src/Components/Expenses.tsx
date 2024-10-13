import React from 'react'
import '../CSS/expense.css'

const Expenses: React.FC = () => {
    return(
        <div>
            <div className="expenseComponent">
                <section className="newExpenseSection">
                    <div className="addNewExpense">
                        <button><i className="fa-solid fa-plus"></i> Add Expense</button>
                    </div>
                </section>
                <div className="expenseContainer">

                </div>
            </div>
        </div>
    )
}

export default Expenses
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, expenses, currency, budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        const newBudgetSet = parseInt(event.target.value);
        if (newBudgetSet > 20000) {
            alert("Budget cannot exceed 20000");
            setNewBudget(budget);
        }
        else if (newBudgetSet < totalExpenses) {
            alert("Budget cannot be lower than the spending");
            setNewBudget(budget);
        }
        else {
            dispatch({
                type: 'SET_BUDGET',
                payload: newBudgetSet
            });
            setNewBudget(newBudgetSet);
        }
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget : {currency}</span>
            <input type="number" step="10" max="20000" value={newBudget} onChange={handleBudgetChange}></input>
        </div>

    );
};
export default Budget;

import { useState, createContext } from "react";

const BudgetContext = createContext(null);

function BudgetProvider({ children }) {

    const [budgetMode, setBudgetMode] = useState(false);

    const value = {
        budgetMode,
        setBudgetMode
    }

    return (
        <BudgetContext value={value}>
            {children}
        </BudgetContext>

    )
}
export {
    BudgetContext,
    BudgetProvider
}

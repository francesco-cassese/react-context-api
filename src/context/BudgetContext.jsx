import { useState, createContext } from "react";

const budgetContext = createContext(null);

function BudgetProvider({ children }) {

    const [budgetMode, setBudgetMode] = useState(false);

    const value = {
        budgetMode,
        setBadgetMode
    }

    return (
        <BudgetProvider value={value}>
            {children}
        </BudgetProvider>

    )
}
export {
    BudgetContext,
    BudgetProvider
}

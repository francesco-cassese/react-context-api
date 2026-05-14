import { useState, createContext } from "react";

const BudgetContext = createContext(null);

function BudgetProvider({ children }) {

    const [maxPrice, setMaxPrice] = useState(null);

    const value = {
        maxPrice,
        setMaxPrice
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

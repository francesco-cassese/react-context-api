import { useContext } from "react"
import { BudgetContext } from "../context/BudgetContext"


function useBudget() {

    const value = useContext(BudgetContext);

    if (value === null) {
        throw new Error('BudgetProvider mancante');
    }

    const { budgetMode, setBudgetMode } = value;

    const toggleBudget = () => {
        setBudgetMode(!budgetMode);
    };

    const getFilteredProducts = products => {
        if (!budgetMode) return products;

        return products.filter(product => product.price <= 30);
    }

    return {
        budgetMode,
        setBudgetMode,
        toggleBudget,
        getFilteredProducts
    }
}
export default useBudget
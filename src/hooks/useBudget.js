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


    return {
        budgetMode,
        setBudgetMode,
        toggleBudget
    }
}
export default useBudget
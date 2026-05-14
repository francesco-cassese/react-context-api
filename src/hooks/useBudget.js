import { useContext } from "react"
import { BudgetContext } from "../context/BudgetContext"


function useBudget() {

    const value = useContext(BudgetContext);

    if (value === null) {
        throw new Error('BudgetProvider mancante');
    }

    const { maxPrice, setMaxPrice } = value;


    const getFilteredProducts = products => {

        if (!products) {
            return products;
        }

        if (maxPrice === null) {
            return products;
        }

        return products.filter(product => product.price <= maxPrice);
    }

    return {
        maxPrice,
        setMaxPrice,
        getFilteredProducts
    }
}
export default useBudget
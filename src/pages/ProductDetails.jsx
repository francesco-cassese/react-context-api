import { useParams, useNavigate } from "react-router"
import Card from "../components/Card.jsx";
import useFetch from "../hooks/useFetch.js";
import useBudget from "../hooks/useBudget.js"

function ProductDetails({ productList, fakeEcomUrl }) {

    const { id } = useParams();
    const attualeId = parseInt(id);
    const navigate = useNavigate();
    const { getFilteredProducts, budgetMode } = useBudget();

    const product = useFetch(`${fakeEcomUrl}/${attualeId}`);
    const filteredProduct = getFilteredProducts(productList)
    const currentIndex = filteredProduct.findIndex(item => {
        return item.id === attualeId
    });

    if (budgetMode && currentIndex === -1) {
        return (
            <>
                <div className="text-center">
                    <p>prodotto fuori portata</p>
                    <button onClick={() => navigate('/prodotti')}> Torna Indietro</button>
                </div>
            </>
        )
    }

    const handlePrevious = () => {
        if (currentIndex > 0) {
            const previousId = filteredProduct[currentIndex - 1].id;
            navigate(`/prodotti/${previousId}`);
        }
    };

    const handleNext = () => {
        if (currentIndex < filteredProduct.length - 1) {
            const nextId = filteredProduct[currentIndex + 1].id;
            navigate(`/prodotti/${nextId}`);
        }
    };

    if (!product) {
        return (
            <div className="container py-5 text-center">
                <h3>Prodotto in caricamento...</h3>
            </div>
        );
    }



    return (
        <>
            <div className="d-flex justify-content-between">
                <button
                    onClick={handlePrevious}
                    className="btn btn-outline-dark m-2"
                    disabled={currentIndex <= 0}
                >
                    ← Precedente
                </button>
                <button
                    onClick={handleNext}
                    className="btn btn-outline-dark m-2"
                    disabled={currentIndex >= filteredProduct.length - 1 || currentIndex === -1}
                >
                    Prossimo →
                </button>
            </div>
            <Card
                image={product.image}
                title={product.title}
                category={product.category}
                description={product.description}
                price={product.price}
                rating={product.rating}
            />
        </>
    )
}
export default ProductDetails
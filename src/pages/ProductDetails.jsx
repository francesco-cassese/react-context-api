import { useParams, useNavigate } from "react-router"
import Card from "../components/Card.jsx";
import useFetch from "../hooks/useFetch.js";
import useBudget from "../hooks/useBudget.js"

function ProductDetails({ productList, fakeEcomUrl }) {

    const { id } = useParams();
    const attualeId = parseInt(id);
    const navigate = useNavigate();
    const { getFilteredProducts, maxPrice } = useBudget();

    const product = useFetch(`${fakeEcomUrl}/${attualeId}`);
    const filteredProduct = getFilteredProducts(productList)
    const currentIndex = filteredProduct.findIndex(item => {
        return item.id === attualeId
    });

    if (!product) {
        return (
            <div className="container py-5 text-center">
                <h3>Prodotto in caricamento...</h3>
            </div>
        );
    }

    if (maxPrice && currentIndex === -1) {
        return (
            <>
                <div className="p-5 fw-bold text-center">
                    <h2 className="fw-bold mb-3">prodotto fuori portata</h2>
                    <button onClick={() => navigate('/prodotti')} className="btn btn-outline-warning fw-bold px-4 py-2"> Torna Indietro</button>
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
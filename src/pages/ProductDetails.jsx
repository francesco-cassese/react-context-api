import { useParams, useNavigate } from "react-router"
import Card from "../components/Card.jsx";
import useFetch from "../hooks/useFetch.js";

function ProductDetails({ productList, fakeEcomUrl }) {

    const { id } = useParams();
    const attualeId = parseInt(id);
    const navigate = useNavigate();

    const product = useFetch(`${fakeEcomUrl}/${attualeId}`);
    const currentIndex = productList.findIndex(item => {
        return item.id === attualeId
    });

    const handlePrevious = () => {
        if (currentIndex > 0) {
            const previousId = productList[currentIndex - 1].id;
            navigate(`/prodotti/${previousId}`);
        }
    };

    const handleNext = () => {
        if (currentIndex < productList.length - 1) {
            const nextId = productList[currentIndex + 1].id;
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
                    disabled={currentIndex >= productList.length - 1 || currentIndex === -1}
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
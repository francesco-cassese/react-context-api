import ProductList from "../components/ProductList"

function Prodotti({ productList }) {
    console.log('prodotti', productList);
    if (!productList) {
        return <h2 className="text-center text-light">Caricamento prodotti in corso...</h2>;
    }
    return (
        <ProductList products={productList} />
    )
}
export default Prodotti
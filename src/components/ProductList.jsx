import Card from "./Card"
import { Link } from "react-router";

function ProductList({ products }) {
    console.log('productList', products);

    const uniqueCategories = [];
    for (let i = 0; i < products.length; i++) {
        const currentCategory = products[i].category;

        if (uniqueCategories.includes(currentCategory) === false) {
            uniqueCategories.push(currentCategory);
        }
    }

    return (
        <div className="container py-4">

            {uniqueCategories.map(category => (
                <section key={category} id={category} className="mb-5">
                    <h2 className="border-bottom pb-2 mb-4 text-secondary text-capitalize">
                        {category}
                    </h2>
                    <ul className="row list-unstyled g-4">
                        {products
                            .filter(product => product.category === category)
                            .map(filteredProduct => (
                                <li key={filteredProduct.id} className="col-12 col-md-6 col-lg-3">
                                    <Link to={`/prodotti/${filteredProduct.id}`} className="text-decoration-none text-reset">
                                        <div className="card card-preview rounded-3 border-0 shadow h-100 p-3 d-flex flex-column justify-content-between">
                                            <h5 className="card-title card-text text-secondary">{filteredProduct.title}</h5>
                                            <div className="w-100 container-img-preview">
                                                <img src={filteredProduct.image} alt={filteredProduct.title} className="d-block card-image" />
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </section>
            ))}
        </div>
    );
}

export default ProductList
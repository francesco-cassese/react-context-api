function Card({ image, title, category, description, price, rating }) {
    return (
        <section className="container py-2">
            <div className="d-flex align-items-center">
                <div className="section-left">
                    <div className="single-product-img">
                        <img src={image} alt={title} />
                    </div>
                </div>
                <div className="section-right mx-5">
                    <h1 className="display-6 fw-semibold mb-3 clamp-2">{title}</h1>
                    <span className="badge bg-success-subtle text-success px-3 py-2 mb-3 rounded-pill">{category}</span>
                    <h2 className="fw-bold text-success mb-3 display-6">&euro;{price}</h2>
                    <div className="d-inline-flex align-items-center gap-2 mb-3">
                        <span>⭐</span>
                        <span className="fw-medium">{rating?.rate}</span>
                        <span className="text-muted">({rating?.count})</span>
                    </div>
                    <div className="mt-4 p-3 bg-light rounded">
                        <h3>Descrizione</h3>
                        <p className="text-secondary lh-lg mb-0 clamp-4">{description}</p>
                    </div>
                </div>
            </div>
        </section >
    )
}
export default Card

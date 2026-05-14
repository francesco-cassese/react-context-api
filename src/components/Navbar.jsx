import { Link } from "react-router"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="" className="nav-link fw-bold" aria-current="page">Homepage</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="chi-siamo" className="nav-link fw-bold">Chi Siamo</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="prodotti" className="nav-link fw-bold" >Prodotti</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar
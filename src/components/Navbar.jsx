import { Link } from "react-router"
import useBudget from "../hooks/useBudget"
import { useState } from "react";

function Navbar() {
    const { maxPrice, setMaxPrice } = useBudget();
    const [showInput, setShowInput] = useState(false)

    const handleChange = event => {

        const { value, checked } = event.target;

    }

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
                <button
                    className={`btn btn-sm ${showInput ? 'btn-warning' : 'btn-outline-light'}`}
                    onClick={() => setShowInput(!showInput)}
                >
                    {showInput ? "Chiudi Filtro" : "Ricerca Avanzata"}
                </button>

                {showInput &&
                    <>
                        <label for="range1" class="form-label text-white">Filtra per prezzo</label>
                        <input type="range" class="form-range w-25" id="range1"></input>
                    </>
                }
            </div>
        </nav>
    )
}
export default Navbar
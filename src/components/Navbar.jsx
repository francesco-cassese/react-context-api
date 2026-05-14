import { Link } from "react-router"
import useBudget from "../hooks/useBudget"
import { useState } from "react";

function Navbar() {
    const { maxPrice, setMaxPrice } = useBudget();
    const [showInput, setShowInput] = useState(false)

    const handleChange = event => {

        const { value } = event.target;
        const sliderValue = Number(value);

        setMaxPrice(sliderValue);

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
                    {showInput ? "Chiudi Filtro" : "Filtra per prezzo"}
                </button>

                {showInput &&
                    <>
                        <div className="d-flex align-items-center mx-4">
                            <span className="badge bg-danger text-white">Min</span>
                            <div className="container-range d-flex flex-column m-3">
                                <label for="range1" class="form-label badge bg-dark">Filtra per prezzo</label>
                                <input
                                    type="range"
                                    class="form-range"
                                    id="range1"
                                    min="0"
                                    max="1000"
                                    value={maxPrice}
                                    onChange={handleChange}
                                >
                                </input>
                                <span className="badge bg-warning text-dark">{maxPrice}</span>
                            </div>
                            <span className="badge bg-danger">Max</span>
                        </div>
                    </>
                }
            </div>
        </nav >
    )
}
export default Navbar
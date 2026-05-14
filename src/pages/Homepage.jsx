import { Link } from "react-router";

function Homepage() {
    return (
        <div className="welcome-hero ps-3">
            <h1 className="display-2 fw-bold mb-2 clean-title">Misfit Market</h1>

            <p className="fs-4 mb-4 clean-subtitle">
                L'unico posto dove i bug sono "funzionalità creative"
                e il budget è solo un suggerimento.
            </p>
        </div>
    );
}

export default Homepage;
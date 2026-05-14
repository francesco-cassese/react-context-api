import { Outlet } from "react-router"
import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"

function LayoutPage() {
    return (
        <>
            <div className="wrapper">
                <header >
                    <Navbar />
                </header >
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>

        </>
    )
}
export default LayoutPage
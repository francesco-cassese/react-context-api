import { BrowserRouter, Routes, Route } from "react-router";
import NotFound from "./pages/NotFound.jsx";
import Homepage from "./pages/Homepage.jsx";
import ChiSiamo from "./pages/ChiSiamo.jsx";
import Prodotti from "./pages/Prodotti.jsx";
import LayoutPage from "./layouts/LayoutPage.jsx";
import dreamTeam from "./data/dreamTeam.js";
import useFetch from "./hooks/useFetch.js";
import { useEffect, useState } from "react";
import ProductDetails from "./pages/ProductDetails.jsx";


function App() {

  const fakeEcomUrl = 'https://fakestoreapi.com/products'

  const data = useFetch(fakeEcomUrl);
  if (!data) return <div className="text-center py-5">Caricamento prodotti...</div>;
  return (
    <BrowserRouter >
      <Routes>
        <Route element={<LayoutPage />}>

          {/* http://localhost:5173/ */}
          <Route path="" element={<Homepage />} />

          {/* http://localhost:5173/chi-siamo */}
          <Route path="chi-siamo" element={<ChiSiamo members={dreamTeam} />} />

          {/* http://localhost:5173/prodotti */}
          <Route path="prodotti" element={<Prodotti productList={data} />} />

          {/* http://localhost:5173/prodotti */}
          <Route path="prodotti/:id" element={<ProductDetails
            productList={data}
            fakeEcomUrl={fakeEcomUrl} />} />

        </Route>
        {/* Pagina non trovata*/}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter >
  );
}
export default App;

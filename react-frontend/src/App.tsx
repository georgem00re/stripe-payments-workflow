import React, {useEffect, useState} from "react";
import "./index.css";
import {ProductsGallery} from "./components/ProductsGallery";
import {Product} from "./schemas/Product";
import {dataService} from "./services/data.service";
import {BrowserRouter, Route, Router, Routes} from "react-router";

const App: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        const fetchProducts = async () => {
            const result = await dataService.getProducts();
            if (!result.error) {
                setProducts(result.data);
            }
        }
        fetchProducts()
    }, []);

    const productsGallery= <ProductsGallery products={products}/>

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={productsGallery} />
                <Route path="/products" element={productsGallery} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;

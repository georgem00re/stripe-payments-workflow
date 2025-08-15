import React, {useEffect, useState} from "react";
import "./index.css";
import {ProductsGallery} from "./components/ProductsGallery";
import {Product} from "./schemas/Product";
import {dataService} from "./services/data.service";
import {BrowserRouter, Navigate, Route, Routes} from "react-router";
import {ShoppingCart} from "./components/ShoppingCart";
import {NavigationBar} from "./components/NavigationBar";

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
            <NavigationBar/>
            <Routes>
                <Route path="/" element={<Navigate to="/products" replace />} />
                <Route path="/products" element={productsGallery} />
                <Route path="/shopping-cart" element={<ShoppingCart items={[]}/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;

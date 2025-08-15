import React, {useEffect, useState} from "react";
import "./index.css";
import {ProductsGallery} from "./components/ProductsGallery";
import {Product} from "./schemas/Product";
import {dataService} from "./services/data.service";

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

    return <ProductsGallery products={products}/>
}

export default App;

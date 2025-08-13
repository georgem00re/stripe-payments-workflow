import React from "react";
import "./index.css";
import {ProductsTable} from "./components/ProductsTable";

const products = [
    {
        productId: "123",
        priceInPence: 1099,
    },
    {
        productId: "456",
        priceInPence: 699,
    }
]

const App: React.FC = () => {
    return <ProductsTable products={products}/>
}

export default App;

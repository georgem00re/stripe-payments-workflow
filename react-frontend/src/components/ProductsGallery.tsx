import { Product } from "../schemas/Product";
import React from "react";

interface ProductsGalleryProps {
    products: Product[];
}

export const ProductsGallery = ({ products }: ProductsGalleryProps) => {
    const galleryStyle: React.CSSProperties = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "20px",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
    };

    const cardStyle: React.CSSProperties = {
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "16px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        textAlign: "center",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    };

    const imgStyle: React.CSSProperties = {
        width: "100%",
        height: "150px",
        objectFit: "cover",
        borderRadius: "8px",
        marginBottom: "12px",
    };

    const buttonStyle: React.CSSProperties = {
        marginTop: "12px",
        padding: "10px 16px",
        border: "none",
        borderRadius: "8px",
        backgroundColor: "#0070f3",
        color: "#fff",
        cursor: "pointer",
        fontWeight: "bold",
    };

    return (
        <div style={galleryStyle}>
            {products.map((product) => (
                <div key={product.productId} style={cardStyle}>
                    <div>
                        <img
                            src={product.productImageUrl}
                            alt={product.productName}
                            style={imgStyle}
                        />
                        <h3>{product.productName}</h3>
                        <p>£{(product.priceInPence / 100).toFixed(2)}</p>
                    </div>
                    <button style={buttonStyle} onClick={() => alert("Button clicked!")}>
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
};

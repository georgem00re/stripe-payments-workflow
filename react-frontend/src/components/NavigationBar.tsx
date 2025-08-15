
import React from "react";

export const NavigationBar = () => {
    const navStyle: React.CSSProperties = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 20px",
        backgroundColor: "#0070f3",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
    };

    const linksStyle: React.CSSProperties = {
        display: "flex",
        gap: "20px",
    };

    const linkStyle: React.CSSProperties = {
        color: "#fff",
        textDecoration: "none",
        fontWeight: "bold",
    };

    return (
        <nav style={navStyle}>
            <div style={linksStyle}>
                <a href="/products" style={linkStyle}>Products</a>
                <a href="/shopping-cart" style={linkStyle}>Shopping Cart</a>
            </div>
        </nav>
    );
};

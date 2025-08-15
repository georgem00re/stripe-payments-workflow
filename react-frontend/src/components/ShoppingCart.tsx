
import React from "react";
import { Product } from "../schemas/Product";

interface ShoppingCartProps {
    items: Product[];
}

export const ShoppingCart: React.FC<ShoppingCartProps> = ({ items }) => {
    const containerStyle: React.CSSProperties = {
        display: "grid",
        gridTemplateColumns: "1fr 320px",
        gap: "24px",
        alignItems: "start",
        width: "100%",
        boxSizing: "border-box",
        padding: "20px",
    };

    const panelStyle: React.CSSProperties = {
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 10px rgba(0,0,0,0.06)",
    };

    const tableWrapStyle: React.CSSProperties = {
        ...panelStyle,
        overflow: "hidden",
    };

    const emptyPanelStyle: React.CSSProperties = {
        ...panelStyle,
        padding: "24px",
        fontFamily: "Arial, sans-serif",
    };

    const tableStyle: React.CSSProperties = {
        width: "100%",
        borderCollapse: "separate",
        borderSpacing: 0,
        fontFamily: "Arial, sans-serif",
    };

    const thBaseStyle: React.CSSProperties = {
        textAlign: "left",
        padding: "14px 16px",
        backgroundColor: "#f8fafc",
        borderBottom: "1px solid #e5e7eb",
        fontSize: "14px",
        color: "#374151",
    };

    const thProductStyle: React.CSSProperties = {
        ...thBaseStyle,
        width: "60%",
    };

    const thPriceStyle: React.CSSProperties = {
        ...thBaseStyle,
        width: "20%",
    };

    const tdStyle: React.CSSProperties = {
        padding: "14px 16px",
        borderBottom: "1px solid #f1f5f9",
        verticalAlign: "middle",
        fontSize: "14px",
        color: "#111827",
        backgroundColor: "#fff",
    };

    const nameCellStyle: React.CSSProperties = {
        display: "flex",
        alignItems: "center",
        gap: "12px",
    };

    const imgStyle: React.CSSProperties = {
        width: "44px",
        height: "44px",
        objectFit: "cover",
        borderRadius: "8px",
        border: "1px solid #e5e7eb",
        flex: "0 0 auto",
    };

    const summaryStyle: React.CSSProperties = {
        ...panelStyle,
        padding: "16px",
        position: "sticky" as const,
        top: 16,
    };

    const summaryTitleStyle: React.CSSProperties = {
        margin: 0,
        marginBottom: "12px",
        fontSize: "16px",
        fontFamily: "Arial, sans-serif",
    };

    const rowStyle: React.CSSProperties = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "10px",
        fontFamily: "Arial, sans-serif",
        fontSize: "14px",
    };

    const totalRowStyle: React.CSSProperties = {
        ...rowStyle,
        borderTop: "1px dashed #e5e7eb",
        paddingTop: "12px",
        marginTop: "12px",
        fontWeight: 700,
        fontSize: "16px",
    };

    const checkoutBtnStyle: React.CSSProperties = {
        width: "100%",
        padding: "12px 16px",
        border: "none",
        borderRadius: "10px",
        backgroundColor: "#111827",
        color: "#fff",
        cursor: items.length ? "pointer" : "not-allowed",
        fontWeight: 700,
        fontSize: "14px",
        marginTop: "12px",
    };

    const emptyTextStyle: React.CSSProperties = {
        margin: 0,
    };

    const gbp = (pence: number) =>
        (pence / 100).toLocaleString("en-GB", {
            style: "currency",
            currency: "GBP",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });

    const totalPence = items.reduce((sum, p) => sum + p.priceInPence, 0);

    return (
        <div style={containerStyle}>
            <div style={items.length ? tableWrapStyle : emptyPanelStyle}>
                {items.length ? (
                    <table style={tableStyle}>
                        <thead>
                        <tr>
                            <th style={thProductStyle}>Product</th>
                            <th style={thPriceStyle}>Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        {items.map((product, idx) => (
                            <tr key={`${product.productId}-${idx}`}>
                                <td style={tdStyle}>
                                    <div style={nameCellStyle}>
                                        <img
                                            src={product.productImageUrl}
                                            alt={product.productName}
                                            style={imgStyle}
                                        />
                                        <div>
                                            <div style={{ fontWeight: 700 }}>{product.productName}</div>
                                            <div style={{ fontSize: "12px", color: "#6b7280" }}>
                                                ID: {product.productId}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td style={tdStyle}>{gbp(product.priceInPence)}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                ) : (
                    <p style={emptyTextStyle}>Your cart is empty.</p>
                )}
            </div>

            <aside style={summaryStyle} aria-label="Cart summary">
                <h3 style={summaryTitleStyle}>Order Summary</h3>
                <div style={rowStyle}>
                    <span>Items</span>
                    <span>{items.length}</span>
                </div>
                <div style={totalRowStyle}>
                    <span>Total</span>
                    <span>{gbp(totalPence)}</span>
                </div>
                <button style={checkoutBtnStyle} disabled={!items.length} onClick={() => alert("Working!")}>
                    Checkout
                </button>
            </aside>
        </div>
    );
};

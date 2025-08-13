import {Product} from "../schemas/Product";

interface ProductsTableProps {
    products: Product[]
}

export const ProductsTable = ({ products }: ProductsTableProps) => {
    const tableStyle: React.CSSProperties = {
        borderCollapse: 'collapse',
        width: '100%',
        fontFamily: 'Arial, sans-serif'
    }

    const thStyle: React.CSSProperties = {
        backgroundColor: '#f4f4f4',
        border: '1px solid #ddd',
        padding: '8px',
        textAlign: 'left'
    }

    const tdStyle: React.CSSProperties = {
        border: '1px solid #ddd',
        padding: '8px'
    }

    return (
        <table style={tableStyle}>
            <thead>
            <tr>
                <th style={thStyle}>Product ID</th>
                <th style={thStyle}>Price (£)</th>
            </tr>
            </thead>
            <tbody>
            {products.map(product => (
                <tr key={product.productId}>
                    <td style={tdStyle}>{product.productId}</td>
                    <td style={tdStyle}>{(product.priceInPence / 100).toFixed(2)}</td>
                </tr>
            ))}
            <tr>
                <td style={tdStyle}><strong>Total</strong></td>
                <td style={tdStyle}>
                    <strong>
                        {(products.reduce((sum, p) => sum + p.priceInPence, 0) / 100).toFixed(2)}
                    </strong>
                </td>
            </tr>
            </tbody>
        </table>
    );
}

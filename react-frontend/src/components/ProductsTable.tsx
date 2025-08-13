
interface ProductsTableProps {
    products: Product[]
}

interface Product {
    productId: string;
    priceInPence: number;
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
            </tbody>
        </table>
    )
}


const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 10,
});

async function fetchProducts() {
    const { rows } = await pool.query({
        name: "listProducts",
        text: "SELECT product_id, price_in_pence, paid_for FROM product"
    });
    return rows;
}

module.exports = { pool, fetchProducts };

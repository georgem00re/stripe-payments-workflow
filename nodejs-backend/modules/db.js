
const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 10,
});

async function fetchProducts() {
    const { rows } = await pool.query({
        name: "listProducts",
        text: `
            SELECT
                product_id AS "productId",
                price_in_pence AS "priceInPence",
                paid_for AS "paidFor"
            FROM product
        `
    });
    return rows;
}

module.exports = { pool, fetchProducts };

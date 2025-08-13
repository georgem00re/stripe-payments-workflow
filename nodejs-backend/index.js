
const express = require("express");
const app = express();
const PORT = 3000;
require('dotenv').config();
const { fetchProducts } = require("./modules/db.js")
const cors = require("cors");

app.use(cors());

app.get("/product", async (req, res) => {
    try {
        const products = await fetchProducts();
        res.json({ products });
    } catch (err) {
        console.error('Error fetching products:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
})

app.listen(PORT, () => {
    console.log(`Listening for connections on port ${PORT}`);
});

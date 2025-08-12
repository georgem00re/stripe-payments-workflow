
CREATE TABLE IF NOT EXISTS product (
    product_id     UUID NOT NULL PRIMARY KEY,
    price_in_pence INTEGER NOT NULL,
    paid_for       BOOLEAN NOT NULL
);

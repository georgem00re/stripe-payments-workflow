
CREATE TABLE IF NOT EXISTS product (
    product_id        UUID NOT NULL PRIMARY KEY,
    product_name      TEXT NOT NULL,
    product_image_url TEXT NOT NULL,
    price_in_pence    INTEGER NOT NULL,
    paid_for          BOOLEAN NOT NULL
);

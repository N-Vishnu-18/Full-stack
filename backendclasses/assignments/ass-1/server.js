const exp = require('express');
const app = exp();

// Middleware to parse JSON bodies
app.use(exp.json());

let productList = [
    {
        productID: 1,
        productName: 'Laptop',
        price: 1000,
        brand: 'Lenovo'
    },
    {
        productID: 2,
        productName: 'Smartphone',
        price: 500,
        brand: 'Samsung'
    }
];

// Create new Product
app.post('/new-product', (req, res) => {
    // Get new product from request body
    let newProduct = req.body;

    // Add product to the productList
    productList.push(newProduct);

    // Send response
    res.send({ message: "New product created" });
});

// Get all products
app.get('/products', (req, res) => {
    res.send({ products: productList });
});

// Get product by product ID
app.get('/products/:id', (req, res) => {
    const id = Number(req.params.id);
    let product = productList.find(product => product.productID === id);
    if (product === undefined)
        res.send({ message: 'Product not found' });
    else
        res.send({ payload: product });
});

// Update product data
app.put('/product/:id', (req, res) => {
    // Get modified product
    let modifiedProduct = req.body;

    // Find index of product
    let index = productList.findIndex(product => product.productID === modifiedProduct.productID);
    if (index === -1)
        res.send({ message: "Product not found" });
    else {
        productList.splice(index, 1, modifiedProduct);
        res.send({ message: "Product modified" });
    }
});

// Delete a product by ID
app.delete('/product/:id', (req, res) => {
    let id = Number(req.params.id);
    let index = productList.findIndex(product => product.productID === id);
    if (index === -1)
        res.send({ message: "Product not found" });
    else {
        productList.splice(index, 1);
        res.send({ message: "Product deleted" });
    }
});

app.listen(4000, () => console.log('App is running on port 4000'));

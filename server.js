require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 5000
const bodyParser = require('body-parser');
const cors = require('cors')
const morgan = require('morgan')
const productRouter = require('./node/routes/products.routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors())
app.use(morgan("dev"))

app.use("/products", productRouter)

app.listen(port, () => {
    console.log(`App is listening on ${port}`)
})
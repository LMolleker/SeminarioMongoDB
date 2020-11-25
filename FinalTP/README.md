# MongoDB Seminar

## <strong> Nodejs + express + mongoDB </strong>

**Mongoose:** Object Data Modeling for MongoDB and Node js.
**Body-Parser:** Middlware to parse the data of the request.
**DotEnv:** To save and hide the connection info.

## Steps:

1. Download.
2. Inside the proyect, execute: npm start
3. Test the API with a client like POSTMAN

### <ins>**Products:**</ins>

> To list the productos (method : GET): http://localhost:8080/products

> To add a product (method : POST): http://localhost:8080/products

```js
Example:
{
    "name": "IPA",
    "description": "Bitter, high level of hop",
    "stock": 420,
    "price": 150
}
```

> To modify a prodcut (method : PUT): http://localhost:8080/products/:ID

```js
Example
{
    "name": "Honey",
    "description": "Sweet like honey",
    "stock": 560,
    "price": 120
}
```

> To delete a product (method : DELETE): http://localhost:8080/products/:ID

### <ins>**Sales:**</ins>

> To list the sales (method : GET): http://localhost:8080/sales

> To add a sale (method : POST): http://localhost:8080/sales

```js
Ejemplo para utilizar de Body
{
    "direction": "Rodriguez 1230",
    "totalPrice": 150,
    "products": [
        ":productID"
    ]
}
```
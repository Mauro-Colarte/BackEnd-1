import express from "express";
import ProductManager from "../ProductsManager.js";

//instanciamos el router de express para manejar las rutas
const productsRouter = express.Router();
//instanciamos el manejador de nuestro archivo de productos 
const productManager = new ProductManager("./src/data/product.json");

//GET "/"
productsRouter.get("/", async(req, res)=> {
try {
    const data = await productManager.getProduct();
    res.status(200).send(data);
} catch (error) {
    res.status(500).send({message: "Error al obtener los productos"});
}

});

//GET "/;pid"

//POST "/"

//PUT "/:pid"

//DELETE "/:pid"

export default productsRouter;
import express from 'express';
import CartManager from "../CartManager"

//instaciamos el router de express para manejar las ruta
const cartRouter = express.Router();
//instanciamos el manejador de nuestro archivo de carrito
const cartManager = new CartManager("./src/data/cart.json");

//POST "/"

//GET "/:cid"

///POST "/:cid/product/:pid"

export default cartRouter;
import express from "express";
import productsRouter from "./routes/products.router.js";
const app = express();
//*puerto de nuestro servidor
const PORT = 5300;

//habilitamos para poder recibir json
app.use(express.json());

//endpoints
app.use("/api/product", productsRouter);

//definbir la ruta de el carrito "/api/carts"


//iniciamos el servidor y escuchamos en el puerto definido
app.listen(PORT,() =>{ 
    console.log(`Servidor iniciado en: http://localhost:${PORT}`) 
});
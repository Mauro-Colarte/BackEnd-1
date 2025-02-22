import express from "express";
import productManager from "../productManager.js"; // Asegúrate de que es una CLASE

// Instanciamos el router de express para manejar las rutas
const productsRouter = express.Router();

// Instanciamos el manejador de productos
const productManagerInstance = new productManager("./src/data/product.json");

// GET "/"
productsRouter.get("/", async (req, res) => {
    try {
        const data = await productManagerInstance.getProducts(); // Usamos la instancia correcta
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({ message: error.message});
    }
});

//GET "/;pid"
// GET "/:pid"
productsRouter.get('/:pid', async (req, res) => {
    const { pid } = req.params;

    try {
        // Convertimos pid a número si es necesario
        const product = await productManagerInstance.getProductById(Number(pid));

        if (!product) {
            return res.status(404).send({ message: `Producto con ID ${pid} no encontrado.` });
        }

        res.status(200).send(product);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

//POST "/"
// POST "/"
productsRouter.post('/', async (req, res) => {
    const newProduct = req.body;

    try {
        const createdProduct = await productManagerInstance.addProduct(newProduct);
        res.status(201).send(createdProduct);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// PUT "/:pid"
productsRouter.put('/:pid', async (req, res) => {
    const { pid } = req.params;
    const updatedProduct = req.body;

    try {
        const result = await productManagerInstance.updateProduct(Number(pid), updatedProduct);
        if (!result) {
            return res.status(404).send({ message: `Producto con ID ${pid} no encontrado o no actualizado.` });
        }
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// DELETE "/:pid"
productsRouter.delete('/:pid', async (req, res) => {
    const { pid } = req.params;

    try {
        const result = await productManagerInstance.deleteProduct(Number(pid));
        if (!result) {
            return res.status(404).send({ message: `Producto con ID ${pid} no encontrado o no eliminado.` });
        }
        res.status(200).send({ message: `Producto con ID ${pid} eliminado correctamente.` });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

export default productsRouter;
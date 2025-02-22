import fs from "fs";

class productManager{
    constructor(pathFile) {
        this.pathFile = pathFile;

    }

    //*getproduct
getProducts = async () => {
    try {
        //manera de leer el contenido de nuestro archivos y guardarlo
        const fileData = await fs.promises.readFile(this.pathFile, 'utf-8');
        const data = JSON.parse(fileData);
        return data;
    } catch (error) {
        throw new Error(`Error al leer el archivo de productos: ${error.message}`);
    
}
    //*getproductByID

    //*addProduct

    //setProductById

    //deleteProductById
}}


export default productManager;
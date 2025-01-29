import express from "express";

const app = express();
//*puerto de nuestro servidor
const PORT = 3000;

//habilitamos para poder recibir json
app.use(express.json());
//iniciamos el servidor y escuchamos en el puerto definido
app.listen(PORT,() => console.log(`Servidor iniciado en: http://localhost:${PORT}`) );

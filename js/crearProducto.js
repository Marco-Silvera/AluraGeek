import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector('[data-formulario]')

async function crearProducto(evento) {

    evento.preventDefault();

    // Obtenemos los valores de los inputs
    const nombre = document.querySelector('[data-nombre]').value;
    const precio = document.querySelector('[data-precio]').value;
    const imagen = document.querySelector('[data-imagen]').value;

    // await conexionAPI.enviarProducto(nombre, precio, imagen)

    // window.location.href = 'index.html';

    // console.log("info enviada");



    try {
        // Enviamos el producto
        await conexionAPI.enviarProducto(nombre, precio, imagen);

        // Actualizamos la lista de productos
        await listarProductos();

        console.log("Producto agregado exitosamente.");
    } catch (error) {
        console.error("Error al agregar el producto:", error);
    }
}

formulario.addEventListener('submit', evento => crearProducto(evento));
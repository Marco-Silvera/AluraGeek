import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector('[data-formulario]')

async function crearProducto(evento) {

    // evento.preventDefault();

    // Obtenemos los valores de los inputs
    const nombre = document.querySelector('[data-nombre]').value;
    const precio = document.querySelector('[data-precio]').value;
    const imagen = document.querySelector('[data-imagen]').value;

    await conexionAPI.enviarProducto(nombre, precio, imagen)

    await listarProductos();

    console.log("info enviada");
}

formulario.addEventListener('submit', evento => crearProducto(evento));
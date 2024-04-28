import { conexionAPI } from './conexionAPI.js';

const lista = document.querySelector('[data-lista]')

function crearCard(id, nombre, precio, imagen) {
    const producto = document.createElement('article');
    producto.className = 'productos-item';
    producto.innerHTML = `<img class="productos-img"
    src="${imagen}"
    alt="${nombre}">
    <h4 class="productos-nombre">
        ${nombre}
    </h4>
    <div>
        <h5 class="productos-precio">
            $ ${precio}
        </h5>
        <img class="trash" src="img/trash.svg" alt="Tacho de basura">
    </div>`;

    return producto;
}

async function listarProductos() {
    const listaAPI = await conexionAPI.listarProductos();

    listaAPI.forEach(producto => lista.appendChild(crearCard(producto.nombre, producto.precio, producto.imagen)))
}


listarProductos();


// LIMPIAR INPUTS

const btnLimpiar = document.querySelector('.limpiar-input');

btnLimpiar.addEventListener('click', function () {
    const inputs = document.querySelectorAll('[data-formulario] input:not([type="submit"])');
    inputs.forEach(input => {
        input.value = ''; // Establecer el valor del input como una cadena vacía
    });
});
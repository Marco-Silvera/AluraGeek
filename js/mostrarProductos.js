import { conexionAPI } from './conexionAPI.js';

const lista = document.querySelector('[data-lista]');

function crearCard(id, nombre, precio, imagen) {
    const producto = document.createElement('article');
    producto.className = 'productos-item';
    producto.dataset.id = id;
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

    // Agregar evento de clic al icono de la papelera
    const trashIcon = producto.querySelector('.trash');
    trashIcon.addEventListener('click', (event) => {
        event.preventDefault();
        eliminarProducto(id);
    });


    return producto;
}

async function listarProductos() {
    const listaAPI = await conexionAPI.listarProductos();

    listaAPI.forEach(producto => lista.appendChild(crearCard(producto.id, producto.nombre, producto.precio, producto.imagen)));
}

listarProductos();

async function eliminarProducto(id) {
    try {

        // Eliminar producto del archivo db.json
        await conexionAPI.eliminarProducto(id);


        // Eliminar producto visualmente
        const productoAEliminar = document.querySelector(`[data-id="${id}"]`);
        if (productoAEliminar) {
            productoAEliminar.remove();
        }
    } catch (error) {
        console.error('Error al eliminar el producto:', error);
    }
}


const btnLimpiar = document.querySelector('.limpiar-input');

btnLimpiar.addEventListener('click', function () {
    const inputs = document.querySelectorAll('[data-formulario] input:not([type="submit"])');
    inputs.forEach(input => {
        input.value = ''; // Establecer el valor del input como una cadena vacía
    });
});
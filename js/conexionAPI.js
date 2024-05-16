async function listarProductos() {
    // Establecemos donde va a buscar los productos
    // al usar fecth, por defecto realiza una petición: GET la cual retorna los elementos de la URL
    const conexion = await fetch('https://fake-api-alura-geek-nu.vercel.app/productos');
    const conexionConvertida = conexion.json();

    return conexionConvertida;
}

async function enviarProducto(nombre, precio, imagen) {
    const conexion = await fetch('https://fake-api-alura-geek-nu.vercel.app/productos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombre: nombre,
            precio: precio,
            imagen: imagen
        })
    })
    const conexionConvertida = conexion.json();
    return conexionConvertida;
}












async function eliminarProducto(id) {
    try {
        await fetch(`https://fake-api-alura-geek-nu.vercel.app/productos?id=${id}`, {
            method: 'DELETE'
        });
    } catch (error) {
        console.error('Error al eliminar el producto del servidor:', error);
    }
}










export const conexionAPI = {
    listarProductos, enviarProducto, eliminarProducto
}

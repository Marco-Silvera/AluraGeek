async function listarProductos() {
    // Establecemos donde va a buscar los productos
    // al usar fecth, por defecto realiza una petición: GET la cual retorna los elementos de la URL
    const conexion = await fetch('http://localhost:3001/productos');
    const conexionConvertida = conexion.json();

    return conexionConvertida;
}

async function enviarProducto(nombre, precio, imagen) {
    const conexion = await fetch('http://localhost:3001/productos', {
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

export const conexionAPI = {
    listarProductos, enviarProducto
}

async function listarProductos() {
    // Establecemos donde va a buscar los productos
    // al usar fecth, por defecto realiza una petición: GET la cual retorna los elementos de la URL
    const conexion = await fetch('http://localhost:3001/productos');
    const conexionConvertida = conexion.json();

    return conexionConvertida;
}

export const conexionAPI = {
    listarProductos
}

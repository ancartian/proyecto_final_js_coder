const btnCart = document.querySelector('.container-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

//uso de funcion flecha para evento del click
btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
})

//Agregando dinamicamente la barra de navegacion al header

//El uso de este var es para que aceda de manera global a esta variable
var headerElement = document.getElementById("miHeader");

// Crear el elemento nav
let navElement = document.createElement("nav");
navElement.id = "navegacion";

// Crear la lista ul
let ulElement = document.createElement("ul");

// Array con los enlaces y sus atributos
let enlaces = [
    { href: "index.html", text: "Inicio" },
    { href: "cursos.html", text: "Cursos" },
    { href: "calificaciones.html", text: "Calificaciones" },
    { href: "charts.html", text: "Charts" },
    { href: "#SobreNosotros", text: "Sobre nosotros" }
];

// Recorrer el array y crear elementos li y a, luego agregarlos a la lista ul
enlaces.forEach(function (enlace) {
    let liElement = document.createElement("li");
    let aElement = document.createElement("a");
    aElement.href = enlace.href;
    aElement.textContent = enlace.text;

    liElement.appendChild(aElement);
    ulElement.appendChild(liElement);
});

// Agregar la lista ul 
navElement.appendChild(ulElement);

// Agregar el elemento nav
headerElement.appendChild(navElement);


// Obtener header
var headerElement = document.getElementById("miHeader");

//Agregando el logo
let miDiv = document.createElement("div");
miDiv.classList.add('logo');

// Crear el elemento img y h1
let miImagen = document.createElement("img");
let nuevaRuta = "img/AmericanAudio.gif";
miImagen.src = nuevaRuta;

// Crea h1
let miH1 = document.createElement('h1');
miH1.textContent = 'Tienda';

// Agregar la imagen y h1
miDiv.appendChild(miImagen);
miDiv.appendChild(miH1);


headerElement.insertAdjacentElement('afterend', miDiv);



// Obtener el contenedor de los elementos
let containerItems = document.createElement('div');
containerItems.classList.add('container-items');

// Array con la información de los productos
let productos = [
    { imagen: './img/1.jpg', nombre: 'Ableton live 12', precio: '$80' },
    { imagen: './img/2.jpg', nombre: 'Diseño de sonido', precio: '$20' },
    { imagen: './img/3.jpg', nombre: 'Marketing musical', precio: '$50' }
];

// Recorrer el array y crear elementos para cada producto
productos.forEach(function (producto) {
    let itemDiv = document.createElement('div');
    itemDiv.classList.add('item');

    let figureElement = document.createElement('figure');
    let imgElement = document.createElement('img');
    imgElement.src = producto.imagen;
    imgElement.alt = 'producto';
    figureElement.appendChild(imgElement);

    let infoProductDiv = document.createElement('div');
    infoProductDiv.classList.add('info-product');

    let h2Element = document.createElement('h2');
    h2Element.textContent = producto.nombre;

    let priceElement = document.createElement('p');
    priceElement.classList.add('price');
    priceElement.textContent = producto.precio;

    let buttonElement = document.createElement('button');
    buttonElement.textContent = 'Añadir al carrito';

    // Agregar los elementos al div
    infoProductDiv.appendChild(h2Element);
    infoProductDiv.appendChild(priceElement);
    infoProductDiv.appendChild(buttonElement);
    itemDiv.appendChild(figureElement);
    itemDiv.appendChild(infoProductDiv);
    containerItems.appendChild(itemDiv);
});

// Insertar el contenedor de elementos después del div 'logo'
miDiv.insertAdjacentElement('afterend', containerItems);


let addToCartButtons = document.querySelectorAll('.info-product button');

// Manejar el evento de clic
addToCartButtons.forEach(function (button, index) {
    button.addEventListener('click', function () {
        var producto = productos[index];

        // Obtener el carrito desde localStorage
        var carrito = JSON.parse(localStorage.getItem('carrito')) || [];

        // Agregar el producto al carrito
        carrito.push(producto);

        // Guardar el carrito actualizado en localStorage
        localStorage.setItem('carrito', JSON.stringify(carrito));

        // Actualizar la visualización del carrito
        actualizarVisualizacionCarrito();
    });
});




// Función actualizar la visualización del carrito 
function actualizarVisualizacionCarrito() {
    console.log('Carrito actualizado:', JSON.parse(localStorage.getItem('carrito')));
}


// Función para actualizar la visualización del carrito
function actualizarVisualizacionCarrito() {
    let carritoContainer = document.getElementById('carrito-container');
    let totalPagarElement = document.querySelector('.total-pagar');
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
    // Limpiar el contenido actual y el total a pagar
    carritoContainer.innerHTML = '';
    totalPagarElement.textContent = '$0'; // o cualquier valor inicial

    // Verificar si hay productos en el carrito
    if (carrito.length === 0) {
        carritoContainer.innerHTML = '<p>El carrito está vacío</p>';
        contadorProductosElement.textContent = '0'; // Actualizamos el contador
    } else {
        let listaCarrito = document.createElement('ul');
        let totalPagar = 0;
        

        // Iterar sobre los productos en el carrito
        carrito.forEach(function (producto) {
            let liElement = document.createElement('li');
            liElement.textContent = producto.nombre + ' - ' + producto.precio;
            listaCarrito.appendChild(liElement);
            totalPagar += parseFloat(producto.precio.replace('$', ''));
              contadorProductos++;
        });

        // Agregar la lista al contenedor
        carritoContainer.appendChild(listaCarrito);

        // Actualizar el total a pagar
        totalPagarElement.textContent = '$' + totalPagar.toFixed(2); // Formatear el total con dos decimales

        contadorProductosElement.textContent = contadorProductos.toString();
    }
}

// Llamar a la función para inicializar la visualización del carrito
actualizarVisualizacionCarrito();

// Función para eliminar un producto del carrito por su índice
function eliminarProducto(index) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    if (index >= 0 && index < carrito.length) {
        carrito.splice(index, 1);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        actualizarVisualizacionCarrito();
    }
}

// Actualizar la visualización del carrito
function actualizarVisualizacionCarrito() {
    let carritoContainer = document.getElementById('carrito-container');
    let totalPagarElement = document.querySelector('.total-pagar');
    var contadorProductosElement = document.getElementById('contador-productos')

    // Obtener el carrito actual desde localStorage
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    let cantidadElementos = carrito.length;

    // Limpiar el contenido actual del contenedor y el total a pagar
    carritoContainer.innerHTML = '';
    totalPagarElement.textContent = '$0.00'; 

    // Verificar si hay productos en el carrito
    if (carrito.length === 0) {
        carritoContainer.innerHTML = '<p>El carrito está vacío</p>';
        contadorProductosElement.textContent =0;
    } else {
        let listaCarrito = document.createElement('ul');
        let totalPagar = 0;

        // Iterar sobre los productos en el carrito
        carrito.forEach(function (producto, index) {
            let liElement = document.createElement('li');
            liElement.textContent = producto.nombre + ' - ' + producto.precio;
            let btnEliminar = document.createElement('button');
            btnEliminar.classList.add('btn-eliminar-producto');
            btnEliminar.dataset.index = index;
            btnEliminar.textContent = 'Eliminar producto';
            liElement.appendChild(btnEliminar);
            listaCarrito.appendChild(liElement);
            totalPagar += parseFloat(producto.precio.replace('$', ''));
        });

        // Agregar la lista al contenedor
        carritoContainer.appendChild(listaCarrito);

        // Actualizar el total a pagar
        totalPagarElement.textContent = '$' + totalPagar.toFixed(2); // Formatear el total con dos decimales

        contadorProductosElement.textContent = cantidadElementos.toString();
    }
}

// Manejar clics en el botón de eliminar producto
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('btn-eliminar-producto')) {
        let index = parseInt(event.target.dataset.index, 10);
        // Eliminar el producto del carrito
        eliminarProducto(index);
    }
});



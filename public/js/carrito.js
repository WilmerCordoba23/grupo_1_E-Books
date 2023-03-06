document.addEventListener('DOMContentLoaded', () => {

    let carrito = [];
    const añadir = document.getElementById("payButton1");
    const rendercarrito = document.getElementById("carrito");
    const subtotalCarrito = document.getElementById("subtotalCarrito");
    const subtotalCarrito2 = document.getElementById("subtotalCarrito2");
    const borrar = document.getElementById("borrar");
    // Funciones
    function renderizarCarrito() {
        fetch('https://e-books.onrender.com/api/products')
            .then(response => response.json())
            .then(data => {
                let productos = data.products;
                let valores = Object.values(localStorage)

                for (var i = 0; i < productos.length; i++) {
                    for (var j = 0; j < valores.length; j++) {
                        if (productos[i].id == valores[j])
                            carrito.push(productos[i])
                    }
                }
                let cantidad = 0, total = 0;
                carrito.forEach(element => {
                    //console.log(carrito)
                    cantidad = carrito.length;
                    total = parseFloat(element.price) + total;
                    rendercarrito.innerHTML += `<div id="Carrito">
                    <div id="productDesc">
                        <div>
                            <img src="images/products/${element.image}"
                                alt="${element.image}>" class="img_cart">
                        </div>
                        <div>
                            <div id="productName">
                                <h2>
                                ${element.name}
                                </h2>
                                <h3 class="precio">
                                ${element.genero.name}
                                </h3>
                                <h3 class="precio">
                                ${element.categoria.name}
                                </h3>
                            </div>
                        </div>
                        <div class="price">
                            <h3>$${element.price}
                            </h3>
                        </div>
                    </div>
                </div>`
                });
                subtotalCarrito.innerHTML = `Subtotal (${cantidad} productos):$${total}`;
                subtotalCarrito2.innerHTML = `Subtotal (${cantidad} productos):$${total}`;
            })

    }


    if (añadir != null) {
        añadir.addEventListener('click', anyadirProductoAlCarrito);

        function anyadirProductoAlCarrito(evento) {
            // Anyadimos el Nodo a nuestro carrito
            localStorage.setItem(evento.target.name, evento.target.value);

            Swal.fire(
                'Excelente',
                'Libro agregado!',
                'success'
            )
        }
    }

    /**
     * Varia el carrito y vuelve a dibujarlo
     */

    if (borrar != null) {
        borrar.addEventListener('click', vaciarCarrito);
        function vaciarCarrito() {
            // Limpiamos los productos guardados
            carrito = [];
            // Renderizamos los cambios
            localStorage.clear();
            Swal.fire(
                'Excelente',
                'Carrito vaciado',
                'success'
            )
            setTimeout(function () {
                window.location.reload();
            }, 2000);
        }
    }

    // Inicio
    renderizarCarrito();

})
document.addEventListener('DOMContentLoaded', () => {

    let carrito = [];
    const añadir = document.getElementById("payButton1");
    const añadirMobile = document.getElementById("payButton1Mobile");
    const rendercarrito = document.getElementById("carrito");
    const subtotalCarrito = document.getElementById("subtotalCarrito");
    const subtotalCarrito2 = document.getElementById("subtotalCarrito2");
    const borrar = document.getElementById("borrar");
    const pago = document.getElementById("pago");
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
                            <div id="productName"  style="margin-left: 20px;">
                                <h2 style="margin: 5px 0">
                                Nombre:  ${element.name}
                                </h2>
                                <h3 class="precio" style="margin: 6px 0">
                                Genero:  ${element.genero.name}
                                </h3>
                                <h3 class="precio" style="margin: 6px 0">
                                Categoria:  ${element.categoria.name}
                                </h3>
                                <h3 class="precio" style="margin: 6px 0">
                                Precio:  ${element.price}
                                </h3>
                            </div>
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

    if (añadirMobile != null) {
        añadirMobile.addEventListener('click', anyadirProductoAlCarrito);

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
                if (carrito.length >= 0) {
                // Limpiamos los productos guardados
                carrito = [];
                // Renderizamos los cambios
                localStorage.clear();
                Swal.fire(
                    'Excelente',
                    'El carrito fue vaciado',
                    'success'
                )
                setTimeout(function () {
                    window.location.reload();
                }, 2000);}
                if (carrito.length == 0) {
                    Swal.fire(
                        'Carrito',
                        'El carrito ya esta vacio!',
                        'info'
                    )
                }
            }
    }

    pago.addEventListener('click', (event) => {
        if (carrito.length == 0) {
            Swal.fire(
                'Denegado',
                'Debe tener productos en el carrito para poder comprar',
                'error'
            )
        }
        if (carrito.length > 0) {
            window.location.href = "/pago";
        }
    })
    
    // Inicio
    renderizarCarrito();

})
document.addEventListener('DOMContentLoaded', () => {
    const rendercarrito = document.getElementById("carrito");
    const comprar = document.getElementById("comprar");
    let carrito = [];

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
                            <input type="hidden" name="Libro: ${element.name}" value="${element.name}" >
                                <p>
                                ${element.name}
                                $${element.price}
                            
                                </p>
                            </div>
                            
                        </div>
                    </div>
                </div>`
                });
            
            })

    }

    comprar.addEventListener('click', vaciarCarrito);
    function vaciarCarrito() {
        // Limpiamos los productos guardados
        carrito = [];
        // Renderizamos los cambios
        localStorage.clear();
        Swal.fire(
            'Excelente',
            'Gracias por comprar en E-Books',
            'success'
        )
    }

    // Inicio
    renderizarCarrito();

})
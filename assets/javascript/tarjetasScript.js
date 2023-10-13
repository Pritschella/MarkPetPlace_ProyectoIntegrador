
const contenedorTarjeta1 = document.getElementById("tarjeta-contenedor1");
const contenedorTarjeta2 = document.getElementById("tarjeta-contenedor2");
const contenedorTarjeta3 = document.getElementById("tarjeta-contenedor3");

function pintarFila1() {
    var fila = document.createElement("div");
    fila.className = "row";
    for (let i = 0; i < 4; i++) {
        let tarjeta = document.createElement("div");
        tarjeta.className = "col-sm-12 col-md-3 col-lg-3";
        tarjeta.innerHTML = `

    <div class="product-card">
        <div class="product-tumb">
            <img src="https://www.mayoreototal.mx/cdn/shop/products/000058155m_350x.webp?v=1662653418"alt="">
        </div>
        <div class="product-details">
            <h4><a href="">Crocretitas</a></h4>
            <span class="product-catagory">Alimentacion</span>
            <p>Kenia</p>
            <div class="product-bottom-details">
                <div class="product-price"><small></small>$230.99</div>
                    <div class="product-links">
                        <a href=""><i class="fa fa-heart-o" id="icono-card"> </i></a>
                        <a href=""><i class="fa fa-shopping-bag" id="icono-card"> </i></a>
                        <a href=""><i class="fa fa-shopping-cart" id="icono-card"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>

`
        fila.appendChild(tarjeta);
    }
    contenedorTarjeta1.appendChild(fila);
}

function pintarFila2() {
    var fila = document.createElement("div");
    fila.className = "row";
    for (let i = 0; i < 4; i++) {
        let tarjeta = document.createElement("div");
        tarjeta.className = "col-sm-12 col-md-3 col-lg-3";
        tarjeta.innerHTML = `

    <div class="product-card">
        <div class="product-tumb">
            <img src="https://www.mayoreototal.mx/cdn/shop/products/000058155m_350x.webp?v=1662653418"alt="">
        </div>
        <div class="product-details">
            <h4><a href="">Crocretitas</a></h4>
            <span class="product-catagory">Alimentacion</span>
            <p>Kenia</p>
            <div class="product-bottom-details">
                <div class="product-price"><small></small>$230.99</div>
                    <div class="product-links">
                        <a href=""><i class="fa fa-heart-o" id="icono-card"> </i></a>
                        <a href=""><i class="fa fa-shopping-bag" id="icono-card"> </i></a>
                        <a href=""><i class="fa fa-shopping-cart" id="icono-card"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>

`
        fila.appendChild(tarjeta);
    }
    contenedorTarjeta2.appendChild(fila);
}

function pintarFila3() {
    var fila = document.createElement("div");
    fila.className = "row";
    for (let i = 0; i < 4; i++) {
        let tarjeta = document.createElement("div");
        tarjeta.className = "col-sm-12 col-md-3 col-lg-3";
        tarjeta.innerHTML = `

    <div class="product-card">
        <div class="product-tumb">
            <img src="https://www.mayoreototal.mx/cdn/shop/products/000058155m_350x.webp?v=1662653418"alt="">
        </div>
        <div class="product-details">
            <h4><a href="">Crocretitas</a></h4>
            <span class="product-catagory">Alimentacion</span>
            <p>Kenia</p>
            <div class="product-bottom-details">
                <div class="product-price"><small></small>$230.99</div>
                    <div class="product-links">
                        <a href=""><i class="fa fa-heart-o" id="icono-card"> </i></a>
                        <a href=""><i class="fa fa-shopping-bag" id="icono-card"> </i></a>
                        <a href=""><i class="fa fa-shopping-cart" id="icono-card"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>

`
        fila.appendChild(tarjeta);
    }
    contenedorTarjeta3.appendChild(fila);
}

pintarFila1();
pintarFila2();
pintarFila3();
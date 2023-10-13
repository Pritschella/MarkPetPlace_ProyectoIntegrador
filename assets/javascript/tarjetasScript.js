// Carrusel de productos destacados de la seccion de perros
//Obtengo el contenedor de las tarjetas de cada seccion
function pintarFilaPerro(contenedorId) {
    const contenedorTarjetaPerro = document.getElementById(contenedorId);
    var fila = document.createElement("div"); //Creo un div para cada fila
    fila.className = "row"; //Le asigno la clase row de bootstrap
    for (let i = 0; i < 4; i++) { //Creo un for para que se repita 4 veces y se creen 4 tarjetas
        let tarjeta = document.createElement("div"); //Creo un div para cada tarjeta
        tarjeta.className = "col-sm-12 col-md-3 col-lg-3"; //Le asigno la clase col-sm-12 col-md-3 col-lg-3 de bootstrap
        //Le asigno el contenido a cada tarjeta
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
        fila.appendChild(tarjeta); //Agrego cada tarjeta a la fila
    } //Cierro el for
    contenedorTarjetaPerro.appendChild(fila); //Agrego cada fila al contenedor de tarjetas
} //Cierro la funcion pintarFilaPerro

// Carrusel de productos destacados de la seccion de gatos
//Obtengo el contenedor de las tarjetas de cada seccion
function pintarFilaGato(contenedorId) {
    const contenedorTarjetaGato = document.getElementById(contenedorId);
    var fila = document.createElement("div"); //Creo un div para cada fila
    fila.className = "row"; //Le asigno la clase row de bootstrap
    for (let i = 0; i < 4; i++) { //Creo un for para que se repita 4 veces y se creen 4 tarjetas
        let tarjeta = document.createElement("div"); //Creo un div para cada tarjeta
        tarjeta.className = "col-sm-12 col-md-3 col-lg-3"; //Le asigno la clase col-sm-12 col-md-3 col-lg-3 de bootstrap
        //Le asigno el contenido a cada tarjeta
        tarjeta.innerHTML = `
        <div class="product-card">
            <div class="product-tumb">
                <img src="https://m.media-amazon.com/images/I/51OFagHcQFL.jpg"alt="">
            </div>
            <div class="product-details">
                <h4><a href="">Castillo de gatos</a></h4>
                <span class="product-catagory">Accesorios</span>
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
        fila.appendChild(tarjeta); //Agrego cada tarjeta a la fila
    } //Cierro el for
    contenedorTarjetaGato.appendChild(fila); //Agrego cada fila al contenedor de tarjetas
} //Cierro la funcion pintarFilaGato

// Carrusel de productos destacados de la seccion de peces
//Obtengo el contenedor de las tarjetas de cada seccion
function pintarFilaPez(contenedorId) {
    const contenedorTarjetaPez = document.getElementById(contenedorId);
    var fila = document.createElement("div"); //Creo un div para cada fila
    fila.className = "row"; //Le asigno la clase row de bootstrap
    for (let i = 0; i < 4; i++) { //Creo un for para que se repita 4 veces y se creen 4 tarjetas
        let tarjeta = document.createElement("div"); //Creo un div para cada tarjeta
        tarjeta.className = "col-sm-12 col-md-3 col-lg-3"; //Le asigno la clase col-sm-12 col-md-3 col-lg-3 de bootstrap
        //Le asigno el contenido a cada tarjeta
        tarjeta.innerHTML = `
        <div class="product-card">
            <div class="product-tumb">
                <img src="https://chedrauimx.vtexassets.com/arquivos/ids/20412915/7500211004376_00.jpg?v=638327521844500000"alt="">
            </div>
            <div class="product-details">
                <h4><a href="">Comida de pez</a></h4>
                <span class="product-catagory">Alimentación</span>
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
        fila.appendChild(tarjeta); //Agrego cada tarjeta a la fila
    } //Cierro el for
    contenedorTarjetaPez.appendChild(fila); //Agrego cada fila al contenedor de tarjetas
} //Cierro la funcion pintarFilaGato

// Carrusel de productos destacados de la seccion de conejos
//Obtengo el contenedor de las tarjetas de cada seccion
function pintarFilaConejo(contenedorId) {
    const contenedorTarjetaConejo = document.getElementById(contenedorId);
    var fila = document.createElement("div"); //Creo un div para cada fila
    fila.className = "row"; //Le asigno la clase row de bootstrap
    for (let i = 0; i < 4; i++) { //Creo un for para que se repita 4 veces y se creen 4 tarjetas
        let tarjeta = document.createElement("div"); //Creo un div para cada tarjeta
        tarjeta.className = "col-sm-12 col-md-3 col-lg-3"; //Le asigno la clase col-sm-12 col-md-3 col-lg-3 de bootstrap
        //Le asigno el contenido a cada tarjeta
        tarjeta.innerHTML = `
        <div class="product-card">
            <div class="product-tumb">
                <img src="https://m.media-amazon.com/images/I/817nmi6KcNL._AC_UF1000,1000_QL80_.jpg"alt="">
            </div>
            <div class="product-details">
                <h4><a href="">Cama de conejo</a></h4>
                <span class="product-catagory">Accesorios</span>
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
        fila.appendChild(tarjeta); //Agrego cada tarjeta a la fila
    } //Cierro el for
    contenedorTarjetaConejo.appendChild(fila); //Agrego cada fila al contenedor de tarjetas
} //Cierro la funcion pintarFilaGato

//Llamo a la funcion para que se ejecute y se pinten las tarjetas de cada seccion en el html
pintarFilaPerro("tarjeta-perro-contenedor1");
pintarFilaPerro("tarjeta-perro-contenedor2");
pintarFilaPerro("tarjeta-perro-contenedor3");

pintarFilaGato("tarjeta-gato-contenedor1");
pintarFilaGato("tarjeta-gato-contenedor2");
pintarFilaGato("tarjeta-gato-contenedor3");

pintarFilaPez("tarjeta-pez-contenedor1");
pintarFilaPez("tarjeta-pez-contenedor2");
pintarFilaPez("tarjeta-pez-contenedor3");

pintarFilaConejo("tarjeta-conejo-contenedor1");
pintarFilaConejo("tarjeta-conejo-contenedor2");
pintarFilaConejo("tarjeta-conejo-contenedor3");
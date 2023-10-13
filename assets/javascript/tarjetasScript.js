//Obtengo los contenedores de las tarjetas de cada seccion
const contenedorTarjetaPerro1 = document.getElementById("tarjeta-perro-contenedor1");
const contenedorTarjetaPerro2 = document.getElementById("tarjeta-perro-contenedor2");
const contenedorTarjetaPerro3 = document.getElementById("tarjeta-perro-contenedor3");

const contenedorTarjetaGato1 = document.getElementById("tarjeta-gato-contenedor1");
const contenedorTarjetaGato2 = document.getElementById("tarjeta-gato-contenedor2");
const contenedorTarjetaGato3 = document.getElementById("tarjeta-gato-contenedor3");

const contenedorTarjetaPez1 = document.getElementById("tarjeta-pez-contenedor1");
const contenedorTarjetaPez2 = document.getElementById("tarjeta-pez-contenedor2");
const contenedorTarjetaPez3 = document.getElementById("tarjeta-pez-contenedor3");

const contenedorTarjetaConejo1 = document.getElementById("tarjeta-conejo-contenedor1");
const contenedorTarjetaConejo2 = document.getElementById("tarjeta-conejo-contenedor2");
const contenedorTarjetaConejo3 = document.getElementById("tarjeta-conejo-contenedor3");

//Funcion para pintar las tarjetas de cada seccion
function pintarFilaPerro1() {
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
    contenedorTarjetaPerro1.appendChild(fila); //Agrego cada fila al contenedor de tarjetas
} //Cierro la funcion

function pintarFilaPerro2() {
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
    contenedorTarjetaPerro2.appendChild(fila);
}

function pintarFilaPerro3() {
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
    contenedorTarjetaPerro3.appendChild(fila);
}

function pintarFilaGato1() {
    var fila = document.createElement("div");
    fila.className = "row";
    for (let i = 0; i < 4; i++) {
        let tarjeta = document.createElement("div");
        tarjeta.className = "col-sm-12 col-md-3 col-lg-3";
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
        fila.appendChild(tarjeta);
    }
    contenedorTarjetaGato1.appendChild(fila);
}

function pintarFilaGato2() {
    var fila = document.createElement("div");
    fila.className = "row";
    for (let i = 0; i < 4; i++) {
        let tarjeta = document.createElement("div");
        tarjeta.className = "col-sm-12 col-md-3 col-lg-3";
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
        fila.appendChild(tarjeta);
    }
    contenedorTarjetaGato2.appendChild(fila);
}

function pintarFilaGato3() {
    var fila = document.createElement("div");
    fila.className = "row";
    for (let i = 0; i < 4; i++) {
        let tarjeta = document.createElement("div");
        tarjeta.className = "col-sm-12 col-md-3 col-lg-3";
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
        fila.appendChild(tarjeta);
    }
    contenedorTarjetaGato3.appendChild(fila);
}

function pintarFilaPez1() {
    var fila = document.createElement("div");
    fila.className = "row";
    for (let i = 0; i < 4; i++) {
        let tarjeta = document.createElement("div");
        tarjeta.className = "col-sm-12 col-md-3 col-lg-3";
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
        fila.appendChild(tarjeta);
    }
    contenedorTarjetaPez1.appendChild(fila);
}

function pintarFilaPez2() {
    var fila = document.createElement("div");
    fila.className = "row";
    for (let i = 0; i < 4; i++) {
        let tarjeta = document.createElement("div");
        tarjeta.className = "col-sm-12 col-md-3 col-lg-3";
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
        fila.appendChild(tarjeta);
    }
    contenedorTarjetaPez2.appendChild(fila);
}

function pintarFilaPez3() {
    var fila = document.createElement("div");
    fila.className = "row";
    for (let i = 0; i < 4; i++) {
        let tarjeta = document.createElement("div");
        tarjeta.className = "col-sm-12 col-md-3 col-lg-3";
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
        fila.appendChild(tarjeta);
    }
    contenedorTarjetaPez3.appendChild(fila);
}

function pintarFilaConejo1() {
    var fila = document.createElement("div");
    fila.className = "row";
    for (let i = 0; i < 4; i++) {
        let tarjeta = document.createElement("div");
        tarjeta.className = "col-sm-12 col-md-3 col-lg-3";
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
        fila.appendChild(tarjeta);
    }
    contenedorTarjetaConejo1.appendChild(fila);
}

function pintarFilaConejo2() {
    var fila = document.createElement("div");
    fila.className = "row";
    for (let i = 0; i < 4; i++) {
        let tarjeta = document.createElement("div");
        tarjeta.className = "col-sm-12 col-md-3 col-lg-3";
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
        fila.appendChild(tarjeta);
    }
    contenedorTarjetaConejo2.appendChild(fila);
}

function pintarFilaConejo3() {
    var fila = document.createElement("div");
    fila.className = "row";
    for (let i = 0; i < 4; i++) {
        let tarjeta = document.createElement("div");
        tarjeta.className = "col-sm-12 col-md-3 col-lg-3";
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
        fila.appendChild(tarjeta);
    }
    contenedorTarjetaConejo3.appendChild(fila);
}

//Llamo a las funciones para que se ejecuten y se pinten las tarjetas de cada seccion en el html
pintarFilaPerro1();
pintarFilaPerro2();
pintarFilaPerro3();

pintarFilaGato1();
pintarFilaGato2();
pintarFilaGato3();

pintarFilaPez1();
pintarFilaPez2();
pintarFilaPez3();

pintarFilaConejo1();
pintarFilaConejo2();
pintarFilaConejo3();
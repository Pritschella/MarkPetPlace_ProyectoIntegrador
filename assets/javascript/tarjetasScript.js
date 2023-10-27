// Funcion para crear las tarjetas de la 2 en adelante
function crearTarjeta(contenedor, imgSrc, nombre, categoria, vendedor, precio) {//recibe el contenedor y los datos de la tarjeta
  const tarjeta = document.createElement("div");//crea un elemento div
  tarjeta.className = "d-none d-sm-none d-md-none d-lg-block col-sm-12 col-md-3 col-lg-3";//le asigna una clase al elemento div
  //innerHTML es una propiedad que define o devuelve el contenido HTML de un elemento
  tarjeta.innerHTML = `
      <div class="product-card">
        <div class="product-tumb">
          <img src="${imgSrc}" alt="">
        </div>
        <div class="product-details">
          <h4><a href="./producto.html">${nombre}</a></h4>
          <span class="product-catagory">${categoria}</span>
          <p>${vendedor}</p>
          <div class="product-bottom-details">
            <div class="product-price"><small></small>${precio}</div>
            <div class="product-links">
              <a href=""><i class="fa fa-shopping-bag" id="icono-card"> </i></a>
            </div>
          </div>
        </div>
      </div>
    `;
  contenedor.appendChild(tarjeta);//agrega un nodo al final de la lista de hijos de un nodo padre especificado
}

// Función para crear la primera tarjeta de cada slide ya que siempre será visible
function crearPrimerTarjeta(contenedor, imgSrc, nombre, categoria, vendedor, precio) {//recibe el contenedor y los datos de la tarjeta
  const tarjeta = document.createElement("div");//crea un elemento div
  tarjeta.className = "col-sm-12 col-md-3 col-lg-3";//le asigna una clase al elemento div
  //innerHTML es una propiedad que define o devuelve el contenido HTML de un elemento
  tarjeta.innerHTML = `
      <div class="product-card">
        <div class="product-tumb">
          <img src="${imgSrc}" alt="">
        </div>
        <div class="product-details">
          <h4><a href="">${nombre}</a></h4>
          <span class="product-catagory">${categoria}</span>
          <p>${vendedor}</p>
          <div class="product-bottom-details">
            <div class="product-price"><small></small>${precio}</div>
            <div class="product-links">
              <a href=""><i class="fa fa-shopping-bag" id="icono-card"> </i></a>
            </div>
          </div>
        </div>
      </div>
    `;
  contenedor.appendChild(tarjeta);//agrega un nodo al final de la lista de hijos de un nodo padre especificado
}

// Función para pintar una fila de tarjetas
function pintarFila(contenedorId, datos) {//recibe el id del contenedor y los datos de la tarjeta
  const contenedor = document.getElementById(contenedorId);//obtiene el elemento por su id
  const fila = document.createElement("div");//crea un elemento div
  let numTarjetas = 0;//inicializa la variable numTarjetas en 0
  fila.className = "row justify-content-center";//le asigna una clase al elemento div
  if (window.innerWidth < 768) {//si el ancho de la ventana es menor a 768px
    numTarjetas = 1;//numTarjetas es igual a 1
  } else {
    numTarjetas = 4;//numTarjetas es igual a 4
  }
  //crea 4 tarjetas
  for (let i = 0; i < numTarjetas; i++) {
    if (i == 0) {//si i es igual a 0
      crearPrimerTarjeta(//llama a la funcion crearPrimerTarjeta y le pasa el contenedor y los datos de la tarjeta
        fila,//contenedor
        datos.imgSrc,//imagen
        datos.nombre,//nombre del producto
        datos.categoria,//categoria
        datos.vendedor,//vendedor
        datos.precio//precio
      );
      continue;//salta a la siguiente iteracion del ciclo
    } else {
      crearTarjeta(
        fila,//contenedor
        datos.imgSrc,//imagen
        datos.nombre,//nombre del producto
        datos.categoria,//categoria
        datos.vendedor,//vendedor
        datos.precio//precio
      );
    }
  }

  contenedor.appendChild(fila);//agrega un nodo al final de la lista de hijos de un nodo padre especificado
}

// Datos específicos para cada categoría
const datosPerro = {//objeto con los datos de la tarjeta de perro 
  imgSrc:
    "https://www.mayoreototal.mx/cdn/shop/products/000058155m_350x.webp?v=1662653418",
  nombre: "Croquetas Sport Man's Choise",
  categoria: "Alimentación",
  vendedor: "Kenia",
  precio: "$230.99",
};

const datosGato = {//objeto con los datos de la tarjeta de gato
  imgSrc: "https://m.media-amazon.com/images/I/51OFagHcQFL.jpg",
  nombre: "Castillo de gatos",
  categoria: "Accesorios",
  vendedor: "Kenia",
  precio: "$230.99",
};

const datosPez = {//objeto con los datos de la tarjeta de pez
  imgSrc:
    "https://chedrauimx.vtexassets.com/arquivos/ids/20412915/7500211004376_00.jpg?v=638327521844500000",
  nombre: "Comida de pez",
  categoria: "Alimentación",
  vendedor: "Kenia",
  precio: "$230.99",
};

const datosConejo = {//objeto con los datos de la tarjeta de conejo
  imgSrc: "https://m.media-amazon.com/images/I/817nmi6KcNL._AC_UF1000,1000_QL80_.jpg",
  nombre: "Cama de conejo",
  categoria: "Accesorios",
  vendedor: "Kenia",
  precio: "$230.99",
};

// Pintar las filas de tarjetas con los datos específicos de cada categoría
pintarFila("tarjeta-perro-contenedor1", datosPerro);//llama a la funcion pintarFila y le pasa el id del contenedor y los datos de la tarjeta
pintarFila("tarjeta-perro-contenedor2", datosPerro);
pintarFila("tarjeta-perro-contenedor3", datosPerro);

pintarFila("tarjeta-gato-contenedor1", datosGato);
pintarFila("tarjeta-gato-contenedor2", datosGato);
pintarFila("tarjeta-gato-contenedor3", datosGato);

pintarFila("tarjeta-pez-contenedor1", datosPez);
pintarFila("tarjeta-pez-contenedor2", datosPez);
pintarFila("tarjeta-pez-contenedor3", datosPez);

pintarFila("tarjeta-conejo-contenedor1", datosConejo);
pintarFila("tarjeta-conejo-contenedor2", datosConejo);
pintarFila("tarjeta-conejo-contenedor3", datosConejo);

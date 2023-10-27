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
          <p class="txt14">${vendedor}</p>
          <div class="product-bottom-details">
            <div class="product-price"><small></small>${precio}</div>
            <div class="product-links">
              <a href="../../producto.html"><i class="fa fa-shopping-bag" id="icono-card"> </i></a>
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
  tarjeta.className = "col-9 col-sm-6 col-md-6 col-lg-3";//le asigna una clase al elemento div
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
              <a href="../../producto.html"><i class="fa fa-shopping-bag" id="icono-card"> </i></a>
            </div>
          </div>
        </div>
      </div>
    `;
  contenedor.appendChild(tarjeta);//agrega un nodo al final de la lista de hijos de un nodo padre especificado
}

// Función para pintar una fila de tarjetas
function pintarFila(contenedorId, datosArray) {//recibe el id del contenedor y un arreglo de objetos
  const contenedor = document.getElementById(contenedorId);//obtiene el elemento por su id
  const fila = document.createElement("div");//crea un elemento div
  let numTarjetas = 0;//inicializa la variable numTarjetas en 0
  fila.className = "row justify-content-center";//le asigna una clase al elemento div
  if (window.innerWidth < 768) {//si el ancho de la ventana es menor a 768px
    numTarjetas = 1;//numTarjetas es igual a 1
  } else {
    numTarjetas = 4;//numTarjetas es igual a 4
  }
  for (let i = 0; i < numTarjetas; i++) {
    if (i < datosArray.length) {//Verifica si aún hay objetos en el arreglo
      if (i == 0) {//si i es igual a 0
        crearPrimerTarjeta(//llama a la funcion crearPrimerTarjeta y le pasa el contenedor y los datos del primer objeto
          fila,
          datosArray[i].imgSrc,
          datosArray[i].nombre,
          datosArray[i].categoria,
          datosArray[i].vendedor,
          datosArray[i].precio
        );
      } else {
        crearTarjeta(//llama a la funcion crearTarjeta y le pasa el contenedor y los datos del objeto actual
          fila,
          datosArray[i].imgSrc,
          datosArray[i].nombre,
          datosArray[i].categoria,
          datosArray[i].vendedor,
          datosArray[i].precio
        );
      }
    }
  }
  contenedor.appendChild(fila);//agrega un nodo al final de la lista de hijos de un nodo padre especificado
}

// Datos específicos para cada categoría
const datosPerro1 = {//objeto con los datos de la tarjeta de perro 
  imgSrc:
    "./assets/img/seccion_perros/ProductoAlimentacion.jpg",
  nombre: "Sport Man's Choise",
  categoria: "Alimentación",
  vendedor: "Kenia",
  precio: "$1357.00",
};

const datosPerro2 = {//objeto con los datos de la tarjeta de perro 
  imgSrc:
    "./assets/img/seccion_perros/ProductoAccesorios.jpg",
  nombre: "Correa Perro Roja",
  categoria: "Accesorios",
  vendedor: "Alexis",
  precio: "$124.98",
};

const datosPerro3 = {//objeto con los datos de la tarjeta de perro 
  imgSrc:
    "./assets/img/seccion_perros/ProductoCuidadoeHigiene.jpg",
  nombre: "Pet Shapoo puppies",
  categoria: "Cuidado e Higiene",
  vendedor: "Berenice",
  precio: "$113.16",
};

const datosPerro4 = {//objeto con los datos de la tarjeta de perro 
  imgSrc:
    "./assets/img/seccion_perros/ProductoEntrenamiento.jpg",
  nombre: "Premios Entrenamiento",
  categoria: "Entrenamiento",
  vendedor: "Antonio",
  precio: "$110.00",
};

const datosGato1 = {//objeto con los datos de la tarjeta de gato
  imgSrc: "./assets/img/productoArbolGato/producto-1.jpg",
  nombre: "Árbol para gato con forma de cactus",
  categoria: "Accesorios",
  vendedor: "Kenia",
  precio: "$370.00",
};

const datosGato2 = {//objeto con los datos de la tarjeta de gato
  imgSrc: "./assets/img/seccion_gatos/accesoriogato1.jpg",
  nombre: "Castillo para gato",
  categoria: "Accesorios",
  vendedor: "Antonio",
  precio: "$1,499.00",
};

const datosGato3 = {//objeto con los datos de la tarjeta de gato
  imgSrc: "./assets/img/seccion_gatos/alimentogato1.jpg",
  nombre: "Purina Gati",
  categoria: "Alimentación",
  vendedor: "Alejandra",
  precio: "$255.00",
};

const datosGato4 = {//objeto con los datos de la tarjeta de gato
  imgSrc: "./assets/img/seccion_gatos/ropagato1.jpg",
  nombre: "Árbol para gato con forma de cactus",
  categoria: "Ropa y Moda",
  vendedor: "Uriel",
  precio: "$199.99",
};

const datosPez1 = {//objeto con los datos de la tarjeta de pez
  imgSrc:
    "./assets/img/seccion_peces/alimentopez1.png",
  nombre: "Wardley Algas",
  categoria: "Alimentación",
  vendedor: "Edna",
  precio: "$45.00",
};

const datosPez2 = {//objeto con los datos de la tarjeta de pez
  imgSrc:
    "./assets/img/seccion_peces/accesoriopez1.jpg",
  nombre: "Acuario con ilumincación led",
  categoria: "Accesorios",
  vendedor: "Berenice",
  precio: "$3,192.00",
};

const datosPez3 = {//objeto con los datos de la tarjeta de pez
  imgSrc:
    "./assets/img/seccion_peces/cuidadopez1.jpg",
  nombre: "Aquasafe plus",
  categoria: "Cuidado e Higiene",
  vendedor: "Kenia",
  precio: "$299.00",
};

const datosPez4 = {//objeto con los datos de la tarjeta de pez
  imgSrc:
    "./assets/img/seccion_peces/saludpez1.jpg",
  nombre: "Flourish 100ml",
  categoria: "Salud",
  vendedor: "Antonio",
  precio: "$173.00",
};

const datosConejo1 = {//objeto con los datos de la tarjeta de conejo
  imgSrc: "./assets/img/seccion_conejos/ProductoAccesorio.jpg",
  nombre: "Arnés para conejo",
  categoria: "Accesorios",
  vendedor: "Edna",
  precio: "$110.00",
};

const datosConejo2 = {//objeto con los datos de la tarjeta de conejo
  imgSrc: "./assets/img/seccion_conejos/ProductoAlimentación.jpg",
  nombre: "Vitakraft Menu vital",
  categoria: "Alimentación",
  vendedor: "Berenice",
  precio: "$275.50",
};

const datosConejo3 = {//objeto con los datos de la tarjeta de conejo
  imgSrc: "./assets/img/seccion_conejos/ProductoSalud.jpg",
  nombre: "beaphar multi-vit",
  categoria: "Salud",
  vendedor: "Uriel",
  precio: "$18.99",
};

const datosConejo4 = {//objeto con los datos de la tarjeta de conejo
  imgSrc: "./assets/img/seccion_conejos/ProductoCuidadoeHigiene.jpg",
  nombre: "Caja de arena",
  categoria: "Cuidado e Higiene",
  vendedor: "Alejandra",
  precio: "$980.20",
};

// Pintar las filas de tarjetas con los datos específicos de cada categoría


pintarFila("tarjeta-perro-contenedor1", [datosPerro1, datosPerro2, datosPerro3, datosPerro4]);
pintarFila("tarjeta-gato-contenedor1", [datosGato1, datosGato2, datosGato3, datosGato4]);
pintarFila("tarjeta-pez-contenedor1", [datosPez1, datosPez2, datosPez3, datosPez4]);
pintarFila("tarjeta-conejo-contenedor1", [datosConejo1, datosConejo2, datosConejo3, datosConejo4]);

/*
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
*/
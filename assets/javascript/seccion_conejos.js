function crearTarjeta(contenedor, imgSrc, nombre, categoria, vendedor, precio) {//recibe el contenedor y los datos de la tarjeta
    const tarjeta = document.createElement("div"); //crea un elemento div
    tarjeta.className = "col-sm-12 col-md-3 col-lg-3"; //le asigna una clase al elemento div
    //innerHTML es una propiedad que define o devuelve el contenido HTML de un elemento
    tarjeta.innerHTML = `
      <div class="product-card">
        <div class="product-tumb">
          <img src="${imgSrc}" id="img-fluid" alt="">
        </div>
        <div class="product-details">
          <h4><a href="">${nombre}</a></h4>
          <span class="product-catagory">${categoria}</span>
          <p>${vendedor}</p>
          <div class="product-bottom-details">
            <div class="product-price"><small></small>${precio}</div>
            <div class="product-links">
              <a href=""><i class="fa fa-heart-o" id="icono-card"> </i></a>
              <a href=""><i class="fa fa-shopping-bag" id="icono-card"> </i></a>
              <a href=""><i class="fa fa-shopping-cart" id="icono-card"></i></a>
            </div>
          </div>
        </div>
      </div>
    `;
    contenedor.appendChild(tarjeta); //agrega un nodo al final de la lista de hijos de un nodo padre especificado
}

// Función para pintar una fila de tarjetas
function pintarFila(contenedorId, datosArray) { //recibe el id del contenedor y los datos de la tarjeta
    const contenedor = document.getElementById(contenedorId); //obtiene el elemento por su id
    const fila = document.createElement("div"); //crea un elemento div
    fila.className = "row"; //le asigna una clase al elemento div

    for (let i = 0; i < datosArray.length; i++) {
        const datos = datosArray[i];
        crearTarjeta(
            fila,
            datos.imgSrc,
            datos.nombre,
            datos.categoria,
            datos.vendedor,
            datos.precio
        );
    }

    contenedor.appendChild(fila);
}


// Datos específicos para cada categoría
const datosConejoAlimentacion = [
    {
        imgSrc: "",
        nombre: "",
        categoria: "Alimentacion",
        vendedor: "Kenia",
        precio: "$00.00",
    },
    {
        imgSrc: "",
        nombre: "",
        categoria: "Alimentacion",
        vendedor: "Berenice",
        precio: "$00.00",
    },
    {
        imgSrc: "",
        nombre: "",
        categoria: "Alimentacion",
        vendedor: "Antonio",
        precio: "$00.00",
    },
    {
        imgSrc: "",
        nombre: "",
        categoria: "Alimentacion",
        vendedor: "Alejandra",
        precio: "$00.00",
    }
];

const datosConejoAccesorios = [
    {
        imgSrc: "",
        nombre: "",
        categoria: "Accesorios",
        vendedor: "Uriel",
        precio: "$00.00",
    },
    {
        imgSrc: "",
        nombre: "",
        categoria: "Accesorios",
        vendedor: "Alexis",
        precio: "$00.00",
    },
    {
        imgSrc: "",
        nombre: "",
        categoria: "Accesorios",
        vendedor: "Edna",
        precio: "$00.00",
    },
    {
        imgSrc: "",
        nombre: "",
        categoria: "Accesorios",
        vendedor: "Kenia",
        precio: "$00.00",
    }
];

const datosConejoCuidadoEHigiene = [
    {
        imgSrc: "",
        nombre: "",
        categoria: "Cuidado e Higiene",
        vendedor: "Berenice",
        precio: "$00.00",
    },
    {
        imgSrc: "",
        nombre: "",
        categoria: "Cuidado e Higiene",
        vendedor: "Antonio",
        precio: "$00.00",
    },
    {
        imgSrc: "",
        nombre: "",
        categoria: "Cuidado e Higiene",
        vendedor: "Alejandra",
        precio: "$00.00",
    },
    {
        imgSrc: "",
        nombre: "",
        categoria: "Cuidado e Higiene",
        vendedor: "Uriel",
        precio: "$00.00",
    }
];

const datosConejoSaludYBienestar = [
    {
        imgSrc: "",
        nombre: "",
        categoria: "Salud y Bienestar",
        vendedor: "Alexis",
        precio: "$00.00",
    },
    {
        imgSrc: "",
        nombre: "",
        categoria: "Salud y Bienestar",
        vendedor: "Edna",
        precio: "$00.00",
    },
    {
        imgSrc: "",
        nombre: "",
        categoria: "Salud y Bienestar",
        vendedor: "Kenia",
        precio: "$00.00",
    },
    {
        imgSrc: "",
        nombre: "",
        categoria: "Salud y Bienestar",
        vendedor: "Berenice",
        precio: "$00.00",
    }
];

const datosConejoRopaYModa = [
    {
        imgSrc: "",
        nombre: "",
        categoria: "Ropa y Moda",
        vendedor: "Antonio",
        precio: "$00.00",
    },
    {
        imgSrc: "",
        nombre: "",
        categoria: "Ropa y Moda",
        vendedor: "Alejandra",
        precio: "$00.00",
    },
    {
        imgSrc: "",
        nombre: "",
        categoria: "Ropa y Moda",
        vendedor: "Uriel",
        precio: "$00.00",
    },
    {
        imgSrc: "",
        nombre: "",
        categoria: "Ropa y Moda",
        vendedor: "Alexis",
        precio: "$00.00",
    }
];

const datosConejoEntrenamiento = [
    {
        imgSrc: "",
        nombre: "",
        categoria: "Entrenamiento",
        vendedor: "Edna",
        precio: "$00.00",
    },
    {
        imgSrc: "",
        nombre: "",
        categoria: "Entrenamiento",
        vendedor: "Kenia",
        precio: "$00.00",
    },
    {
        imgSrc: "",
        nombre: "",
        categoria: "Entrenamiento",
        vendedor: "Berenice",
        precio: "$00.00",
    },
    {
        imgSrc: "",
        nombre: "",
        categoria: "Entrenamiento",
        vendedor: "Antonio",
        precio: "$00.00",
    }
];

// Pintar las filas de tarjetas con los datos específicos de cada categoría
pintarFila("tarjeta-conejo-contenedor1", datosConejoAlimentacion);
pintarFila("tarjeta-conejo-contenedor2", datosConejoAccesorios);
pintarFila("tarjeta-conejo-contenedor3", datosConejoCuidadoEHigiene);
pintarFila("tarjeta-conejo-contenedor4", datosConejoSaludYBienestar);
pintarFila("tarjeta-conejo-contenedor5", datosConejoRopaYModa);
pintarFila("tarjeta-conejo-contenedor6", datosConejoEntrenamiento);
// Llama a la función pintarFila con los contenedores y arreglos de objetos para todas las categorías
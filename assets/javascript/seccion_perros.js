function crearTarjeta(contenedor, imgSrc, nombre, categoria, vendedor, precio) {//recibe el contenedor y los datos de la tarjeta
    const tarjeta = document.createElement("div");//crea un elemento div
    tarjeta.className = "col-sm-12 col-md-3 col-lg-3";//le asigna una clase al elemento div
    //innerHTML es una propiedad que define o devuelve el contenido HTML de un elemento
    tarjeta.innerHTML = `
        <div class="product-card">
          <div class="product-tumb">
            <img src="${imgSrc}" class="img-fluid" alt="">
          </div>
          <div class="product-details">
            <h4><a href=./productoPerro.html>${nombre}</a></h4>
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
    contenedor.appendChild(tarjeta);//agrega un nodo al final de la lista de hijos de un nodo padre especificado
  }
  
  // Función para pintar una fila de tarjetas
  function pintarFila(contenedorId, datos) {//recibe el id del contenedor y los datos de la tarjeta
    const contenedor = document.getElementById(contenedorId);//obtiene el elemento por su id
    const fila = document.createElement("div");//crea un elemento div
    fila.className = "row";//le asigna una clase al elemento div
    //crea 4 tarjetas
    for (let i = 0; i < 4; i++) {
      crearTarjeta(
        fila,//contenedor
        datos.imgSrc,//imagen
        datos.nombre,//nombre del producto
        datos.categoria,//categoria
        datos.vendedor,//vendedor
        datos.precio//precio
      );
    }
  
    contenedor.appendChild(fila);//agrega un nodo al final de la lista de hijos de un nodo padre especificado
  }
  
  // Datos específicos para cada categoría
  const datosPerro1 = {//objeto con los datos de la tarjeta de alimentación para perro
    imgSrc:
      "https://www.mayoreototal.mx/cdn/shop/products/000058155m_350x.webp?v=1662653418",
    nombre: "Croquetas",
    categoria: "Alimentacion",
    vendedor: "Kenia",
    precio: "$230.99",
  };

  const datosPerro2 = {//objeto con los datos de la tarjeta de accesorios para perro
    imgSrc:
      "./assets/img/seccion_perros/ProductoAccesorios.jpg",
    nombre: "Correa",
    categoria: "Accesorios",
    vendedor: "Berenice",
    precio: "$160.50",
  };

  const datosPerro3 = {//objeto con los datos de la tarjeta de cuidado e higiene para perro
    imgSrc:
      "./assets/img/seccion_perros/ProductoCuidadoeHigiene.jpg",
    nombre: "Shampoo",
    categoria: "Cuidado e Higiene",
    vendedor: "Antonio",
    precio: "$260.50",
  };

  const datosPerro4 = {//objeto con los datos de la tarjeta de salud y bienestar para perro
    imgSrc:
      "https://lafarmascota.com/wp-content/uploads/2020/06/simparica-trio.jpg",
    nombre: "Desparasitante",
    categoria: "Salud y Bienestar",
    vendedor: "Alejandra",
    precio: "$260.50",
  };

  const datosPerro5 = {//objeto con los datos de la tarjeta de ropa y moda para perro
    imgSrc:
      "./assets/img/seccion_perros/ProductoRopayModa.jpg",
    nombre: "Chamarra",
    categoria: "Ropa y Moda",
    vendedor: "Uriel",
    precio: "$200.00",
  };

  const datosPerro6 = {//objeto con los datos de la tarjeta de entrenamiento para perro
    imgSrc:
      "https://nutricionanimal.com.mx/media/2021/04/nutricionanimal-hills-premio-training-soft.png",
    nombre: "Treats",
    categoria: "Entrenamiento",
    vendedor: "Alexis",
    precio: "$110.00",
  };


  // Pintar las filas de tarjetas con los datos específicos de cada categoría
pintarFila("tarjeta-perro-contenedor1", datosPerro1);//llama a la funcion pintarFila y le pasa el id del contenedor y los datos de la tarjeta
pintarFila("tarjeta-perro-contenedor2", datosPerro2);
pintarFila("tarjeta-perro-contenedor3", datosPerro3);
pintarFila("tarjeta-perro-contenedor4", datosPerro4);
pintarFila("tarjeta-perro-contenedor5", datosPerro5);
pintarFila("tarjeta-perro-contenedor6", datosPerro6);
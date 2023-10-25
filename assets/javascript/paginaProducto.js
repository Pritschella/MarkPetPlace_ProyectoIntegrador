// Sistema para hacer un slider de imágenes con ayuda de un forEach

const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});


function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);


//Manipulación de DOM para reviews

// Recibir los datos de inputs de formulario de Reviews
let puntajeReview = document.getElementById("puntajeReview");
let nombreReview = document.getElementById("nombreReview");
let mensajeReview = document.getElementById("mensajeReview");
const tiempoHoy = Date.now();
const fechaActual = new Date(tiempoHoy);
let btnRegistroReview = document.getElementById("btnRegistroReview");

let seccionsinReviews = document.getElementById("sinReviews");

let reviews = [];

//Función para registrar reseñas
function registrarReview(){
    let puntajeReviewValue = puntajeReview.value;
    let nombreReviewValue = nombreReview.value;
    let mensajeReviewValue = mensajeReview.value;

    //Array para guardar la info de la reseña
    let review = {
        puntaje : puntajeReviewValue,
        nombre : nombreReviewValue,
        fecha : fechaActual.toLocaleDateString(),
        mensaje : mensajeReviewValue
    };
    seccionsinReviews.classList.add("d-none");

    reviews.push(review);

    // 1. Muestro la info en consola.
    mostrarReview(review); //Invocación de otra función para mostrar la info en consola

    // 2. Mensaje de confirmación (textContext)
    //mensajeConfirmacion.textContent = "Reseña registrada correctamente";

    // 3. Generar la tarjeta
    generarTarjetaReview(review); //Invocación de una funci+pn para generar tarjetas

    // 4. Retorno en autobus.
    return review;
    


}

function mostrarReview(review) {
    console.log("Puntaje: " + review.puntaje);
    console.log("Nombre: " + review.nombre);
    console.log("Fecha: ", review.fecha); 
    console.log("Mensaje: ", review.mensaje); 
}

//Función para generar las reviews
function generarTarjetaReview(review){
    //crear
    let reviewDiv = document.createElement("div");
    reviewDiv.className = "col-6";

    //crear el contenido de la tarjeta
    //Se usan las backsticks porque ya se unan las comillas. Alt + 96 
    reviewDiv.innerHTML=`
        <div class="card border-info mb-3">
            <div class="card-header">Reseña</div>
            <div class="card-body">
                <h5 class="card-title">${review.nombre}</h5>
                <p class="card-text textoprueba"><i>Agregar descripción.</i></p>
                <p>${review.fecha}</p>
                <p>${review.mensaje}</p>
            </div>
        </div>
    `
    //POner
    contenedorReviews.appendChild(reviewDiv);
}

btnRegistroReview.addEventListener('click', registrarReview)
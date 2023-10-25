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
let btnRegistroReview = document.getElementById("mensajeReview");

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
        mensaje : mensajeReviewValue
    };

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
    console.log("Citas registradas: " + review.puntaje);
    console.log("Nombre del paciente: " + review.nombre);
    console.log("Edad del paciente: ", review.mensaje); 
}

//Función para generar las reviews
function generarTarjetaReview(review){
    //crear
    let reviewDiv = document.createElement("div");
    reviewDiv.className = "col-6";

    //crear el contenido de la tarjeta
    //Se usan las backsticks porque ya se unan las comillas. Alt + 96 
    tarjetaDiv.innerHTML=`
        <div class="card border-info mb-3">
            <div class="card-header">Reseña</div>
            <div class="card-body">
                <h5 class="card-title">${review.nombre}</h5>
                <p class="card-text textoprueba"><i>Agregar descripción.</i></p>
                <p>${review.mensaje}</p>
            </div>
        </div>
    `
    //POner
    contenedorReviews.appendChild(tarjetaDiv);
}

btnRegistroReview.addEventListener('click', registrarReview)
/* barra de navegación */

const navbarContainer = document.getElementById('navbar-container');

const navbarURL = 'navbar.html';

fetch(navbarURL)
    .then(response => response.text())
    .then(data => {
        navbarContainer.innerHTML = data;
    })
    .catch(error => {
        console.log("Error al cargar la barra de navegación", error);
    })
    

/* footer */

const footerContainer = document.getElementById('my-footer');

const footerURL = 'footer.html';

fetch(footerURL)
    .then(response => response.text())
    .then(data => {
        footerContainer.innerHTML = data;
    })
    .catch(error => {
        console.log("Error al cargar el footer", error);
    })


/*Buscador*/
document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.getElementById("search-form");
    const searchInput = document.getElementById("search-input");

    searchForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe normalmente

        // Obtener el término de búsqueda ingresado por el usuario
        const searchTerm = searchInput.value;

        // Puedes redirigir al usuario a una página de resultados de búsqueda o realizar una acción personalizada aquí
        // Por ejemplo, redirigir al usuario a una página de resultados de búsqueda
        window.location.href = "/busqueda?query=" + encodeURIComponent(searchTerm);
    });
});
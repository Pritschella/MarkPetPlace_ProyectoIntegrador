$(document).ready(function () {

    // Abrir el inspector de archivos

    //Código que le da funcionalidad al cuadrito azul para agregar foto/imagen y contador de cantidad de imagenes subidas

    $(document).on("click", "#add-photo", function () {
        if (cont < 4) {
            cont++;
            $("#add-new-photo").click();
        } else {
            alert("Se ha llegado a la cantidad maxima de imagenes (4).")
        }
    });

    // Código que agrega una nueva foto y compara la extensión de la misma para verificar si es válida o no
    var cont = 0;
    $(document).on("change", "#add-new-photo", function () {

        console.log(this.files);
        var files = this.files;
        var element;
        var supportedImages = ["image/jpeg", "image/png", "image/gif"];
        var seEncontraronElementoNoValidos = false;


        //Código que selecciona el archivo
        console.log(cont);
        for (var i = 0; i < files.length; i++) {
            element = files[i];

            if (supportedImages.indexOf(element.type) != -1) {
                createPreview(element);
            }
            else {
                seEncontraronElementoNoValidos = true;
            }
        }

    });


    // Eliminar previsualizaciones
    /* 
    Código que elimina la imagen ya subida, al hacer click en la misma imagen
    */
    $(document).on("click", "#Images .image-container", function (e) {
        $(this).parent().remove();
        cont--;
    });


});



//Genera las previsualizaciones de las imagenes
//Muestra las imagenes que se van cargando y seleccionado. 
function createPreview(file) {
    var imgCodified = URL.createObjectURL(file);
    var img = $('<div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12"><div class="image-container"> <figure> <img src="' + imgCodified + '" alt="Foto del usuario"> <figcaption> <i class="icon-cross"></i> </figcaption> </figure> </div></div>');
    $(img).insertBefore("#add-photo-container");
}


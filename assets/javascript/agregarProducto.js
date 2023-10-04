$(document).ready(function () {

    // Modal

    $(".modal").on("click", function (e) {
        console.log(e);
        if (($(e.target).hasClass("modal-main") || $(e.target).hasClass("close-modal")) && $("#loading").css("display") == "none") {
            closeModal();
        }
    });

    // -> Modal

    // Abrir el inspector de archivos

    $(document).on("click", "#add-photo", function () {
        if (cont < 4) {
            cont++;
            $("#add-new-photo").click();
        } else {
            alert("Se ha llegado a la cantidad maxima de imagenes (4).")
        }
    });

    // -> Abrir el inspector de archivos

    // Cachamos el evento change
    var cont = 0;
    $(document).on("change", "#add-new-photo", function () {

        console.log(this.files);
        var files = this.files;
        var element;
        var supportedImages = ["image/jpeg", "image/png", "image/gif"];
        var seEncontraronElementoNoValidos = false;



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

        if (seEncontraronElementoNoValidos) {
            showMessage("Se encontraron archivos no validos.");
        }
        else {
            showMessage("Archivo subido correctamente.");
        }

    });


    // -> Cachamos el evento change

    // Eliminar previsualizaciones

    $(document).on("click", "#Images .image-container", function (e) {
        $(this).parent().remove();
        cont--;
    });

    // -> Eliminar previsualizaciones

});



//Genera las previsualizaciones
function createPreview(file) {
    var imgCodified = URL.createObjectURL(file);
    var img = $('<div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12"><div class="image-container"> <figure> <img src="' + imgCodified + '" alt="Foto del usuario"> <figcaption> <i class="icon-cross"></i> </figcaption> </figure> </div></div>');
    $(img).insertBefore("#add-photo-container");
}



// Modal 


function showModal(card) {
    $("#" + card).show();
    $(".modal").addClass("show");
}

function showMessage(message) {
    $("#Message .tag").text(message);
    showModal("Message");
}
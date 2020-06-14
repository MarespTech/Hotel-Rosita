document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    console.log("check");
    window.addEventListener("resize", () => {
        console.log(screen.width);
        if (screen.width > 768) {
            document.querySelector(".navegacion-principal").style.display = "inline-block";
        }
    })
    const headerInto = [{
        foto: "carrusel bkg1",
        titulo: "Paquete de aventura ¡Tercera Noche Gratis!",
        texto: "Vive una increible experiencia en barco a Arcos, Animas y Quimixto"
    }, {
        foto: "carrusel bkg2",
        titulo: "Con su propio malecón de más de de 2 kilómetros de largo",
        texto: "Malecón Puerto Vallarta"
    }, {
        foto: "carrusel bkg3",
        titulo: "Hotel Rosita en Puerto Vallarta",
        texto: "-Desde 1948-"
    }];

    var pagina = document.querySelector(".hidden").textContent;
    console.log(pagina);
    if (pagina == "index") {
        document.querySelector("#index").setAttribute("class", "opcion opcion-select");
        var i_carrusel = 0;
        cambiarCarrusel();
        setInterval(cambiarCarrusel, 15000);
    } else if (pagina == "habitaciones")
        document.querySelector("#habitaciones").setAttribute("class", "opcion opcion-select");
    else if (pagina == "preguntas")
        document.querySelector("#preguntas").setAttribute("class", "opcion opcion-select");
    else if (pagina == "fotos")
        document.querySelector("#fotos").setAttribute("class", "opcion opcion-select");
    else
        console.log("none");

    if (document.querySelector(".mapa") != null)
        getMapa();
    if (document.getElementById("myModal") != null)
        principalModal();

    //Menu Movil
    $(".showMenu").click(function() {
        if (document.querySelector(".navegacion-principal").style.display === "block" ||
            document.querySelector(".navegacion-principal").style.display === "inline-block")
            document.querySelector(".navegacion-principal").style.display = "none";
        else
            document.querySelector(".navegacion-principal").style.display = "block";
    });

    //Agregando tooltips
    $('[data-toggle="tooltip"]').tooltip();

    function getMapa() {
        //Agregando Mapa
        var map = L.map('mapa').setView([20.612581, -105.232522], 15);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([20.612581, -105.232522]).addTo(map)
            .bindPopup('Hotel Rosita')
            .openPopup();
    }

    function principalModal() {
        var imagen
        var modal = document.getElementById("myModal");
        var img = document.querySelectorAll(".imgModal");
        var modalImg = document.getElementById("img01");
        var captionText = document.getElementById("caption");
        for (imagen of img) {
            imagen.onclick = function() {
                modal.style.display = "block";
                modalImg.src = this.src;
                captionText.innerHTML = this.alt;
            }
        }

        var span = document.getElementsByClassName("close")[0];
        span.onclick = function() {
            modal.style.display = "none";
        }
    }

    function cambiarCarrusel() {
        console.log(i_carrusel);
        var carrusel = document.querySelector(".carrusel");
        var titulo = document.querySelector(".textoPrincipal-carrusel");
        var texto = document.querySelector(".textoSecundario-carrusel");

        carrusel.setAttribute("class", headerInto[i_carrusel].foto);
        titulo.textContent = headerInto[i_carrusel].titulo;
        texto.textContent = headerInto[i_carrusel].texto;

        i_carrusel++;
        if (i_carrusel == 3)
            i_carrusel = 0;
    }
});
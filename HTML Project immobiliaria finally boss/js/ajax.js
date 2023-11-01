document.addEventListener("DOMContentLoaded", function () {
    const propiedadesContainer = document.getElementById("propiedades-container");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "departamentos.json", true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            const departamentos = data.propiedades;
            

            function createPropertyCard(propiedad) {
                const cardElement = document.createElement("div");
                cardElement.classList.add("cardH");

                const imagenElement = document.createElement("img");
                imagenElement.classList.add("imagenH");
                imagenElement.src = propiedad.imagen;

                const contenidoElement = document.createElement("div");
                contenidoElement.classList.add("contenido");

                const tituloElement = document.createElement("h6");
                tituloElement.textContent = propiedad.titulo;

                const metrosCuadradosElement = document.createElement("p");
                metrosCuadradosElement.textContent = `Metros cuadrados: ${propiedad.metros_cuadrados}`;

                const descripcionElement = document.createElement("p");
                descripcionElement.textContent = propiedad.descripcion;

                const precioElement = document.createElement("a");
                precioElement.classList.add("precio-button");
                precioElement.textContent = `USD ${propiedad.precio}`;
                precioElement.href = "departamentodentro.html";

                contenidoElement.appendChild(tituloElement);
                contenidoElement.appendChild(metrosCuadradosElement);
                contenidoElement.appendChild(descripcionElement);
                contenidoElement.appendChild(precioElement);

                cardElement.appendChild(imagenElement);
                cardElement.appendChild(contenidoElement);

                cardElement.dataset.precio = propiedad.precio; // Agregar precio como un atributo de datos

                return cardElement;
            }

            departamentos.forEach((departamento) => {
                const cardElement = createPropertyCard(departamento);
                propiedadesContainer.appendChild(cardElement);
            });
        } else {
            console.error("Error al cargar el archivo JSON");
        }
    };

    xhr.send();
});

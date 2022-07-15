let cargarDatos = () => {

    fetch('https://swapi.dev/api/?format=json').then(response => response.json())
        .then(data => {
            let arreglo = data['results'];

            // Traer etiquetas -- planetas ( depende del selector )

            //const datosVentas2020 = {
            //     label: "planetas",
            //     data: [3, 4, 7, 1], // cantidad de veces que salen en todas las pelis
            //     backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
            //     borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
            //     borderWidth: 1,// Ancho del borde
            // };


            // for (let datos in data['results']) {
            //     let arreglo2 = data['results'][datos]
            //     console.log(arreglo2)
            //     let plantilla =
            //         `<div class="profile-card">
            //         <ul id="tabla">
            //         <li id="nombre">Name: ${arreglo2['name']}</li>
            //         <ul>
            //         <li id="altura">Height: ${arreglo2['height']}</li>
            //         <li id="colorCabello">Mass: ${arreglo2['mass']}</li>
            //         <li id="colorCabello">Hair color: ${arreglo2['hair_color']}</li>
            //         <li id="colorCabello">Birth year: ${arreglo2['birth_year']}</li>
            //         <li id="colorCabello">Eye color: ${arreglo2['eye_color']}</li>
            //         </ul>
            //     </ul>
            //     </div>`
            //     document.getElementById('Personajes').innerHTML += plantilla 
            // }
            
        })
        .catch(console.error);

}

window.addEventListener('DOMContentLoaded', (event) => {
    console.log("a")
    cargarDatos();
    
})


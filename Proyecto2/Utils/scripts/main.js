let cargarDatos = () => {

    fetch('https://swapi.dev/api/people/?format=json').then(response => response.json())
        .then(data => {
            console.log(data)
            let arreglo = data['results'];
            for (let datos in data['results']) {
                let arreglo2 = data['results'][datos]
                console.log(arreglo2)
                let plantilla =
                    `<div class="profile-card">
                    <ul id="tabla">
                    <li id="nombre">Name: ${arreglo2['name']}</li>
                    <ul>
                    <li id="altura">Height: ${arreglo2['height']}</li>
                    <li id="colorCabello">Mass: ${arreglo2['mass']}</li>
                    <li id="colorCabello">Hair color: ${arreglo2['hair_color']}</li>
                    <li id="colorCabello">Birth year: ${arreglo2['birth_year']}</li>
                    <li id="colorCabello">Eye color: ${arreglo2['eye_color']}</li>
                    </ul>
                </ul>
                </div>`
                document.getElementById('Personajes').innerHTML += plantilla 
            }
            
        })
        .catch(console.error);

}

window.addEventListener('DOMContentLoaded', (event) => {
    cargarDatos();
})


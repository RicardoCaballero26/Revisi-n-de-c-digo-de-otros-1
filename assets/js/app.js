// Definí la URL base de la API de GitHub
const baseEndpoint = 'https://api.github.com';
// Definí la URL para obtener información de usuarios
const usersEndpoint = `${baseEndpoint}/users`;
// Seleccioné los elementos del DOM con las clases name, blog y location
const $n = document.querySelector('.name'); // Corregí el selector para que coincida con la clase name
const $b = document.querySelector('.blog'); // Corregí el selector para que coincida con la clase blog
const $l = document.querySelector('.location'); // Seleccioné el elemento con la clase location

// Definí una función asíncrona para mostrar la información de un usuario
async function displayUser(username) {
    // Mostré un mensaje de carga en el elemento name
    $n.textContent = 'cargando...';
    try {
        // Realicé una solicitud GET a la API de GitHub para obtener la información del usuario
        const response = await fetch(`${usersEndpoint}/${username}`);
        // Verifiqué si la respuesta fue exitosa
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        // Parseé la respuesta como JSON
        const data = await response.json();
        console.log(data);
        // Mostré la información del usuario en los elementos correspondientes
        $n.textContent = `${data.name}`; // Utilicé comillas inversas para la interpolación de cadenas
        $b.textContent = `${data.blog}`; // Utilicé comillas inversas para la interpolación de cadenas
        $l.textContent = `${data.location}`; // Mostré la ubicación del usuario en el elemento location
    } catch (err) {
        // Llamé a la función handleError si ocurrió un error
        handleError(err);
    }
}

// Definí una función para manejar errores
function handleError(err) {
    console.log('OH NO!');
    console.log(err);
    // Mostré un mensaje de error en el elemento name
    $n.textContent = `Algo salió mal: ${err}`;
}

// Llamé a la función displayUser con el nombre de usuario 'stolinski'
displayUser('stolinski');


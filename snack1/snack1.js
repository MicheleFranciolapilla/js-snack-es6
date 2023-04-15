// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

// Valori minimo e massimo di peso
let     data_array          = [];

alert("Sei pronto?");

let     finished            = false;
do
{
    let bike_n = prompt("Inserisci il nome della bicicletta oppure stringa vuota per concludere l'input");
    let bike_w = parseFloat(prompt("Inserisci il peso della bicicletta oppure 0 per concludere l'input"));
    ((bike_n != "") && (bike_w != 0)) ? data_array.push({bike_n, bike_w}) : finished = true;
    if (!finished) console.log(data_array[data_array.length-1]);
} while (!finished);





// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

let     data_array          = [];

alert("Sei pronto?");

let     finished            = false;
// Ciclo do-while di acquisizione dati
do
{
    let bike_n = prompt("Inserisci il nome della bicicletta oppure stringa vuota per concludere l'input");
    let bike_w = parseFloat(prompt("Inserisci il peso della bicicletta oppure 0 per concludere l'input"));
    ((bike_n != "") && (bike_w != 0)) ? data_array.push({bike_n, bike_w}) : finished = true;
    if (!finished) console.log(data_array[data_array.length-1]);
} while (!finished);

if (data_array.length == 0)
{
    // Output nel caso di array vuoto (nessun oggetto valido)
    console.log("Non hai inserito alcun dato valido. array vuoto");
    document.writeln("<h3>Non hai inserito alcun dato valido. array vuoto</h3>");
}
else
{
    // Variabile che, a fine ciclo di ordinamento, conterrà il peso minimo (che potrebbe anche essere comune a più biciclette)
    let min_weight = 0;
    // Logica nel caso di presenza di almeno un oggeto valido all'interno dell'array
    // 2 Cicli for nidificati per ordinare l'array in senso di peso bicicletta crescente 
    for (let i = 0; i < data_array.length - 1; i++)
    {
        for (let j = i + 1; j < data_array.length; j++)
        {
            if (data_array[j].bike_w < data_array[i].bike_w)
            {
                let exchange = data_array[j];
                data_array[j] = data_array[i];
                data_array[i] = exchange;
            }
        }
    }
    console.log("array ordinato: ",data_array);
}





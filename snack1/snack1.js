// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

let     data_array          = [];

alert("Sei pronto?. N.B. NON FACCIO ALCUN CONTROLLO SULL'EVENTUALE RIPETIZIONE DEI DATI INSERITI, QUINDI ASTIENITI");

let     finished            = false;
// Ciclo do-while di acquisizione dati
do
{
    let bike_n = prompt("Inserisci il nome della bicicletta oppure stringa vuota per concludere l'input");
    let bike_w = parseFloat(prompt("Inserisci il peso della bicicletta oppure 0 per concludere l'input"));
    // Inserimento dati nell'array in maniera destrutturata
    ((bike_n != "") && (bike_w != 0) && (!isNaN(bike_w))) ? data_array.push({bike_n, bike_w}) : finished = true;
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
    // Si salva il peso minimo e attraverso filter si crea un array con tutte le biciclette di peso minimo
    const min_weight = data_array[0]["bike_w"];
    const min_weight_array = data_array.filter((element) => 
    {
        // Destrutturazione oggetto dentro il metodo filter
        const {bike_n, bike_w} = element;
        if (bike_w === min_weight) return true;
    });
    console.log("array delle biciclette più leggere: ", min_weight_array);

    // Si creano i messaggi in output mediante manipolazione del DOM con nidificazione di elementi, ricorso al metodo forEach, destrutturazione oggetto e template literal
    const message = document.createElement("div");
    message.innerHTML = `
    <h3>Il peso minore tra tutti quelli inseriti è di ${min_weight_array[0].bike_w} kg</h3>
    <ul>Il numero di biciclette del peso sopra indicato è: ${min_weight_array.length}...</ul>`;
    min_weight_array.forEach((element) => 
    {
        // Destrutturazione oggetto dentro il metodo forEach
        const {bike_n, bike_w} = element;
        // Si creano tanti list item quante sono le biciclette dal peso minimo e li si collega alla lista appena generate dentro un innerHTML
        let bicicletta = document.createElement("li");
        bicicletta.innerText = `${bike_n} - peso: ${bike_w} kg`;
        message.querySelector("ul").append(bicicletta);
    });
    const doc_main = document.querySelector("main");
    doc_main.append(message);
}





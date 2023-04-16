// Snack 3
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// l'array egnerato da parte vostra dovrà essere di ad esempio nomi o cose: ['alberto', 'michele','angelo','simone']
// se come numeri ad esemio ho 2 e 4 devo inserire in un array nuovo l'elemento in posizione 3
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

let input_done = false;
let data_array = [];
alert("Ora ti verrà richiesto di inserire una serie di nomi (di persone o cose). Per interrompere la sequenza di input inserisci stringa vuota");
do
{
    let data = prompt(`Inserisci il ${data_array.length + 1} dato...`);
    ((data === "") && (data_array.length != 0)) ? (input_done = true) 
        : (data === "") ? alert("Non hai ancora inserito nessun dato") : data_array.push(data);
} while(!input_done);

console.log(`Ora visualizzeremo gli elementi che hai inserito (${data_array.length} elementi), con le rispettive posizioni nell'array.`);
let main = document.querySelector("main");
main.innerHTML = `<h4>Ora visualizzeremo gli elementi che hai inserito (${data_array.length} elementi), con le rispettive posizioni nell'array.</h4>`;

data_array.forEach((element, index) =>
{
    console.log(`In posizione ${index}: ${element}`);
    main.innerHTML += `<h5>In posizione ${index}: ${element}</h5>`;
});

alert(`Ora ti verrà richiesto l'inserimento di due numeri (indici) che consentiranno di selezionare gli elementi da visualizzare. 
N.B. VERRANNO VISUALIZZATI TUTTI GLI ELEMENTI I CUI INDICI SARANNO COMPRESI TRA I NUMERI CHE INSERIRAI (ESTREMI ESCLUSI), QUINDI, SE VUOI PARTIRE DAL PRIMO ELEMENTO, PER FAVORE DIGITA '-1' COME INDICE MINIMO E, ANALOGAMENTE, SE VUOI TERMINARE CON L'ULTIMO ELEMENTO INSERITO, DIGITA  '${data_array.length}' COME INDICE MASSIMO......`);
// Indici validi minimo e massimo che consentano, nel caso, anche di prendere in esame l'intero array (dovendo escludere gli indici inseriti)
const min_allowed = -1;
const max_allowed = data_array.length;
input_done = false;
let first_nr = -2;
do
{
    first_nr = parseInt(prompt(`Inserisci il primo indice, compreso tra ${min_allowed} e ${max_allowed}, inclusi....`));
    if ((first_nr >= min_allowed) && (first_nr <= max_allowed))
    {
        (input_done = true);
    }
} while(!input_done);

input_done = false;
let second_nr = -2;
do
{
    second_nr = parseInt(prompt(`Inserisci il secondo indice, compreso tra ${min_allowed} e ${max_allowed}, inclusi, cercando di evitare il reinserimento del numero ${first_nr} ......`));
    if ((second_nr >= min_allowed) && (second_nr <= max_allowed))
    {
        (input_done = true);
    }
} while(!input_done);

let min_nr = Math.min(first_nr, second_nr);
let max_nr = Math.max(first_nr, second_nr);


if ((max_nr != min_nr) && (max_nr - min_nr > 1))
{
    console.log(`L'indice minore che hai inserito è ${min_nr}, quindi partiremo dall'elemento con indice ${min_nr+1}`);
    console.log(`L'indice maggiore che hai inserito è ${max_nr}, quindi ci fermeremo all'elemento con indice ${max_nr-1}`);
    main.innerHTML += `<h4>L'indice minore che hai inserito è ${min_nr}, quindi partiremo dall'elemento con indice ${min_nr+1}</h4>`;
    main.innerHTML += `<h4>L'indice maggiore che hai inserito è ${max_nr}, quindi ci fermeremo all'elemento con indice ${max_nr-1}</h4>`;

    let output_array = data_array.filter((element,index) => (index > min_nr && index < max_nr));
    
    console.log("Ora visualizzeremo gli elementi che hai scelto. Gli indici sono riferiti alla posizione nell'array finale, non necessariamente in quello di partenza");
    main.innerHTML += "<h4>Ora visualizzeremo gli elementi che hai scelto. Gli indici sono riferiti alla posizione nell'array finale, non necessariamente in quello di partenza</h4>";

    output_array.forEach((element, index) => 
    {
        console.log(`Elemento in posizione ${index}: ${element}`);
        let new_row = document.createElement("div");
        new_row.innerHTML = `<h5>Elemento in posizione ${index}: ${element}</h5>`;
        main.append(new_row);
    });
}
else
{
    main.innerHTML += `<h4>I due indici che hai inserito ("${min_nr}" e "${max_nr}") sono uguali, oppure non consentono di individuare un elemento da visualizzare, quindi il programma non ti mostra nessun dato</h4>`;
}


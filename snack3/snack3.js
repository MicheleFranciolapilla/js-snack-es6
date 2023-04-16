// Snack 3
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// l'array egnerato da parte vostra dovrà essere di ad esempio nomi o cose: ['alberto', 'michele','angelo','simone']
// se come numeri ad esemio ho 2 e 4 devo inserire in un array nuovo l'elemento in posizione 3
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

function return_array()
{

}

let input_done = false;
let data_array = [];
alert("Ora ti verrà richiesto di inserire una serie di nomi (di persone o cose). Per interrompere la sequenza di input inserisci stringa vuota");
do
{
    let data = prompt(`Inserisci il ${data_array.length + 1} dato...`);
    ((data === "") && (data_array.length != 0)) ? (input_done = true) 
        : (data === "") ? alert("Non hai ancora inserito nessun dato") : data_array.push(data);
} while(!input_done);
console.log(data_array);
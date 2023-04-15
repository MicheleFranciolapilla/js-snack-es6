// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

let squadre = [
                {nome: 'milan', punti: 0, falli: 0},
                {nome: 'inter', punti: 0, falli: 0},
                {nome: 'napoli', punti: 0, falli: 0},                
                {nome: 'roma', punti: 0, falli: 0},                
                {nome: 'bari', punti: 0, falli: 0},                
                {nome: 'juventus', punti: 0, falli: 0},                
                {nome: 'torino', punti: 0, falli: 0}, 
                {nome: 'palermo', punti: 0, falli: 0},                
                {nome: 'lazio', punti: 0, falli: 0},                
                {nome: 'sampdoria', punti: 0, falli: 0},                
                {nome: 'genoa', punti: 0, falli: 0},                
                {nome: 'cagliari', punti: 0, falli: 0},
            ];

let int_random = (max) => Math.floor(Math.random() * (max + 1));

squadre.forEach((element) =>
{
    element.punti = int_random(35);
    element.falli = int_random(10);
});
console.log("Squadre con campi 'punti' e 'falli' casuali... ",squadre);

let new_array = [];

squadre.forEach((element) =>
{
    const {nome, falli} = element;
    const new_obj = {"nome":nome, "falli":falli};
    new_array.push(new_obj);
});

for (let i = 0; i < squadre.length; i++)
{
    console.log(new_array[i]);
}

/*
Napisati program koji simulira bacanje 3 kockice (jedna kockica ima 6 strana i na tim stranama su brojevi 1 - 6). 
Simulirati konstantno bacanje sve tri kockice dok se u dva uzastopna bacanja ne desi da se dobiju isti brojevi na sve tri kockice
 (npr. u šestom bacanju se dobiju brojevi 2, 2, 2 a u sedmom 4,4,4 na sve tri kockice).
Ispisati koliko je ukupno bilo bacanja dok se nije ispunio navedeni uslov.
*/

//funkcija koja simulira bacanje jedne kockice. Vraca broj na koji je kockica pala
function baci(kockica) {
    let randomVrijednost = Math.floor(Math.random() * 6);
    return kockica[randomVrijednost];
}

let kockica = [1, 2, 3, 4, 5, 6];
let bacanja = [];
let brojacBacanja = 0;

//index [i] je predstavlja jedno bacanje a index [j] je broj na koji je svaka od kocki pala
//prekid petlje odredjujemo pomocu if uslova na liniji 30 i 32
for (let i = 0; ; i++) {
    bacanja[i] = [];
    //j<3 nam predstavlja tri kocke
    for (let j = 0; j < 3; j++) {
        //spremi broj na koji je kocka pala u dvodimenzionalni niz
        bacanja[i][j] = baci(kockica);
    }
    //potrebno je da kockice bacimo bar jednom da bi smo mogli porediti brojeve na koje su kockice pale 
    if (i>0) {
        //poredimo brojeve na koje su kockice pale u proslom bacanju sa brojevima na koje su pale u trenutnom bacanju
        if (((bacanja[i - 1][0] === bacanja[i - 1][1]) && (bacanja[i - 1][0] === bacanja[i - 1][2])) && ((bacanja[i][0] === bacanja[i][1]) && (bacanja[i][0] === bacanja[i][2]))) {
            break;
        }
    } brojacBacanja++;//nakon svakog bacanja(svake iteracije prve for petlje) povecamo vrijednost brojaca
}

console.table(bacanja);
console.log(`Da bi smo dobili dva uzastopna bacanja kockica sa brojevima koji su jednaki bilo je potrebno: ${brojacBacanja} bacanja.`);

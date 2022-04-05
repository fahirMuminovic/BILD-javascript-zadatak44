/*
Napisati program koji racuna faktorijel nekog broja n. 
N broj uzeti proizvoljno, izracunati faktorijel zatim ispisati rezultat.
Faktorijel broja se racuna na sljedeci nacin: faktorijel = n * (n-1)* (n-2)... * 1.
*/

let broj = 5;
let faktorijel = broj;//osiguravamo da racunanje faktorijela pocinje od unesenog broja

while (broj > 1) {
    //smanjujemo uneseni broj sve dok on ne postane 1
    broj--;
    //formula za racunanje faktorijela
    faktorijel = faktorijel * broj; 

    if (broj === 1) {
        break;
    }
}
console.log(faktorijel);
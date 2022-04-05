/* 
Napisati program koji će neki prirodni broj A (A > 100000), 
te kreirati i ispisati broj B koji će se sastojati od cifara broja A u obrnutom redoslijedu u kojem je svaka parna cifra uklonjena.
 (npr. ako se unese 45362792 funkcija će vratiti 9735). 
Ispisati brojeve A i B i razliku tih brojeva.
*/
let randomBroj = Math.floor((Math.random() * 100000) + 100000);
let randomBrojCopy = randomBroj;
let zadnjaCifra;
let brojObrnut = 0;


for (let i = 0; i < randomBroj.toString().length; i++) {
    zadnjaCifra = randomBrojCopy % 10;
    brojObrnut = brojObrnut * 10 + zadnjaCifra;
    randomBrojCopy = Math.floor(randomBrojCopy / 10);
}

let brojObrnutSpremljenUNiz = Array.from(String(brojObrnut), Number);
let konacanBroj = 0;

for (let i = 0; i < brojObrnutSpremljenUNiz.length; i++) {
    if (brojObrnutSpremljenUNiz[i] % 2 !== 0) {
        //sve elemente niza koji nisu parni spremamo u varijablu konacanBroj
        konacanBroj = konacanBroj * 10 + brojObrnutSpremljenUNiz[i];
    }
}

console.log(`Generisani broj (A) je: ${randomBroj}\nGenerisani broj (A) ispisan naopako bez parnih cifri (B) je: ${konacanBroj}`);
console.log(`Razlika brojeva A i B je: ${randomBroj} - ${konacanBroj} = ${randomBroj - konacanBroj}`);



//---------------------------------------------------------------------------------------//
/*Rjesenje sa koristenjem nizova. Bespotrebno komplikovano!!!*/
//---------------------------------------------------------------------------------------//
// let randomBroj = Math.floor((Math.random() * 100000) + 100000);
// //generisani broj cemo pretvoriti u niz koristeci array.from
// //broj cemo prvo pretvoriti u string prvim argumentom metode -> String(randomBroj)
// //koristeci drugi argument u metodi prilikom svake iteracije kroz string pojedini karakter vracamo kao broj i snimamo u zeljeni niz
// let randomBrojKaoNiz = Array.from(String(randomBroj), Number);
// let obrnutiBroj = [];
// let j = 0;
// let obrnutiBrojBezParnih = [];
// let stringBroj = '';
// let konacniBroj;

// //koristeci for petlju i brojac [j] proci cemo kroz prvobitni niz od kraja prema pocetku
// for (let i = (randomBrojKaoNiz.length - 1); i >= 0; i--, j++) {
//     //zadnji element prvobitnog niza(element na indexu [i]) spremamo na prvo mjesto [j] u novi niz
//     obrnutiBroj[j] = randomBrojKaoNiz[i];
// }

// for (let i = 0; i < obrnutiBroj.length; i++) {
//     if (obrnutiBroj[i] % 2 !== 0) {
//         //sve vrijednosti iz niza obrnutiBroj koje su neparne dodajemo u niz obrnutiBrojBezParnih
//         obrnutiBrojBezParnih.push(obrnutiBroj[i]);
//     }
// }

// //prolazimo kroz niz obrnutiBrojBezParnih i spremamo pojedinacne elemente u varijablu stringBroj tipa string
// for (let i = 0; i < obrnutiBrojBezParnih.length; i++) {
//     stringBroj += obrnutiBrojBezParnih[i];
// }

// //castamo varijablu stringBroj tipa string u varijablu konacniBroj tipa number
// konacniBroj = Number(stringBroj);

// //konacni ispis
// console.log(`${randomBroj} - ${konacniBroj} = ${randomBroj - konacniBroj}`);
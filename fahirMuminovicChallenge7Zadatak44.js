/*
Napisati program koji će generisati Fibonacci niz i smjestiti ga u jedan niz od 20 elemenata. 
(Fibbonacijev niz je niz brojeva koji počinje brojevima 0 i 1, a svaki sljedeći broj u nizu dobija se zbrajanjem prethodna dva:
     F(0) = 0, F(1) = 1,F(n) = F(n-1) + F(n-2)). 
Zatim napraviti funkciju koja će u nizu pronaći sve brojeve koji završavaju parnom cifrom i ukloniti ih iz niza. 
Uklanjanje elemenata niza obavezno uraditi tako da ne ostaju prazni elementi već da se ostatak niza pomjeri kako ne bi bilo praznih elemenata. 
Pomjeranje ostatka niza obavezno raditi prilikom uklanjanja elemenata.
*/

let fibonacciNiz = new Array(20);
//hardcodat cemo prve dvije vrijednosti niza jer su one uvijek 0 i 1
fibonacciNiz[0] = 0;
fibonacciNiz[1] = 1;

//s ozbirom da su nam prva dva elementa poznata njih preskacemo krecemo od i=2 (treci element)
for (let i = 2; i < fibonacciNiz.length; i++) {
    
    //formula za fibonaccijev niz
    fibonacciNiz[i] = fibonacciNiz[i-2] + fibonacciNiz[i-1];
    
}
console.log(fibonacciNiz);


for (let i = 0; i < fibonacciNiz.length; i++) {
    //provjera da li je vrijednost na datom idexu parna
    if (fibonacciNiz[i] % 2 === 0) {
        //splice brise vrijednost na indexu i
        fibonacciNiz.splice(i, 1);
    }
}

console.log(fibonacciNiz);
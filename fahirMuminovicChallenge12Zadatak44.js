/**
 Napisati program koji kreira matricu 4X4, i popunjava ju nasumicnim brojevima od 1 do 20. 
 Zatim sabira sve brojeve koje se nalaze na indexima cija suma je neparan broj. Primjer indexa: 0 i 1, 1 i 3 itd.
 */
let matrica = new Array(4);
let suma = 0;

for (let i = 0; i < matrica.length; i++) {
    //svaki element niza matrica na poziciji i postaje niz. Time dobivamo matricu ili 2D niz
    matrica[i] = new Array(4);
    for (let j = 0; j < matrica.length; j++) {
        matrica[i][j] = Math.floor((Math.random() * 20) + 1);

        if ((i + j) % 2 !== 0) {
            suma += matrica[i][j];
        }
    }
}

//ukoliko zelimo ispis

console.table(matrica);
console.log(`Suma svih elemenata koji se nalaze na indexima cija suma je neparan broj je: ${suma}`);

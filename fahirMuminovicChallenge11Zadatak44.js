/*
Napisati program koji kreira matricu 4X4, i popunjava ju nasumicnim brojevima od 1 do 20.
*/
let matrica = new Array(4);

for (let i = 0; i < matrica.length; i++) {
    //svaki element niza matrica na poziciji i postaje niz. Time dobivamo matricu ili 2D niz
    matrica[i] = new Array(4);
    for (let j = 0; j < matrica.length; j++) {
        matrica[i][j] = Math.floor((Math.random() * 20) + 1);
    }
}

//ukoliko zelimo ispis
console.table(matrica);
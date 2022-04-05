/*
Napisati program koji ce kreirati niz od 20 elemenata, popunjen nasumicnim brojevima od 1 do 100. Zatim, program kreira novi niz, koji ima sve elemente kao i prvi niz ali obrnut redoslijed. Ako je prvi niz [12, 24, 7], drugi niz ce biti [7, 24, 12].
*/
let nizRandomElemenata = [];

for (let i = 0; i < 3; i++) {
    nizRandomElemenata[i] = Math.floor((Math.random() * 100) + 1);
}
console.log(nizRandomElemenata);

let obrnutiNizRandomElemenata = [];
//j koristimo kao index u drugoj petlji
let j = 0;

//krenuvsi od kraja prvog niza uzimamo element na poziciji [i] te ga spremamo u novi niz na poziciju [j]
for (let i = (nizRandomElemenata.length - 1); i >= 0; i--) {
    //[i] -> kraj prvobitnog niza; [j] -> pocetak novog(obrnutog) niza
    obrnutiNizRandomElemenata[j] = nizRandomElemenata[i];
    j++;
}

console.log(obrnutiNizRandomElemenata);
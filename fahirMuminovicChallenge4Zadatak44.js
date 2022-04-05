/*
Napisati program koji simulira dijeljenje 6 karata korisniku iz spila. 
Spil ukupno ima 52 karte, 'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'
u cetiri znakKartea 'List','Srce', 'Kocka' i 'Mak'.
Ispisati podjeljene karte.
*/
let brojcanaVrijednostKarte = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
let znakKarte = ['List', 'Srce', 'Kocka', 'Mak'];
let dodijeljenaKarta = '';

for (let i = 0; i < 6; i++) {
    //randombrojcanaVrijednostKarte je zapravo random index za niz brojcanaVrijednostKarte
    let randomBrojcanaVrijednostKarte = Math.floor(Math.random() * 13);
    //randomZnakKarte je random index za niz znakKarte
    let randomZnakKarte = Math.floor(Math.random() * 4);

    //uzimamo random vrijednost iz prvog niza i random vrijednost iz drugog niza i smijestamo ih u varijablu dodijeljenaKarta + space izmedju njih
    dodijeljenaKarta = brojcanaVrijednostKarte[randomBrojcanaVrijednostKarte] + ' ' + znakKarte[randomZnakKarte];
    console.log(dodijeljenaKarta);
}
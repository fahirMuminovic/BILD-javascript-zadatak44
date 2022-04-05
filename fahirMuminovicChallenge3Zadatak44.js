/*
Napisati program koji ce kreirati niz od 20 elemenata, popunjen nasumicnim brojevima od 1 do 100. Ispisati ovaj pocetni niz u konzolu. Zatim izmjesati elemente u nizu, te ponovo ispisati niz u konzolu. Za mijesanje niza, minimalan broj iteracija je jednak duzini niza.
*/

let arr = [];

for (let i = 0; i < 20; i++) {
    arr[i] = Math.floor((Math.random() * 100) + 1);
}

console.log(arr);
let brojac=0;

for (let trenutniIndex = 0; trenutniIndex < arr.length; trenutniIndex++) {
    //generisanje random indexa koji ce se koristiti za zamjenu vrijednosti, 
    let randomIndex = Math.floor(Math.random() * arr.length);
    //zamjena vrijednosti u nizu na trenutnomIndexu i randomIndexu
    const temp = arr[trenutniIndex];
    arr[trenutniIndex] = arr[randomIndex];
    arr[randomIndex] = temp;
    brojac++;
}

console.log(arr);
/*
Napisati program koji uklanja sve samoglasnike iz stringa ‘Make it work, make it right, make it fast.’. 
Nakon sto program ukloni sve samoglasnike ispisati string u konzolu.
*/
let recenica = 'Make it work, make it right, make it fast.';
let samoglasnici = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];

//proci cemo kroz string i niz u isto vrijeme te porediti svaki karakter u stringu sa elementima niza tj. samoglasnicima
for (let i = 0; i < recenica.length; i++) {
    for (let j = 0; j < samoglasnici.length; j++) {
        //ukoliko je slovo u recenici na poziciji i samoglasnik koristit cemo metod .replace
        if (recenica.charAt(i) === samoglasnici[j]) {
            //metoda .replace zamijenit ce slovo na poziciji i sa praznim mjestom.
            recenica = recenica.replace(recenica.charAt(i), '');
        }
    }
}

console.log(recenica);
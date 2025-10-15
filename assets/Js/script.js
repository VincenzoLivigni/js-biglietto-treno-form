/*
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati),
realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console. 
*/

// Seleziono gli elementi del DOM cercandoli per ID
const kmEl = document.getElementById("kms");
// console.log(kmEl);

const ageEl = document.getElementById("eta");
// console.log(ageEl);

const bottoneEl = document.getElementById("button");
console.log(bottoneEl);

// al click del bottone calcola valore totale
bottoneEl.addEventListener("click", () => {

// creo una variabile per il prezzo al km 
const price = kmEl.value * 0.21;
// console.log(price);

    // con delle istruzioni condizionali calcolo il totale del biglietto in base all'età dell'utente 
    if (ageEl.value < 18) {
        const under_18 = price - (price * 20 / 100)
        // stampo il prezzo del biglietto calcolando uno sconto del 20% (se l'utente ha meno di 18 anni)
        console.log(`Il prezzo del tuo biglietto è di € ${under_18}`);
    } else if (ageEl.value > 65) {
        const over_65 = price - (price * 40 / 100)
        // stampo il prezzo del biglietto calcolando uno sconto del 40% (se l'utente ha più di 65 anni)
        console.log(`Il prezzo del tuo biglietto è di € ${over_65}`);
    } else {
        // stampo il prezzo del biglietto (prezzo base)
        const prezzo_standard = price;
        console.log(`Il prezzo del tuo biglietto è di € ${prezzo_standard}`);
    }
})

/*
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente
potrà inserire i dati e visualizzare il calcolo finale con il prezzo. 
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina
(il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
Questo richiederà un minimo di ricerca.



MILESTONE 3:
Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, raffinando la parte di HTML e CSS
in modo da renderla esteticamente gradevole.
*/




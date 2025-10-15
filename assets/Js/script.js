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
// console.log(bottoneEl);

const formEl = document.querySelector("form")
// console.log(formEl);

const tratta = document.getElementById("percorso");
// console.log(tratta);

const fascia = document.getElementById("fascia");
// console.log(fascia);

const totaleBiglietto = document.getElementById("biglietto");
// console.log(totaleBiglietto);

// aggiungo un evento nel form 
formEl.addEventListener("submit", (event) => {
    event.preventDefault()

// creo una variabile per il prezzo al km 
const price = kmEl.value * 0.21;
// console.log(price);


// creo variabile d'appoggio
let totaleBigliettoViaggio = price;

    // con delle istruzioni condizionali calcolo il totale del biglietto in base all'età dell'utente 
    if (ageEl.value < 18) {
        totaleBigliettoViaggio =  price - (price * 20 / 100)
        // stampo il prezzo del biglietto calcolando uno sconto del 20% (se l'utente ha meno di 18 anni)
        console.log(`Il prezzo del tuo biglietto è di € ${totaleBigliettoViaggio.toFixed(2)}`);
    } else if (ageEl.value > 65) {
        totaleBigliettoViaggio =  price - (price * 40 / 100)
        // stampo il prezzo del biglietto calcolando uno sconto del 40% (se l'utente ha più di 65 anni)
        console.log(`Il prezzo del tuo biglietto è di € ${totaleBigliettoViaggio.toFixed(2)}`);
    } else {
        // stampo il prezzo del biglietto (prezzo base)
        totaleBigliettoViaggio =  price
        console.log(`Il prezzo del tuo biglietto è di € ${totaleBigliettoViaggio.toFixed(2)}`);
    }

    tratta.textContent = kmEl.value;
    fascia.textContent = ageEl.value;
    totaleBiglietto.textContent = totaleBigliettoViaggio.toFixed(2);

})


/*
MILESTONE 3:
Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, raffinando la parte di HTML e CSS
in modo da renderla esteticamente gradevole.
*/




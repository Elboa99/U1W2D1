/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA
Esistono 3 tipi principali di datatype:
1) Stringhe: queste definiscono una sequenza di caratteri che possono rappresentare sia delle parole che dei numeri, devono essere specificati con le virgolette
2)Numeri: queste definiscono dai valori numerici (sia interi che decimali) e a differenza delle stringhe non vengono identificate con le virgolette
3) Booleani: questi definiscono se una condizione è vera oppure falsa. I risultati di verifica di queste condizioni sono solo due : vero (true) e falso (false)
*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
 
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myName = "Kenny"

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numero1 = 12
const numero2 = 20
console.log("Risultato della somma :",numero1 + numero2);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
const x = 12

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
myName = "Boateng"
/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numero3 = 4
console.log("Risultato della sottrazione :",numero3 - x);


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const name1 = "john"
const name2 = "John"
console.log(!("name1 è diverso da name2?", name1 === name2));
console.log("name1 è uguale a name2?",name1 === name2 || name1 !== name2 );


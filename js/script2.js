/*
------------------ES 2------------------
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
Consigli del giorno:
Iniziate col riflettere sugli step che dovete eseguire, scrivendoli in italiano sotto forma di commenti
Facciamo un passo alla volta e verifichiamo i nostri passi col console.log.
Quando tutto funziona col console.log possiamo preoccuparci di eseguire in pagina!

1- Creare un array di oggetti di studenti con proprietà nome, cognome e eta
2- ciclare al suo interno con un for per poi stampare con un for-in le proprietà
3- raccogliamo i dati del nuovo studente dall'utente
4- li pushiamo all'interno dell'array

*/


// raccogliamo i dati dall'utente


alert('Inserisci i dati del nuovo studente!');
var userChoiceName = prompt('inserisci il nome');
var userChoiceSurname = prompt('inserisci il cognome');
var userChoiceAge = prompt("inserisci l'età");

//creiamo un array 

var students = [
    {
        name: 'Leonardo',
        surname: 'Bonucci',
        age: [],

    },
    {
        name: 'Giorgio',
        surname: 'Chiellini',
        age: [],

    },
    {
        name: 'Gigi',
        surname: 'Donnarumma',
        age: [],

    },
]

var newStudent = {
    name: userChoiceName,
    surname: userChoiceSurname,
    age: userChoiceAge,
}

students.push(newStudent);

var studentsProprieties = '';

for (var i = 0; i < students.length; i++) {
    
    var currentStudent = students[i];
    
    var studentsProps = '';

    for (var key in currentStudent) {

        var studentProp = (currentStudent[key]);
        studentsProps += '<li>'+ key + ': ' + studentProp + '</li>';
    
        console.table(studentsProps);

    }
    
    studentsProprieties += studentsProps;
}

display.innerHTML = studentsProprieties;
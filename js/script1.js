/* 
------------------ES 1------------------
Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo (in pagina) attraverso un ciclo for-in tutte le proprietà dell'oggetto.

1- creare un oggetto con le rispettive proprietò
2- utilizzare un ciclo for-in per stamparle in pagina
*/


// ------------------ESERCIZIO 1------------------


var display = document.getElementById('display');
var student = {
    name: 'Giuseppe',
    surname: 'Conte',
    age: 22,
}

var studentsProps = '';

for (var key in student) {
    var studentProp = (student[key]);
    studentsProps += '<li>'+ key + ': ' + studentProp + '</li>';
}

display.innerHTML = studentsProps;



// ------------------ESERCIZIO 1------------------
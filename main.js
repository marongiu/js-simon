// La pagina espone 5 numeri generati casualmente.
//  Da li parte un timer di 30 secondi. Dopo 30 secondi l'utente deve inserire
//  , uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri,
// il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Stampo 5 numeri casuali
$(document).ready(function() {
  // Creo un array vuota dove pushare i numeri
  var array = [];
  // Creo un ciclo for per ripetere la generazione di numeri 5 volte
  for (var i = 1; i <= 5 ; i++) {
    var randomNumber = Math.floor(Math.random() * (130 - 1 + 1)) + 1;
    // Pusho il numero generato nell'array vuota
    if (!array.includes(randomNumber)) {
      array.push(randomNumber);
    } else {
      array.push(randomNumber);
    }
  }
  console.log("I numeri generati casualmente", array); // I numeri generati casualmente
  // Stampo i numeri casuali
  for (var i = 0; i < array.length; i++) {
    document.getElementById('random').innerHTML += '<span>' + array[i] + '</span>';
  }
  // Faccio partire il timer di 30 secondi
  setTimeout(clock, 30);

  // Creo la funzione clock dove creo i miei 5 prompt per chiedere i numeri
  function clock() {
    //Creo la mia array vuota dove pushare i numeri dell'utente
    var arrayUser = [];
    // Creo una variabile con i numeri corretti
    var checkNumber = [];
    for (var i = 1; i <= 5; i++) {
      var userNumber = parseInt(prompt("Dimmi i numeri che hai visualizzato"));
      // Li pusho nell'array vuota
      arrayUser.push(userNumber);
      // Se il numero che ho inserito è presente nella lista array allora lo Pusho
      // nella lista CheckNumber
      if (array.includes(userNumber)) {
        checkNumber.push(userNumber);
      }
    }

    // NUMERI SCELTI DALL'UTENTE
    console.log("I numeri da te inseriti sono" , arrayUser); // I numeri inseriti dall'utente
    for (var i = 0; i < arrayUser.length; i++) {
      document.getElementById('usernumber').innerHTML += '<span>' + arrayUser[i] + '</span>';
    }

    //PUNTEGGIO
    console.log("Hai indovinato ", checkNumber.length, "numeri"); // Il punteggio
    document.getElementById('points').innerHTML += '<span>' + checkNumber.length + '<span>';

    // NUMERI CORRETTI
    console.log("I numeri da te indovinati sono: ", checkNumber); // I numeri corretti

    for (var i = 0; i < checkNumber.length; i++) {
      document.getElementById('checknumber').innerHTML += '<span>' + checkNumber[i] + '<span>'
    }
  }
});

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
    var randomNumber = Math.floor(Math.random() * 150);
    // Pusho il numero generato nell'array vuota
    array.push(randomNumber);
  }
  console.log(array);

  // Stampo i numeri generati
  for (var i = 0; i < array.length; i++) {
    document.getElementById('number').innerHTML += '<span>' + array[i] + '</span>';
  }

  // Faccio partire il timer di 30 secondi
  setTimeout(clock, 1000);

// Creo la funzione clock dove creo i miei 5 prompt per chiedere i numeri
  function clock() {
    //Creo la mia array vuota dove pushare i numeri dell'utente
    var arrayUser = [];
    for (var i = 1; i <= 5; i++) {
      var userNumber = parseInt(prompt("Dimmi i numeri che hai visualizzato"));
      // Li pusho nell'array vuota
      arrayUser.push(userNumber);
    }
    console.log(arrayUser);
  }
});

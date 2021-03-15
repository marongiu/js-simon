// La pagina espone 5 numeri generati casualmente.
//  Da li parte un timer di 30 secondi. Dopo 30 secondi l'utente deve inserire
//  , uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri,
// il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Stampo 5 numeri casuali
$(document).ready(function() {
    var array = [];

    for (var i = 0; i <= 4; i++) {
      var randomNumber = Math.floor(Math.random() * 10);
      array.push(randomNumber)
    }

});

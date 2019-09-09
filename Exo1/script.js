var pierre = $('#pierre');
var feuille = $('#feuille');
var ciseaux = $('#ciseaux');
var robot = ['pierre', 'feuille', 'ciseaux'];
//Selection aléatoire du robot
$('#shifumi').click(function() {
  var robot = ['pierre', 'feuille', 'ciseaux'];
  //Selection aléatoire du jeu du robot
  var robotSelect = robot[Math.floor(Math.random() * robot.length)];
  console.log('Votre adversaire à joué : ' + robotSelect);
  var select = document.querySelector('#play');
  var indexPlay = select.options[select.selectedIndex].value;
  var valeurPlay = robot[indexPlay];
  console.log('Vous avez joué : ' + valeurPlay);
  if (robotSelect == valeurPlay) {
    alert('égalité');
  } else if ((robotSelect == 'pierre' && indexPlay == 1) || (robotSelect == 'feuille' && indexPlay == 2) || (robotSelect == 'ciseaux' && indexPlay == 0)) {
    alert('gagné');
  } else {
    alert('perdu');
  }
});

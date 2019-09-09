$('#button').click(function(){
  var note1 = $('#note1').val();
  console.log(note1);
  var note2 = $('#note2').val();
  console.log(note2);
  var note3 = $('#note3').val();
  console.log(note3);
  var note4 = $('#note4').val();
  console.log(note4);
  var note5 = $('#note5').val();
  console.log(note5);

  if (!note1 || !note2 || !note3 || !note4 || !note5){
        Swal.fire({
  type: 'error',
  title: 'Oops... !',
  text: 'Vous avez surement oublié de remplir une ou plusieur notes',
})
  }
if (note1 && note2 && note3 && note4 && note5){
    var note = ((Number(note1) + Number(note2) + Number(note3) + Number(note4) + Number(note5))/5);
  console.log(note);
}

if ((note >= 0) && (note <=10)){
    Swal.fire({
  type: 'error',
  title: 'Oops... Compliqué pour le bac !',
  text: 'Votre moyenne est de :' + note ,
footer: 'Apprécitation : Note en dessous de la moyenne',
})
} else if ((note >=10) && (note <13)){
Swal.fire({
  type: 'success',
  title: 'ça devrait de faire',
  text: 'Votre moyenne est de :' + note ,
  footer: 'Apprécitation : Moyen',
})
} else if ((note >=13) && (note <16)){
Swal.fire({
  type: 'success',
  title: 'Bien pour le bac ! ',
  text: 'Votre moyenne est de :' + note ,
  footer: 'Apprécitation : Bien',
})
} else if ((note >=16) && (note <20)){
Swal.fire({
  type: 'success',
  title: 'Pas de problème pour le bac !',
  text: 'Votre moyenne est de :' + note ,
  footer: 'Apprécitation : Très bien',
})
} else if (note == 20){
  Swal.fire({
  title: 'Vous êtes sur ?',
  text: "Félicitation pour vos notes",
  type: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Oui, confirmer!',
  cancelButtonText: 'Retour',
})
}
});

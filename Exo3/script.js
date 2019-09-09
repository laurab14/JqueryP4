var notLastName = $('#hideLastName').hide();
var notFirstName = $('#hideFirstName').hide();
var notMail = $('#hideMail').hide();
var notPhoneNumber = $('#hidePhoneNumber').hide();
  //Régex de vérif lastName, firstName
  var regexName = /^[a-zA-âäàéèêëùûüôö\-']+$/;
  //Régex de vérif phoneNumber
  var regexPhone = /^(0|\+33)[1-9][0-9]{8}$/;
  //Régex de vérif mail
  var regexMail = /^[a-z0-9]+[@][a-z]+[\.][a-z]{1,3}$/;
$('#button').click(function(){
  //Récupération des valeur de champs du formulaire
  var lastName = $('#lastName').val();
  var firstName = $('#firstName').val();
  var mail = $('#mail').val();
  var phoneNumber = $('#phoneNumber').val();
  console.log(lastName, firstName, mail, phoneNumber);
  //Condition de validation lastName et firstName
  if (!regexName.test(lastName)) {
$(notLastName).fadeIn(1000);
$('#lastName').css('border', '1px solid red');
  }
  if (!regexName.test(firstName)) {
$(notFirstName).fadeIn(1000);
$('#firstName').css('border', '1px solid red');
}
  //Condition de validation de mail
  if (!regexMail.test(mail)){
$(notMail).fadeIn(1000);
$('#mail').css('border', '1px solid red');
  }
  //Condition de validation de phoneNumber
  if (!regexPhone.test(phoneNumber)){
$(notPhoneNumber).fadeIn(1000);
$('#phoneNumber').css('border', '1px solid red');
  }
});
  $('#lastName').click(function(){
var notLastName = $('#hideLastName').hide();
$('#lastName').css('border', '');
});
  $('#firstName').click(function(){
var notFirstName = $('#hideFirstName').hide();
$('#firstName').css('border', '');
});  $('#mail').click(function(){
var notMail = $('#hideMail').hide();
$('#mail').css('border', '');
});
$('#phoneNumber').click(function(){
var notPhoneNumber = $('#hidePhoneNumber').hide();
$('#phoneNumber').css('border', '');
});

var notLastName = $('#errorLastName').hide();
var notFirstName = $('#errorFirstName').hide();
var notDateOfBirth = $('#errorDateOfBirth').hide();
var notCityOfBirth = $('#errorCityOfBirth').hide();
var notWork = $('#errorWork').hide();
var notBusiness = $('#errorBusiness').hide();
//Régex de vérif lastName, firstName
var regexText = /^[a-zA-âäàéèêëùûüôö\-'\s]+$/;
//Régex de vérif phoneNumber
var regexPhone = /^(0|\+33)[1-9][0-9]{8}$/;
//Régex de vérif mail
var regexMail = /^[a-z0-9]+[@][a-z]+[\.][a-z]{1,3}$/;
var regexDate = /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/;
$('#button').click(function() {
  //Récupération des valeur de champs du formulaire
  var lastName = $('#lastName').val();
  var firstName = $('#firstName').val();
  var dateOfBirth = $('#dateOfBirth').val();
  var cityOfBirth = $('#cityOfBirth').val();
  var work = $('#work').val();
  var business = $('#business').val();
  console.log(lastName, firstName, dateOfBirth, cityOfBirth, work, business);
  //Condition de validation lastName et firstName
  if (!regexText.test(lastName)) {
    $(notLastName).fadeIn(1000);
    $('#lastName').css('border', '1px solid red');
  }
  if (!regexText.test(firstName)) {
    $(notFirstName).fadeIn(1000);
    $('#firstName').css('border', '1px solid red');
  }
    if (!regexDate.test(dateOfBirth)) {
    $(dateOfBirth).fadeIn(1000);
    $('#dateOfBirth').css('border', '1px solid red');
  }
  //Condition de validation de city
  if (!regexText.test(cityOfBirth)) {
    $(notCityOfBirth).fadeIn(1000);
    $('#cityOfBirth').css('border', '1px solid red');
  }
  //Condition de validation de work et business
  if (!regexText.test(work)) {
    $(notWork).fadeIn(1000);
    $('#work').css('border', '1px solid red');
  }
  if (!regexText.test(business)) {
    $(notBusiness).fadeIn(1000);
    $('#business').css('border', '1px solid red');
  }
  //avec le else afficher le texte si toute les conditions sont bonne
  if (!regexText.test(lastName && firstName && dateOfBirth && cityOfBirth && work && business)){

  } else {
    alert('Bonjour ' + firstName + ' ' + lastName + ',' + ' né(e) le  ' + dateOfBirth + ' à ' + cityOfBirth + ',' + ' actuellement ' + work + ' à ' +  business)
  }
});
//cacher 'error' lastName une fois le click dans le champ
$('#lastName').click(function() {
  var notLastName = $('#errorLastName').hide();
  $('#lastName').css('border', '');
});
//cacher 'error' firstName une fois le click dans le champ
$('#firstName').click(function() {
  var notFirstName = $('#errorFirstName').hide();
  $('#firstName').css('border', '');
});
$('#dateOfBirth').click(function() {
  var notCityOfBirth = $('#errorDateOfBirth').hide();
  $('#dateOfBirth').css('border', '');
});
//cacher 'error' cityOfBirth une fois le click dans le champ
$('#cityOfBirth').click(function() {
  var notCityOfBirth = $('#errorCityOfBirth').hide();
  $('#cityOfBirth').css('border', '');
});
//cacher 'error' phoneNumber une fois le click dans le champ
$('#work').click(function() {
  var notPhoneNumber = $('#errorWork').hide();
  $('#work').css('border', '');
});
//cacher 'error' business une fois le click dans le champ
$('#business').click(function() {
  var notPhoneNumber = $('#errorBusiness').hide();
  $('#business').css('border', '');
});

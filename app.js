'use strict';

var visitorName = prompt('Hello! What is your name?');
alert('Hello, ' + visitorName + '!' + ' Welcome to my website!')
console.log(visitorName);

var bethBirth = prompt('Did I grow up in the US?');
bethBirth = bethBirth.toLowerCase();

if (bethBirth === 'no' || bethBirth === 'n') {
  alert('That is correct!');
  console.log('That is correct!');
} else {
  alert('Not quite!');
  console.log('Not quite!');
}

var bethUni = prompt('Did I go to University in the US?');
bethUni = bethUni.toLowerCase();

if (bethUni === 'yes' || bethUni === 'y') {
  alert('That is correct!');
  console.log('Correct!'); 
} else {
  alert('Not quite!')
  console.log('Not quite!');
}

var bethPets = prompt('Do I have dogs?');
bethPets = bethPets.toLowerCase();

if(bethPets === 'no' || bethPets === 'n') {
   alert('That is correct!')
    console.log('That is correct!');
} else {
alert('Not quite!')
console.log('Not quite!');
}

var bethWork = prompt('Have I worked as a nanny?');
bethWork = bethWork.toLowerCase();

if(bethWork === 'yes' || bethWork === 'y') {
   alert('That is correct!')
    console.log('That is correct!');
} else {
alert('Not quite!')
console.log('Not quite!');
}

var bethCountry = prompt('Have I lived in more than one country?');
bethCountry = bethCountry.toLowerCase();

if(bethCountry === 'yes' || bethCountry === 'y') {
   alert('That is correct!')
    console.log('That is correct!');
} else {
alert('Not quite!')
console.log('Not quite!');
}
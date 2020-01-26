//Start of scripts for password gen in index.html

//Updates slider counter for password settings modal
function updateSliderCount() {
  document.getElementById("passLenCount").innerHTML = document.getElementById("formControlRange").value
}

//Returns bool if special is checked
hasSpecial = () => document.getElementById("special").checked

//Returns bool if upper is checked
hasUpper = () => document.getElementById("upper").checked

//Returns bool if number is checked
hasNumber = () => document.getElementById("numbers").checked

//Returns bool if lower is checked
hasLower = () => document.getElementById("lower").checked

//Validates if at least ONE checkbox is checked
isValid = () => hasSpecial() || hasUpper() || hasNumber() || hasLower()

//Clears inputs
function clearForm() {
  document.getElementById("special").checked = false
  document.getElementById("upper").checked = false
  document.getElementById("numbers").checked = false
  document.getElementById("lower").checked = false
  document.getElementById("passLenCount").innerHTML = "8"
  document.getElementById("formControlRange").value = "8"
}

//generates random password
function generatePassword() {
  let choices = addPossibleChoices()
  let passwordLength = parseInt(document.getElementById("formControlRange").value)
  choices = shuffleChoices(choices)
  let pass = makeMinReqString(choices)
  for(let i = 0; i < passwordLength-choices.length; i++) {
    let ran = Math.floor(Math.random()*choices.length)
    let c = getCharacter(choices[ran])
    pass += c
  }
  document.getElementById('password').innerHTML = pass
}

document.getElementById("generateBtn").addEventListener("click", function () {

  if (isValid()) {
    $('#exampleModal').modal('hide')
    setTimeout(function() {
      clearForm()
    }, 1000)
    generatePassword()
  } else {
    document.getElementById("warning").innerHTML = "Please select one"
  }
})
document.getElementById("passLenCount").innerHTML = "8"
document.getElementById("formControlRange").addEventListener("input", updateSliderCount)

//Enums for character choices
const characterChoices = {
  SPECIAL: "special",
  NUMBER: "number",
  LOWERCASE: "lowercase",
  UPPERCASE: "uppercase",
}

//Gets character choices
function addPossibleChoices() {
  let choices = []
  if (hasLower()) {
    choices.push(characterChoices.LOWERCASE)
  }
  if (hasNumber()) {
    choices.push(characterChoices.NUMBER)
  }
  if (hasUpper()) {
    choices.push(characterChoices.UPPERCASE)
  }
  if (hasSpecial()) {
    choices.push(characterChoices.SPECIAL)
  }
  return choices
}

//Get special character
//Range for special characters:
//33-47, 58-64, 91-96, 123-126
function getSpecialCharacter() {
  let rangeSelector = Math.floor(Math.random() * 4)
  if (rangeSelector === 0) {
    let range = 47 - 33;
    return String.fromCharCode((Math.floor(Math.random() * range)) + 34)
  } else if (rangeSelector === 1) {
    let range = 64 - 58;
    return String.fromCharCode((Math.floor(Math.random() * range)) + 59)
  } else if (rangeSelector === 2) {
    let range = 95 - 91;
    return String.fromCharCode((Math.floor(Math.random() * range)) + 92)
  } else if (rangeSelector === 3) {
    let range = 126 - 123;
    return String.fromCharCode((Math.floor(Math.random() * range)) + 124)
  }
}

//Get number character
getNumberCharacter = () => Math.floor(Math.random() * 10)

//Get lowercase character
//Range for lowercase letters:
//97-122
getLowercaseCharacter = () => String.fromCharCode((Math.floor(Math.random() * 26)) + 97)

//Get uppercase character
//Range for uppercase letters:
//65-90
getUppercaseCharacter = () => String.fromCharCode((Math.floor(Math.random() * 26)) + 65)

//Shuffles choices array
function shuffleChoices(choices) {
  for (let i = choices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    //ES6 standard for swapping elements, removes temp variable
    [choices[i], choices[j]] = [choices[j], choices[i]];
  }
  return choices;
}

//Gets the character based on choice
function getCharacter(choice) {
  if (choice === characterChoices.LOWERCASE) {
    return getLowercaseCharacter()
  } else if (choice === characterChoices.NUMBER) {
    return getNumberCharacter()
  } else if (choice === characterChoices.SPECIAL) {
    return getSpecialCharacter()
  } else if (choice === characterChoices.UPPERCASE) {
    return getUppercaseCharacter()
  } else {
    return "herehere"
  }
}

//Makes a string of length 1 to 4 which contains base choice
function makeMinReqString(choices) {
  let s = ""
  for(let i = 0; i < choices.length; i++) {
    s += getCharacter(choices[i])
  }
  return s
}
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
  console.log("Password")
}
document.getElementById("generateBtn").addEventListener("click", function() {

  if (isValid()) {
    $('#exampleModal').modal('hide')
    generatePassword()
  } else {
    document.getElementById("warning").innerHTML ="Please select one"
  }
})
document.getElementById("passLenCount").innerHTML = "8"
document.getElementById("formControlRange").addEventListener("input", updateSliderCount)

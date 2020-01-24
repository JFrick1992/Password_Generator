function updateSliderCount() {
  document.getElementById("passLenCount").innerHTML = document.getElementById("formControlRange").value
}
document.getElementById("passLenCount").innerHTML = "8"
document.getElementById("formControlRange").addEventListener("input", updateSliderCount)

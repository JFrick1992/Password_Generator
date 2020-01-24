function updateSliderCount() {
  document.getElementById("passLenCount").innerHTML = document.getElementById("formControlRange").value
}
document.getElementById("generateBtn").addEventListener("click", function() {
  console.log("hello")
  $('#exampleModal').modal('hide')
})
document.getElementById("passLenCount").innerHTML = "8"
document.getElementById("formControlRange").addEventListener("input", updateSliderCount)

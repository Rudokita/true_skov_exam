// This is to toggle the additional info
function toggleButton(buttonNumber) {
  switch (buttonNumber) {
    case 1:
      document.getElementById("info-1").style.display = "none";
      document.getElementById("text-info-1").style.display = "block";
      break;
    case 2:
      document.getElementById("info-2").style.display = "none";
      document.getElementById("text-info-2").style.display = "block";
      break;
    case 3:
      document.getElementById("info-3").style.display = "none";
      document.getElementById("text-info-3").style.display = "block";
      break;
    case 4:
      document.getElementById("info-4").style.display = "none";
      document.getElementById("text-info-4").style.display = "block";
      break;
    case 5:
      document.getElementById("info-5").style.display = "none";
      document.getElementById("text-info-5").style.display = "block";
      break;
  }
}
// This is to toggle the additional info away.
function toggleButtonOff(buttonNumber) {
  switch (buttonNumber) {
    case 1:
      document.getElementById("info-1").style.display = "block";
      document.getElementById("text-info-1").style.display = "none";
      break;
    case 2:
      document.getElementById("info-2").style.display = "block";
      document.getElementById("text-info-2").style.display = "none";
      break;
    case 3:
      document.getElementById("info-3").style.display = "block";
      document.getElementById("text-info-3").style.display = "none";
      break;
    case 4:
      document.getElementById("info-4").style.display = "block";
      document.getElementById("text-info-4").style.display = "none";
      break;
    case 5:
      document.getElementById("info-5").style.display = "block";
      document.getElementById("text-info-5").style.display = "none";
      break;
  }
}

// This makes clicking on buttons run the function above.
document
  .getElementById("read-more-1")
  .addEventListener("click", () => toggleButton(1));
document
  .getElementById("back-1")
  .addEventListener("click", () => toggleButtonOff(1));

document
  .getElementById("read-more-2")
  .addEventListener("click", () => toggleButton(2));
document
  .getElementById("back-2")
  .addEventListener("click", () => toggleButtonOff(2));

document
  .getElementById("read-more-3")
  .addEventListener("click", () => toggleButton(3));
document
  .getElementById("back-3")
  .addEventListener("click", () => toggleButtonOff(3));

document
  .getElementById("read-more-4")
  .addEventListener("click", () => toggleButton(4));
document
  .getElementById("back-4")
  .addEventListener("click", () => toggleButtonOff(4));

document
  .getElementById("read-more-5")
  .addEventListener("click", () => toggleButton(5));
document
  .getElementById("back-5")
  .addEventListener("click", () => toggleButtonOff(5));

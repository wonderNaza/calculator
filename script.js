let displayScreen = document.querySelector(".item1");

function display(val) {
  displayScreen.value += val;
  return val;
}
function solve() {
  let storageContainer = displayScreen.value;
  let operationsCal = eval(storageContainer);
  displayScreen.value = operationsCal;
  return operationsCal;
}
function clearScreen() {
  displayScreen.value = "";
}

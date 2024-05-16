function calculateTip() {
  const billAmount = document.getElementById("bill").value;
  const tipPercentage = document.getElementById("tip").value;

  const tip = (billAmount * tipPercentage) / 100;

  document.getElementById("total").innerText = `${tip.toFixed(2)}`;
}

const inputElement = document.getElementById("btn");

inputElement.addEventListener("keydown", (event) => {
  if (event.key === 13) {
    calculateTip();
  }
});

document.getElementById("total").innerText = "0.00";

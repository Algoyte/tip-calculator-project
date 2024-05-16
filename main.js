function calculateTip() {
  const billAmount = document.getElementById("bill").value;
  const tipPercentage = document.getElementById("tip").value;

  const tip = (billAmount * tipPercentage) / 100;

  document.getElementById("total").innerText = `${tip.toFixed(2)}`;
}

document.getElementById("total").innerText = "0.00";

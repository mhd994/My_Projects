function calculate() {
  const length = parseFloat(document.getElementById('length').value);
  const width = parseFloat(document.getElementById('width').value);
  const meter = parseFloat(document.getElementById('meter').value);

  if (isNaN(length) || isNaN(width) || isNaN(meter)) {
    alert("Please fill in all fields correctly.");
    return;
  }

  const area = length * width;
  const price = area * meter;

  document.getElementById('areaResult').textContent = `Your total area is: ${area.toFixed(2)} m²`;
  document.getElementById('priceResult').textContent = `Give the guy ${price.toFixed(2)}$`;
}

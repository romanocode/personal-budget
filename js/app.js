let saldo = 0;
let totalIngresos = 0;
let totalEgresos = 0;

const saldoEl = document.getElementById("saldo");
const ingresosEl = document.getElementById("total-ingresos");
const egresosEl = document.getElementById("total-egresos");
const listaTransacciones = document.getElementById("lista-transacciones");

document.getElementById("transaction-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const tipo = document.getElementById("type").value;
  const descripcion = document.getElementById("description").value.trim();
  const cantidad = parseFloat(document.getElementById("amount").value);

  if (descripcion === "" || isNaN(cantidad) || cantidad <= 0) {
    alert("Por favor ingresa una descripción y cantidad válida.");
    return;
  }

  if (tipo === "ingreso") {
    saldo += cantidad;
    totalIngresos += cantidad;
  } else {
    saldo -= cantidad;
    totalEgresos += cantidad;
  }

  actualizarResumen();

  const li = document.createElement("li");
  li.classList.add(tipo);
  li.textContent = `${tipo === "ingreso" ? "Ingreso" : "Egreso"}: ${descripcion} - $${cantidad.toFixed(2)}`;
  listaTransacciones.appendChild(li);

  document.getElementById("transaction-form").reset();
});

function actualizarResumen() {
  saldoEl.textContent = saldo.toFixed(2);
  ingresosEl.textContent = totalIngresos.toFixed(2);
  egresosEl.textContent = totalEgresos.toFixed(2);
}

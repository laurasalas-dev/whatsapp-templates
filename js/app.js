const form = document.querySelector("#financial-form");
const tipo = document.querySelector("#transaction-type");
const detalle = document.querySelector("#transaction-detail");
const monto = document.querySelector("#transaction-amount");
const tabla = document.querySelector("#transaction-table tbody");
const ingresos = document.querySelector("#total-ingresos");
const gastos = document.querySelector("#total-gastos");
const balance = document.querySelector("#balance");

let transacciones = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!/^[a-zA-Z\s]+$/.test(detalle.value)) {
        alert("El detalle solo debe tener letras");
        return;
    }

    if (monto.value <= 0) {
        alert("Monto inválido");
        return;
    }

    const transaccion = {
        id: transacciones.length + 1,
        tipo: tipo.value,
        detalle: detalle.value,
        monto: parseFloat(monto.value)
    };

    transacciones.push(transaccion);
    mostrarTabla();
    actualizarResumen();
    form.reset();
});

function mostrarTabla() {
    tabla.innerHTML = "";
    transacciones.forEach((t) => {
        const fila = `
      <tr>
        <td>${t.id}</td>
        <td>${t.tipo}</td>
        <td>${t.detalle}</td>
        <td>${t.monto}</td>
        <td><button onclick="eliminar(${t.id})">Eliminar</button></td>
      </tr>
    `;
        tabla.innerHTML += fila;
    });
}

function actualizarResumen() {
    let totalIngresos = transacciones.filter(t => t.tipo === "Ingreso").reduce((sum, t) => sum + t.monto, 0);
    let totalGastos = transacciones.filter(t => t.tipo === "Gasto").reduce((sum, t) => sum + t.monto, 0);

    ingresos.textContent = totalIngresos;
    gastos.textContent = totalGastos;
    balance.textContent = totalIngresos - totalGastos;
}

function eliminar(id) {
    transacciones = transacciones.filter(t => t.id !== id);
    transacciones.forEach((t, index) => t.id = index + 1);
    mostrarTabla();
    actualizarResumen();
}
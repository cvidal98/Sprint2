const pagos = [];
const usuarios = [];
const listado = document.getElementById("list-group");
const resultado = document.getElementById("total");
const usuario = document.getElementById("nombre");
const pago = document.getElementById("pago");

function repartir() {
  agregarGastosAListas();
  ultimoPantalla();
  mostrarPagoIndividualEnHtml();
}
function agregarGastosAListas() {
  usuarios.push(usuario.value);
  pagos.push(pago.value);
}
function ultimoPantalla() {
  const li = document.createElement("li");
  const text = document.createTextNode(`${usuario.value}: Pagó $${pago.value}`);
  li.classList.add("list-group-item");
  li.appendChild(text); //meto text en li//
  listado.appendChild(li);
}
function sumarValores(pagos) {
  let suma = 0;
  for (let index = 0; index < pagos.length; index++) {
    const element = pagos[index];
    suma = suma + Number(element);
  }
  return suma;
}

function mostrarPagoIndividualEnHtml() {
  const total = sumarValores(pagos);
  const aporteIndividual = total / usuarios.length;
  resultado.innerText = `Total: ${total}
                          A cada uno le toca pagar: ${aporteIndividual}`;
}

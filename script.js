//Valores const no cambian
const campoCelsius = document.getElementById("celsius");
const botonConvertir = document.getElementById("convertir");
const mensaje = document.getElementById("mensaje");
const resultados = document.getElementById("resultados");

botonConvertir.addEventListener("click", convertirTemperatura);

function convertirTemperatura() {
  const texto = campoCelsius.value.trim();
  const celsius = Number(texto.replace(",", "."));

  if (texto === "" || !Number.isFinite(celsius)) {
    mensaje.textContent = "Error: ingresa un número válido e inténtalo de nuevo.";
    mensaje.classList.add("error");
    resultados.hidden = true;
    campoCelsius.focus();
    return;
  }

  const kelvin = celsius + 273.15;
  const fahrenheit = (celsius * 9) / 5 + 32;

  document.getElementById("kelvin").textContent =
    Number(kelvin.toFixed(2)).toString();

  document.getElementById("fahrenheit").textContent =
    Number(fahrenheit.toFixed(2)).toString();

  mensaje.textContent = "Conversión realizada correctamente.";
  mensaje.classList.remove("error");
  resultados.hidden = false;
}

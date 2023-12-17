const btn = document.getElementById('btn');
const monto = document.getElementById('monto');
const moneda = document.getElementById('moneda');
const resultadoElement = document.getElementById('resultado');

const cambioMoneda = async (montoValue, monedaValue) => {
    try {
        const api = `https://mindicador.cl/api/${monedaValue}`;
        const res = await fetch(api);
        const data = await res.json();

        const conversion = data.serie[0].valor;

        const resultado = montoValue / conversion;
        return resultado.toLocaleString();

    } catch (error) {
        alert('Ha ocurrido un error');
    }
}


btn.addEventListener('click', async () => {
    const montoValue = monto.value;
    const monedaValue = moneda.value;

    const resultadoCambio = await cambioMoneda(montoValue, monedaValue);

    resultadoElement.textContent = resultadoCambio;
});

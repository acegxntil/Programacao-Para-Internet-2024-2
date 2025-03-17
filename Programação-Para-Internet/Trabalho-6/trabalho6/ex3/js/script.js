const alturaInput = document.getElementById('altura');
const sexoSelect = document.getElementById('sexo');
const calcularBtn = document.getElementById('calcular');
const resultadoDiv = document.getElementById('resultado');
const erroAlturaDiv = document.getElementById('erro-altura');

function calcularPesoIdeal() {
    erroAlturaDiv.style.display = 'none';
    
    let altura = parseInt(alturaInput.value);
    
    if (isNaN(altura) || altura < 100 || altura > 250) {
        erroAlturaDiv.style.display = 'block';
        resultadoDiv.style.display = 'none';
        return;
    }
    
    let sexo = sexoSelect.value;
    
    let pesoIdeal;
    if (sexo === 'masculino') {
        pesoIdeal = 52 + (0.75 * (altura - 152.4));
    } else {
        pesoIdeal = 52 + (0.67 * (altura - 152.4));
    }
    
    pesoIdeal = pesoIdeal.toFixed(2);
    
    resultadoDiv.innerHTML = `Seu peso ideal é <strong>${pesoIdeal} kg</strong> para uma pessoa do sexo ${sexo} com altura de ${altura} cm.`;
    resultadoDiv.style.display = 'block';
    resultadoDiv.className = 'success';
}

calcularBtn.addEventListener('click', calcularPesoIdeal);

alturaInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        calcularPesoIdeal();
    }
});
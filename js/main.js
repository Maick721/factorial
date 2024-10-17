function factorial(n) {
    //Este mensaje se dara cuando sea un número negativo
    if (n < 0) {
        return "No está definido para números negativos.";
    }

    //Nos dice que n es igual que 0 y 1 y que nos retorna si se
    //cumple esto nos devuelve la función de 1
    if (n === 0 || n === 1) {
        return 1;
    }

    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

// Conectar el evento del botón
document.getElementById('calcular').addEventListener('click', function () {
    const numero = parseInt(document.getElementById('numero').value);
    const resultado = factorial(numero);
    document.getElementById('resultado').innerText = `El factorial de ${numero} es ${resultado}`;
}
);
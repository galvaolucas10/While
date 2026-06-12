let numero = 10; 

if (numero > 0) {
    console.log("Positivo");
}else if (numero < 0) {
    console.log("Negativo");
} else {
    console.log("Zero");
}

function ParOuImpar(valor) {
    const numero = Number(valor);

     if (numero % 2 === 0) {
        return `é PAR.`;
    } else {
        return `é ÍMPAR.`;
    }
}

console.log(ParOuImpar(18));
console.log(ParOuImpar(7));


function media(valor1, valor2) {
    return (valor1 + valor2) / 2;
}

const resultado = media(10, 20);
console.log(resultado); 
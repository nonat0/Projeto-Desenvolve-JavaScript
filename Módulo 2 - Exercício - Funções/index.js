function soma_ab(a, b){
    return a+b;
}

function diferenca_ab(a, b){
    return a-b;
}

function produto_ab(a, b){
    return a*b;
}

function quociente_ab(a, b){
    return a/b;
}

function mostraResultado(num1, num2){
    console.log(`soma de ${num1} com ${num2} =`, soma_ab(num1, num2));
    console.log(`subtração de ${num1} por ${num2} =`, diferenca_ab(num1, num2));
    console.log(`produto de ${num1} com ${num2} =`, produto_ab(num1, num2));
    console.log(`quociente de ${num1} por ${num2} =`, quociente_ab(num1, num2));
}

mostraResultado(1, 2);
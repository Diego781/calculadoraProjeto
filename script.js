    let n1 = window.document.getElementById('txtn1')
    let n2 = window.document.getElementById('txtn2')
    let res = window.document.getElementById('res')
    
    function somar(){
        let num1 = Number(n1.value)
        let num2 = Number(n2.value)    
        let soma = num1+num2
        res.innerHTML = `A soma dos dois números é igual a ${soma}`
}
function subtrair(){
    let num1 = Number(n1.value)
    let num2 = Number(n2.value)
    let subtracao = num1 - num2
    res.innerHTML = `A subtração dos dois números é igual a ${subtracao}`
}function dividir(){
    let num1 = Number(n1.value)
    let num2 = Number(n2.value)
    let divisao = num1/num2
    res.innerHTML = `A multiplicação dos dois números é igual a ${divisao}`
    
}function multiplicar(){
    let num1 = Number(n1.value)
    let num2 = Number(n2.value)
    let multiplicacao = num1*num2
    res.innerHTML = `A multiplicação dos dois números é igual a ${multiplicacao}`
}
        

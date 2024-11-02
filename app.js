let titulo = document.querySelector("h1")

let cidade  = "Canoinhas"

titulo.textContent = "Hora do Desafio"

function clickButtonConsole(){
    console.log('O Botão foi clicado')
}

function clickButtonAlert(){
    alert("Eu amo JS")
}

function clickButtonPrompt(){
    prompt(`Estive em ${cidade} e lembrei de você`)
}

function clickSumTwooValues(){
    alert("Por favor, insira dois valor:");

    let valor1 = prompt("Valor 1:");
    let valor2 = prompt("Valor 2:");
    
    let soma = Number(valor1) + Number(valor2);


    alert("A Soma dos dois numeros é: " + soma)
}
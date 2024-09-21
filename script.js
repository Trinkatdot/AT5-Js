function cadastroPrestadores() {
    let continuar = true;
    let contador = 0;
    let funcionarios = [];
    
    do {
        let prestador = {};
        let nome = prompt("Informe o nome completo:");
        while (!isNaN(nome) || nome.trim().split(" ").length < 2 || nome.length < 3) {
            nome = prompt("Informe o Nome novamente (deve conter pelo menos um espaço):");
        }

        let pisPasep = prompt("Informe o seu PIS ou PASEP:");
        while (isNaN(pisPasep) || pisPasep.trim() === "" || pisPasep.length !== 11) {
            pisPasep = prompt("Informe o seu PIS ou PASEP novamente (deve ter 11 dígitos):");
        }

        let quantashoras = prompt("Informe as quantashoras trabalhadas (entre 20 e 200):");
        while (isNaN(quantashoras) || (parseInt(quantashoras) < 20 || parseInt(quantashoras) > 200)) {
            quantashoras = prompt("Informe as quantashoras novamente:");
        }
        
        let valorHora = prompt("Informe o valor da hora (entre R$20,00 e R$500,00):");
        while (isNaN(valorHora) || (parseFloat(valorHora) < 20 || parseFloat(valorHora) > 500)) {
            valorHora = prompt("Informe o valor da hora novamente:");
        }

        prestador["nome"] = nome;
        prestador["pispasep"] = pisPasep;
        prestador["quantashoras"] = parseInt(quantashoras);
        prestador["valorhoras"] = parseFloat(valorHora);

        funcionarios.push(prestador);
        contador++;

        if (contador < 5) {
            continuar = true;
        } else if (contador >= 5 && contador < 50) {
            continuar = confirm("Deseja continuar o cadastro?");
        } else {
            continuar = false;
        }

    } while (continuar);     quantashoras 

    return funcionarios;
}

function exibirEmpreguetes(listarfuncionario) {
    let mensagem = "";
    for (let i = 0; i < listarfuncionario.length; i++) {
        let emp = listarfuncionario[i];
        mensagem += `
            Nome: ${emp["nome"]} <br/>
            Pis/Pasep: ${emp["pispasep"]}  <br/>
            Quantas Horas: ${emp["quantashoras"]} <br/>
            Valor da Hora: R$ ${emp["valorhoras"].toFixed(2)} <br/>
            <br/><br/>
        `;
    }
    document.write(mensagem);
}

// Chame a função de cadastro e exiba os dados
let lista = cadastroPrestadores();
exibirEmpreguetes(lista);

console.log(lista);

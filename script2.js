function cadastraFuncionarios() {
    let funcionarios = [];
    let continuar = true;

    while (continuar) {
        if (funcionarios.length >= 100) {
            alert("Limite máximo de 100 funcionários alcançado.");
            break;
        }

        let nomeSobrenome;
        let idade;
        let salario;

        // Cadastro do nome e sobrenome
        while (true) {
            nomeSobrenome = prompt("Informe o nome e sobrenome:");
            if (nomeSobrenome && isNaN(nomeSobrenome) && nomeSobrenome.trim().includes(' ')) {
                break;
            } else {
                alert("Você deve inserir um nome e um sobrenome. Tente novamente.");
            }
        }

        // Cadastro da idade
        while (true) {
            idade = prompt(`Informe a idade de ${nomeSobrenome}:`);
            if (!isNaN(idade) && idade >= 15 && idade <= 119) {
                idade = parseInt(idade); // Converte para inteiro
                break;
            } else {
                alert("Você deve inserir uma idade válida entre 15 e 119 anos. Tente novamente.");
            }
        }

        // Cadastro do salário
        while (true) {
            salario = prompt(`Informe o salário de ${nomeSobrenome}:`);
            if (salario && !isNaN(salario) && salario >= 2000 && salario <= 20000) {
                salario = parseFloat(salario); // Converte para float
                break;
            } else {
                alert("Você deve inserir um salário válido entre R$ 2.000,00 e R$ 20.000,00. Tente novamente.");
            }
        }

        funcionarios.push({
            nome: nomeSobrenome,
            idade: idade,
            salario: salario
        });

        // Verifica se é necessário continuar
        if (funcionarios.length < 5) {
            continuar = true; // Continua até ter 5 funcionários
        } else if (funcionarios.length < 100) {
            continuar = confirm(`Você já cadastrou ${funcionarios.length} funcionários. Deseja cadastrar mais?`);
        } else {
            continuar = false; // Para se já tiver 100 funcionários
        }
    }

    return funcionarios;
}

function exibirFuncionarios(funcionarios) {
    document.write("<h2>Funcionários Cadastrados:</h2>");
    document.write("<ul>");
    funcionarios.forEach(funcionario => {
        document.write(`<li>${funcionario.nome}, Idade: ${funcionario.idade}, Salário: R$ ${funcionario.salario.toFixed(2)}</li>`);
    });
    document.write("</ul>");
}


function exibirEmpreguetes(listaEmpregados) {

    let mensagem = "";
    for (let i = 0; i < listaEmpregados.length; i++) {
        let emp = listaEmpregados[i];
        mensagem += `
            Nome: ${emp["nome"]} <br/>
            Idade: ${emp["idade"]} anos <br/>
            Salário: R$ ${parseFloat(emp["salario"]).toFixed(2)} <br/>
            <br/><br/>
        `;
    }
    document.write(mensagem);
}





let funcionarios = cadastraFuncionarios();
if (funcionarios.length >= 5) {
    exibirFuncionarios(funcionarios);
} else {
    alert("Você deve cadastrar pelo menos 5 funcionários.");
}

/*Ex1: Crie um sistema de cadastro de funcionários usando funções 
onde devem ser lidos os nomes, idades e salários de até 100 pessoas considerando os seguintes critérios: 
Considere que o usuário não pode informar conteúdo vazio.
Nomes completos válidos (nome e sobrenome). 
Idades válidas e maiores de 14 anos e menores de 120 anos.
Os salários informados devem ser válidos e não podem ser inferiores a R$ 2000,00 e acima de 20000,00. 
Deve-se cadastrar no mínimo 5 pessoas.
Exiba todos os cadastrados na página HTML.*/


function lerNomesIdadesSalarios() {

    let continuar = true;
    let contador = 0;
    let empregados = [];
    do {
        let empregado = [];
        contador++;
        let nome = prompt("Informe o Nome:");
        nome = nome.trim();
        //Entra em Numeros e Nomes de 2 letras pra baixo
        while (isNaN(nome) === false || nome.indexOf(" ") < 3) {
            nome = prompt("Informe o Nome novamente:");
        }

        let idade = prompt("Informe a Idade:");
        while (isNaN(idade) === true || (parseInt(idade) < 15 || parseInt(idade) > 119)) {
            idade = prompt("Informe o Idade novamente:");
        }

        let salario = prompt("Informe o Salário");
        while (isNaN(salario) === true || (parseFloat(salario) < 2000 || parseFloat(salario) > 20000)) {
            salario = prompt("Informe o Salário novamente:");
        }

        empregado["nome"] = nome;
        empregado["idade"] = parseInt(idade);
        empregado["salario"] = parseFloat(salario);

        empregados.push(empregado);

        if (contador < 5)
            continuar = true;
        else if (contador >= 5 && contador < 100)
            continuar = confirm("Deseja continuar o cadastro?");
        else
            continuar = false;


    } while (continuar === true);

    return empregados;

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

let lista = lerNomesIdadesSalarios();
exibirEmpreguetes(lista);

console.log(lista);
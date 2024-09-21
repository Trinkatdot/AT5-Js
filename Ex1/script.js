/*clie um algoritimo de pagamento em que se cadastre os prestadores de serviço, pegando os 
seguintes dados de minimo 5 a 50 pessoas no maximo: 
x-nome completo 
x-um numero do PIS/PASEP
x-quantidade de quantashoras  no min 20 e max 200
x-valor da hora trabalhada no min 20 e max 500.
e mostre os seguintes dados: 
-dados cadastrados do prestador
-valor burto do serviço
-liquido descontado na pagina HTML dos cadastrados.
descontos: INSS, INSS5%, IR*/



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

        let quantashoras = prompt("Informe as quantashoras  trabalhadas (entre 20 e 200):");
        while (isNaN(quantashoras) === true || (parseInt(quantashoras) < 20 || parseInt(quantashoras) > 200)) {
            quantashoras = prompt("Informe as quantashoras  novamente:");
        }
        let valorHora = prompt("Informe o valor da hora (entre R$20,00 a 500,00");
        while (isNaN(valorHora) === true || (parseFloat(valorHora) < 20 || parseFloat(valorHora) > 500)) {
            valorHora = prompt("Informe o valor da hora novamente:");
        }

        prestador["nome"] = nome;
        prestador["pispasep"] = pisPasep;
        prestador["quantashoras"] = parseInt(quantashoras);
        prestador["valorhoras"] = parseFloat(valorHora);
        //valorbruto
        let valorBruto = prestador.quantashoras * prestador.valorhoras;
        //valores Inss
        let inss;
        if (valorBruto <= 1500.99) {
            inss = 0.075; 
        } else if (valorBruto <= 3000.99) {
            inss = 0.09;  
        } else if (valorBruto <= 5000.99) {
            inss = 0.12;  
        } else {
            inss = 0.14;  
        }
        inss = valorBruto * inss;

        // Cálculo do IRPF
        let irpf;
        if (valorBruto <= 1500.99) {
            irpf = 0.0;
        } else if (valorBruto <= 2000.99) {
            irpf = 0.075; 
        } else if (valorBruto <= 3000.99) {
            irpf = 0.15;  
        } else if (valorBruto <= 4000.99) {
            irpf = 0.225; 
        } else {
            irpf = 0.275; 
        }
        irpf = valorBruto * irpf;

       
        // Cálculo do valor líquido
        let valorLiquido = valorBruto - (inss + irpf);
        prestador["valorBruto"] = valorBruto;
        prestador["inss"] = inss;
        prestador["irpf"] = parseFloat(irpf);
        prestador["valorliquido"] = parseFloat(valorLiquido);

        funcionarios.push(prestador);
        contador++;

        if (contador < 2)
            continuar = true; 
        else if (contador < 50)
            continuar = confirm("Deseja continuar o cadastro?");
        else {
            continuar = false;
        }

    } while (continuar);    

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
            Valor da Hora: R$ ${emp["valorhoras"]} <br/>
            Valor Bruto: R$ ${emp["inss"]} <br/>
            INSS: R$ ${emp["inss"]} <br/>
            IRPF: R$ ${emp["irpf"]} <br/>
            Valor Líquido: R$ ${emp["valorLiquido"]} <br/>
            <br/><br/>
        `;
    }
    document.write(mensagem);
}

let lista = cadastroPrestadores();
exibirEmpreguetes(lista);

console.log(lista);


//socorro! 
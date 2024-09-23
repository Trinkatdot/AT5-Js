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

    //inicia variáveis para contador, e array para quardar funcionarios totais.

    let continuar = true;
    let contador = 0;
    let funcionarios = [];
    
    do { 
        
        //inicia loop para entradas dos dados

        let prestador = {}; //define objeto que sera gardado depois
        let nome = prompt("Informe o nome completo:");
        while (!isNaN(nome) || nome.trim().split(" ").length < 2 || nome.length < 3) {
            nome = prompt("Informe o Nome novamente (deve conter pelo menos um espaço):");
            //trim() remove os espaços em branco do início e do fim 
            //split() do divide uma string em substrings e as retorna em um array
        }

        let pisPasep = prompt("Informe o seu PIS ou PASEP:");
        while (isNaN(pisPasep) || pisPasep.trim() === " " || pisPasep.length !== 11) {
            pisPasep = prompt("Informe o seu PIS ou PASEP novamente (deve ter 11 numeros!):");
        }

        let quantashoras = prompt("Informe as quantashoras  trabalhadas (entre 20 e 200):");
        while (isNaN(quantashoras) === true || (parseInt(quantashoras) < 20 || parseInt(quantashoras) > 200)) {
            quantashoras = prompt("Informe as quantashoras  novamente:");
        }
        let valorHora = prompt("Informe o valor da hora (entre R$20,00 a 500,00)");
        while (isNaN(valorHora) === true || (parseFloat(valorHora) < 20 || parseFloat(valorHora) > 500)) {
            valorHora = prompt("Informe o valor da hora novamente:");
        }

        //armazena os dados informados no prompt
        prestador["nome"] = nome;
        prestador["pispasep"] = pisPasep;
        prestador["quantashoras"] = parseInt(quantashoras);
        prestador["valorhoras"] = parseFloat(valorHora);

        //faz a conta do valor bruto do funcionario
        let valorBruto = prestador.quantashoras * prestador.valorhoras;
        //tabela do Inss
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
        //faz o calculo do desconto inss sobre o bruto do prestador.
        inss = valorBruto * inss;

        // tabela do IRPF
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
         //faz o calculo do desconto irpf sobre o bruto do prestador.
        irpf = valorBruto * irpf;

       
        // Cálculo do valor líquido com desconto de inss e irpf
        let valorliquido = valorBruto - (inss + irpf);
        
        //guarda as informaçoes de valores de cada prestador.
        prestador["valorBruto"] = valorBruto.toFixed(2);
        prestador["inss"] = inss.toFixed(2);
        prestador["irpf"] = parseFloat(irpf.toFixed(2));
        prestador["valorliquido"] = parseFloat(valorliquido.toFixed(2));

        //guarda informaçoes de valores no array de todos os funcionairios.
        funcionarios.push(prestador);

        //verificalçao de quer continuar: deixei 2 para teste rapido
        contador++;

        if (contador < 2)
            continuar = true; 
        else if (contador < 50)
            continuar = confirm("Deseja continuar o cadastro?");
        else {
            continuar = false;
        }

    } while (continuar);    //finaliza o loop de entrada de dados.

    return funcionarios;
}
//exibe os dados informados e calculo em HTML
function exibirEmpreguetes(listarfuncionario) {
    let mensagem = "";
    for (let i = 0; i < listarfuncionario.length; i++) { //conta quantas vezes vai pegar as informações (de acordo com o tanto de cadastro)
        let emp = listarfuncionario[i]; //define variavel que deve capturar informações no arrey
        //mensagem de resultado. (faltou colocar tofixed)
        mensagem += ` 
            Nome: ${emp["nome"]} <br/>
            Pis/Pasep: ${emp["pispasep"]}  <br/>
            Quantas Horas Trabalha: ${emp["quantashoras"]} <br/>
            Valor da Hora: R$ ${emp["valorhoras"]} <br/>
            Valor Bruto: R$ ${emp["valorBruto"]} <br/>
            Desconto de INSS: R$ ${emp["inss"]} <br/>
            Desconto de IRPF: R$ ${emp["irpf"]} <br/>
            Valor Líquido: R$ ${emp["valorliquido"]} <br/>
            <br/><br/>
        `;
    }
    document.write(mensagem); //exibe mensagem da função
}

let lista = cadastroPrestadores(); //define uma variavel com a função de cadastro de dados
exibirEmpreguetes(lista); //exibe o resultado da função utilizando os dados de outra.




//socorro! 
function cadastroPrestadores() {
    let funcionarios = [];
    const maxFuncionarios = 50;
    const minFuncionarios = 5;

    while (funcionarios.length < maxFuncionarios) {
        let nome = prompt("Informe o nome completo:");
        while (!nome.includes(" ") || nome.length < 3) {
            nome = prompt("Informe o Nome novamente (deve conter pelo menos um espaço):");
        }

        let pisPasep = prompt("Informe o seu PIS ou PASEP:");
        while (isNaN(pisPasep) || pisPasep.trim() === "") {
            pisPasep = prompt("Informe o seu PIS ou PASEP novamente:");
        }

        let quatashoras = prompt("Informe as quatashoras trabalhadas (entre 20 e 200):");
        while (isNaN(quatashoras) || (parseInt(quatashoras) < 20 || parseInt(quatashoras) > 200)) {
            quatashoras = prompt("Informe as quatashoras novamente:");
        }

        let valorHora = prompt("Informe o valor da hora (entre R$20,00 e R$500,00):");
        while (isNaN(valorHora) || (parseFloat(valorHora) < 20 || parseFloat(valorHora) > 500)) {
            valorHora = prompt("Informe o valor da hora novamente:");
        }

        // Cálculo do valor bruto
        let valorBruto = parseInt(quatashoras) * parseFloat(valorHora);

        // Cálculo de descontos
        let inss = valorBruto * 0.05; // 5% de INSS
        let ir = valorBruto > 300 ? valorBruto * 0.15 : 0; // IR fictício, apenas um exemplo
        let valorLiquido = valorBruto - (inss + ir);

        // Armazenando os dados do prestador
        funcionarios.push({
            nome,
            pisPasep,
            quatashoras: parseInt(quatashoras),
            valorHora: parseFloat(valorHora),
            valorBruto,
            inss,
            ir,
            valorLiquido
        });

        // Mostra os dados do prestador
        console.log(`Dados cadastrados: ${JSON.stringify(funcionarios[funcionarios.length - 1])}`);

        // Pergunta se deseja cadastrar outro
        if (funcionarios.length >= minFuncionarios) {
            let continuar = prompt("Deseja cadastrar outro prestador? (s/n)");
            if (continuar.toLowerCase() !== 's') {
                break;
            }
        }
    }

    // Mostra todos os cadastrados
    console.log("Todos os prestadores cadastrados:", funcionarios);
}

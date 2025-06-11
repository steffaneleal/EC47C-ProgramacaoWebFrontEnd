// TIPOS DE VARIÁVEIS
    // número (number): representa inteiros e números de ponto flutuante
        var idade = 25;
        const preco = 14.44;
        let valor = 50;

    // string: para armazenar texto
        let nome = "Joana";
        let frase = "Aprendendo JavaScript";

    // boolean: verdadeiro (true) ou falso (false)
        var fraude = true;
        let desligado  = false;

    // array: lista de valores, acessados por índices
        let frutas = ["maçã", "uva", "laranja"];
        let itens = [1, 2, 3, 4, 5]

    // Objeto: para armazenar propriedades e métodos
        let pessoa = {
            nome: "Joana",
            idade: 44,
            cidade: "Londrina"
        };

    // Função: para ser invocada para executar ações
        function cumprimento(nome) {
            return `Olá, ${nome}"`;
        }

    // null: ausência de qualquer valor ou objeto. Devido ao fato de JavaScript ser case-sensitive, null não é o mesmo que Null e NULL
        let valorNulo = null;

    // Undefined: variável declarada, mas não inicializada
        let valor;


// COMENTÁRIOS IGUAIS À LINGUAGEM C -> \\ para linha única e /* */ para mais de uma única linha
    

// OPERADORES ARITMÉTICOS
    // Adição (+)
    // Subtração (-)
    // Multiplicação (*)
    // Divisão (/)
    // Módulo (%)
    // Incremento (++)
    // Decremento (--)

    // EXEMPLOS:
    function somaNumeros(num1, num2) {
        return num1 + num2;
    }

    console.log(somaNumeros(10, 20));

    function verificarParOuImpar(numero) {
        if (numero % 2 == 0) {
            return "Par";
        } else {
            return "Ímpar";
        }
    }

    console.log(verificarParOuImpar(9));



// OPERADORES DE COMPARAÇÃO
    // Igual (==): verifica se dois valores são iguais
        5 == 5; // true
        "10" == 10; // true

    // Estritamente igual (===): verifica se dois valores são iguais e do mesmo tipo de dados
        5 === 5; // true
        "10" === 10; // false

    // Diferente (!=): verifica se dois valores são diferentes
        5 != 3; // true
        "5" != 5; // false (conversão de tipo implícita)

    // Estritamente diferente (!==): verifica se dois valores são diferentes ou de tipos diferentes
        5 !== "5"; // true
        5 !== 5; // false

    // MAIOR QUE (>): verifica se o valor da esquerda é maior que o valor da direita 
        10 > 5; // true

    // MENOR QUE (<): verifica se o valor da esquerda é menor que o valor da direita
        5 < 10; // true

    // MAIOR OU IGUAL A (>=): verifica se o valor da esquerda é maior ou igual ao valor da direita
        10 >= 11; // false
    
    // MENOR OU IGUAL A (<=): verifica se o valor da esquerda é menor ou igual ao valor da direita
        5 <= 10; // true

    // Operador Ternário (? :): operador de comparação que permite criar expressões condicionais compactas
        let idade = 20;
        let resultado = idade >= 18 ? "Maior de idade" : "menor de idade";



// OPERADORES LÓGICOS
    // OPERADOR E LÓGICO (&&): retorna true se ambas as expressões forem verdadeiras
        const idade = 25;
        const possuiCarteiraDeMotorista = true;

        if (idade >= 18 && possuiCarteiraDeMotorista) {
            console.log("Pode dirigir");
        } else {
            console.log("Não pode dirigir");
        }

    // OPERADOR OU LÓGICO (||): retorna true se pelo menos uma das expressões for verdadeira
        const temCartaoDeCredito = true;
        const temDinheiro = false;

        if (temCartaoDeCredito || temDinheiro) {
            console.log("Pode fazer a compra");
        } else {
            console.log("Não pode fazer a compra");
        }

    // OPERADOR NÃO LÓGICO (!): inverte o valor de uma expressão booleana
        const usuarioLogado = true;

        if (!usuarioLogado) {
            console.log("Faça o login para continuar");
        } else {
            console.log("Bem-vindo!");
        }

// ESTRUTURAS DE CONTROLE
    // IF - ELSE: permite verificar múltiplas condições em sequência
        const diaDaSemana = "terça";

        if (diaDaSemana === "sábado" || diaDaSemana === "domingo") {
            console.log("É fime de semana");
        } else if (diaDaSemana === "segunda" || diaDaSemana === "terça") {
            console.log("É início da semana");
        } else {
            console.log("É um dia comum");
        }


    // WHILE: usado para criar loops enquanto uma condição for verdadeira
        let contador = 0;

        while (contador < 5) {
            console.log("Contagem: " + contador);
            contador++;
        }

    
    // DO WHILE: garante que o bloco de código seja executado pelo menos uma vez, emsmo se a condição for falsa
        let numero = 1;

        do {
            console.log("Número: " + numero);
            numero++;
        } while (numero <= 3);
        
    // FOR: usado para criar loops com um contador
    for (let i = 0; i < 5; i++) {
        console.log("Iteração " + i);
    }

    // FOR IN: alternativa para criar loop. Executa iterações a partir de uma variável informada, permitindo percorrer as propriedades de um objeto.
        var produtos = [
            { id: 1, tipo: 'camiseta', quantidade: 20 },
            { id: 2, tipo: 'livro', quantidade:15 }
        ]

        var qtdtotal = 0

        for (const i in produtos) {
            qtdtotal += produtos[i].quantidade
        }

    // SWITCH: usado para fazer múltiplas verificações em uma única variável
        let fruta = "maçã";

        switch(fruta) {
            case "maçã":
                console.log("É uma maçã");
                break;
            case "banana":
                console.log("É uma uva");
                break;
            default:
                console.log("Não está na lista");
        }
        
const objs = [
  {
    nome: "Stéffane",
    idade: 23,
    esta_atrabalhando: true,
    detalhes_profissao: {
      profissao: "Programador",
      empresa: "UTFPR",
    },
    hobbies: ["Programar", "Jogar", "Ouvir música"],
  },
  {
    nome: "Junior",
    idade: 21,
    esta_atrabalhando: false,
    detalhes_profissao: {
      profissao: "Engenheiro Mecânico",
      empresa: null,
    },
    hobbies: ["Cheerleader", "Ver filmes"],
  },
];

console.log(objs);

// Conversão de Objeto JavaScript para JSON
console.log('\n\n Conversão de objeto JS para JSON');
const jsonData = JSON.stringify(objs);
console.log(jsonData);
console.log(typeof jsonData);

// Converter JSON em um array de Objetos (já que o JS não lida com JSON)
console.log('\n\n Conversão de JSON para objeto JS');

const objData = JSON.parse(jsonData);
console.log(objData);
console.log(typeof objData);


console.log("\n\n Recuperando os nomes utilizando o método map()")
objData.map((pessoa) => {
    console.log(pessoa.nome);
});
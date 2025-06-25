// LOCAL STORAGE
// 1 - inserir dado
localStorage.setItem('name', 'Matheus');

// 2 - resgatar item
const name = localStorage.getItem('name');
console.log(name);

// 3 - resgate de item que não existe
const lastName = localStorage.getItem('lastname'); // deixa fazer isso, mas retorna um valor null
console.log(lastName);

if (lastName) {
    console.log(lastName);
} else {
    console.log('Não tem sobrenome!');
}

// 4 - remover item
localStorage.removeItem('name');

// 5 - limpar todos os itens (quando o usuário dá logout, por exemplo)
localStorage.setItem('a', 1);
localStorage.setItem('b', 2);

console.log(typeof localStorage.getItem('a')); // -> para provar que quando salva algo em localStorage, vira texto

localStorage.clear();


// SESSION STORAGE (muito parecido com localStorage)
sessionStorage.setItem('number', 123);

// 7 - reinicia e perde os dados 

// 8 - recuperando os dados
const n = sessionStorage.getItem('number');
console.log(n);

// 9 - removendo item
sessionStorage.removeItem('number');

// 10 - removendo todos os itens
const n1 = sessionStorage.setItem('n1', 12);
const n2 = sessionStorage.setItem('n2', 13);
sessionStorage.clear();


// 11 - salvar objeto
const person = {
    name: "Matheus",
    age: 31,
    job: "Programmer",
};


localStorage.setItem('person', person); // não funciona

localStorage.setItem('person', JSON.stringify(person));

const getPerson = localStorage.getItem("person");
console.log(getPerson);

const personObject = JSON.parse(getPerson);
console.log(typeof personObject);

console.log(personObject.job)
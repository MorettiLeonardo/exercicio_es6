const notasDosAlunos = [
    {nome: 'João', nota: 7},
    {nome: 'Vitor', nota: 10},
    {nome: 'Taynara', nota: 5},
    {nome: 'Luana', nota: 6},
    {nome: 'Gabriele', nota: 10},
    {nome: 'Wesley', nota: 9},
    {nome: 'Lucas', nota: 2},
    {nome: 'Joana', nota: 7},
    {nome: 'Cleber', nota: 4},
    {nome: 'Maria', nota: 6},
]

const melhoresNotas = notasDosAlunos.filter((aluno) => aluno.nota >= 6);
console.log(melhoresNotas)
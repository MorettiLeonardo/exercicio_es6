const alunosNotas = [
    {nome: 'João', nota: 7},
    {nome: 'Lucas', nota: 6},
    {nome: 'Luana', nota: 5},
    {nome: 'Maria', nota: 4},
    {nome: 'Paulo', nota: 8},
    {nome: 'Iara', nota: 9},
    {nome: 'Sergio', nota: 10},
]

const alunosMelhoresNotas = alunosNotas.filter((aluno) => aluno.nota >= 6)
console.log(alunosMelhoresNotas)

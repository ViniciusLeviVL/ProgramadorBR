function novoAluno(nome, idade) {
    return { nome, idade }
}
let alunos = [
    novoAluno("Mario", 35),
    novoAluno("José", 45),
    novoAluno("Maria", 23),
    novoAluno("Romeu", 18),
    novoAluno("Ellen", 30),
]
let mapa = function mapa(f) {
    let newArray = [];
    for (let info of this) {
        newArray.push(f(info))
    }
    return newArray;
}
function nomeIdade(aluno) {
    return aluno.nome + " tem " + aluno.idade + " anos"
} 
alunos.mapa = mapa

let alunoNomeIdade = alunos.mapa(nomeIdade)
console.log(alunoNomeIdade)
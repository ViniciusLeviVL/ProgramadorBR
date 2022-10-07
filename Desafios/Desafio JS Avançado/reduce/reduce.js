function novoAluno(nome, idade) {
    return {
        nome,
        idade
    }
}
let alunos = [
    novoAluno("Mario", 35),
    novoAluno("José", 45),
    novoAluno("Maria", 23),
    novoAluno("Romeu", 18),
    novoAluno("Ellen", 30),
]

function idadeTotal(total, aluno) {
    return total + aluno.idade
}

let reduzir = function reduzir(f, i) {
    let tot = i;
    for (let index = 0; index < this.length; index++) {
        tot = f(tot, this[index])
    }
    return tot;
}

alunos.reduzir = reduzir

console.log(alunos.reduce(idadeTotal, 0))
console.log(alunos.reduzir(idadeTotal, 0))
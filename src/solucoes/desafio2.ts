enum Profissao {
    Atriz,
    Padeiro,
}

interface IPessoa {
    nome: string,
    idade: number,
    profissao: Profissao
}

let pessoa1 = {} as IPessoa;
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = Profissao.Atriz

let pessoa2 = {} as IPessoa
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = Profissao.Padeiro

let pessoa3 = {} as IPessoa
pessoa3.nome = "laura",
pessoa3.idade = 32,
pessoa3.profissao = Profissao.Atriz

let pessoa4 = {} as IPessoa
pessoa4.nome = "carlos",
pessoa4.idade = 19,
pessoa4.profissao = Profissao.Padeiro

function show(pessoa: IPessoa) {

    const [nome, idade, profissao] = [pessoa.nome, pessoa.idade, pessoa.profissao]

    return(`Olá, sou ${nome}, tenho ${idade} de idade e sou ${profissao}`)
}

console.log(show(pessoa2))
let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoSubtrair = document.getElementById('subtrair-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLElement;

campoSaldo.innerHTML = '0'

function somarAoSaldo(valor: number) {
    let somaSaldo: number = Number(campoSaldo.innerHTML) + valor
    campoSaldo.innerHTML = somaSaldo.toString()
}

function subtrairAoSaldo(valor: number) {
    let somaSaldo: number = Number(campoSaldo.innerHTML) - valor
    campoSaldo.innerHTML = somaSaldo.toString()
}

function limparSaldo() {
    campoSaldo.innerHTML = '0';
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});

botaoSubtrair.addEventListener('click', function () {
    subtrairAoSaldo(Number(soma.value));
});

botaoLimpar.addEventListener('click', function () {
    const zerar = confirm(`Tem certeza!?`)
    if(zerar){
        limparSaldo();
    }
});
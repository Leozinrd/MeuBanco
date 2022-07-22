const imprimir = console.log;

export class contaCorrente {
    cliente;
	agencia;

	_saldo = 0;

	constructor(cliente, agencia, saldo=0){
		this.cliente = cliente;
		this.agencia = agencia;
		this._saldo = saldo;
	}

	sacar(valor) {
		if (valor > this._saldo) {
			throw new Error(`Valor para saque maior que saldo\n`);
		}
		if (valor < 0) {
			throw new Error(`Valor negativo\n`);
		}
		this._saldo -= valor;
        imprimir(`Você`,this.cliente,`fez um saque no valor de R$${valor}\n`);
		return;
	}

	depositar(valor) {
		if (valor <= 0) {
			return;
		}
		this._saldo += valor;
        imprimir(`Você `,this.cliente, `depositou R$${valor}`);
		imprimir('O saldo atual é de: R$',this._saldo);
        return;
	}

    transferir(valor, conta){
        try {
			this.sacar(valor);			
		} catch (error) {
			imprimir(error.message);
			return;
		}
        conta.depositar(valor);
    }
}
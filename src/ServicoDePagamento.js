export class ServicoDePagamento {

    constructor() {
        this.pagamentos = [];
    }

    pagar(codigoBarras, empresa, valor) {

        let categoria;

        if (valor > 100) {
            categoria = 'cara';
        } else {
            categoria = 'padrão';
        }

        const pagamento = {
            codigoBarras,
            empresa,
            valor,
            categoria
        };

        this.pagamentos.push(pagamento);
    }

    consultarUltimoPagamento() {
        return this.pagamentos[this.pagamentos.length - 1];
    }
}
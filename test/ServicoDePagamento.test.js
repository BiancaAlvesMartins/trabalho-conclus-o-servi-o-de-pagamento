import assert from 'assert';
import { ServicoDePagamento } from '../src/ServicoDePagamento.js';

describe('ServicoDePagamento', function () {

    it('deve criar pagamento caro', function () {

        const servico = new ServicoDePagamento();

        servico.pagar('0123.2154.2203.4444', 'Multicoisas', 150);

        const ultimo = servico.consultarUltimoPagamento();

        assert.equal(ultimo.categoria, 'cara');
        assert.equal(ultimo.valor, 150);
    });

    it('deve criar pagamento padrão', function () {

        const servico = new ServicoDePagamento();

        servico.pagar('4561.0021.2021.3532', 'Multicoisas', 50);

        const ultimo = servico.consultarUltimoPagamento();

        assert.equal(ultimo.categoria, 'padrão');
        assert.equal(ultimo.valor, 50);
    });

    it('deve retornar o último pagamento realizado', function () {

        const servico = new ServicoDePagamento();

        servico.pagar('0112.334.5554.1652', 'Empresa A', 50);
        servico.pagar('1254.3256.0022.1332', 'Empresa B', 200);

        const ultimo = servico.consultarUltimoPagamento();

        assert.equal(ultimo.codigoBarras, '1254.3256.0022.1332');
        assert.equal(ultimo.empresa, 'Empresa B');
    });

});
class Tabelas {
    init(conexao) {
        console.log('Tabelas foram chamadas');
        this.conexao = conexao;
    }

    criarUsuarios() {

    }
}

module.exports = new Tabelas
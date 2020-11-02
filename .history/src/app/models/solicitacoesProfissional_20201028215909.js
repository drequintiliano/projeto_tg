// const conexao = require('../config/conexao')

const conexao = require("../config/conexao");

class SolicitacoesProfissional {

    constructor(conexao) {
        this._conexao = conexao;
    }

    // listarTodos(res) {
    //     const sql = 'SELECT * FROM solicitacoesProfissional ORDER BY dataSolicitacao DESC';

    //     conexao.query(sql, (erro, resultados) => {
    //         if (erro) {
    //             res.status(400).json(erro);
    //         } else {
    //             res.status(200).json(resultados);
    //         }
    //     })
    // }

    listarTodos() {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM solicitacoesProfissional ORDER BY dataSolicitacao DESC';
            conexao.query(sql, (erro, resultados) => {
                if (erro) {
                    return reject('Não foi possivel listar solicitações');
                } else {
                    console.log(resultados)
                    return resolve(resultados);
                }
            })
        });
    }
}

module.exports = SolicitacoesProfissional;
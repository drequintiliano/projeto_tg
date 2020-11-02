const conexao = require('../config/conexao');
const { check } = require('express-validator');
const { body } = require('express-validator');
class UsuariosProfissional {

    constructor(conexao) {
        this._conexao = conexao;
    }

    adiciona(profissional) {
        return new Promise((resolve, reject) => {
            const sql = `INSERT INTO usuariosProfissional (
                nome,
                celular,
                telefone,
                endereco,
                cidade,
                redes_sociais,
                descricao,
                email,
                senha
            ) VALUES (?,?,?,?,?,?,?,?,?)`;

            const array = [
                profissional.nome,
                profissional.celular,
                profissional.telefone,
                profissional.endereco,
                profissional.cidade,
                profissional.redes_sociais,
                profissional.descricao,
                profissional.email,
                profissional.senha
            ];

            conexao.query(sql, array, (erro, resultados) => {
                if (erro) {
                    console.log(erro);
                    return reject('Não foi possivel adicionar profissional' + erro);
                } else {
                    return resolve();
                }
            })
        })
    }

    procurarEmail(email) {
        return new Promise((resolve, reject) => {
            const sql = `SELECT email FROM usuariosProfissional WHERE email = ?`;

            conexao.query(sql, [email], (erro, resultados) => {
                if (erro) {
                    console.log(erro);
                    return reject('Não foi possivel executar a função procurarEmail' + erro);
                } else {
                    return resolve();
                }
            })
        })
    }

    static validacoes() {
        const usuariosProfissional = new UsuariosProfissional

        return [
            check('senha').isLength({ min: 5 }).withMessage('A senha precisa ter no mínimo 5 caracteres!'),
            check('nome').isLength({ min: 5 }).withMessage('O nome precisa ter no mínimo 5 caracteres!'),
            check('senha').custom((value, { req }) => {
                console.log("senha: " + value)
                console.log("confirmarSenha: " + req.body.confirmarSenha)
                if (value !== req.body.confirmarSenha) {
                    throw new Error('Password confirmation is incorrect');
                }
            })
        ];
    }
}

module.exports = UsuariosProfissional;
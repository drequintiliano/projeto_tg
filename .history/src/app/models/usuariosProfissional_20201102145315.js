const conexao = require('../config/conexao');
const { check } = require('express-validator');
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
        return [
            check('senha').isLength({ min: 5 }).withMessage('A senha precisa ter no mínimo 5 caracteres!'),
            check('nome').isLength({ min: 5 }).withMessage('O nome precisa ter no mínimo 5 caracteres!'),
            check('confirmarSenha').custom((value, { req }) => {
                if (value !== req.body.senha) {
                    throw new Error('Os campos "senha" e "confirmar senha" precisam ser iguais');
                }
            }),
            check('email').custom(value => {
                const usuariosProfissional = new UsuariosProfissional
                return usuariosProfissional.procurarEmail(value).then(usuariosProfissional => {
                    if (usuariosProfissional) {
                        return Promise.reject('E-mail already in use');
                    }
                });
            })
        ];
    }
}

module.exports = UsuariosProfissional;
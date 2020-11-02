const UsuariosCliente = require('../models/usuariosCliente');
const conexao = require('../config/conexao');
const { validationResult } = require('express-validator');

class UsuarioClienteController {

    cadastrarCliente() {
        return function(req, resp) {
            const form = req.body;
            const email = req.body.email;

            const usuarioCliente = new UsuariosCliente(conexao);

            const erros = validationResult(req);

            if (!usuarioCliente.procurarEmail(email)) {
                console.log("Email informado ja existe, por favor insira outro.");

                console.log(form);
                return resp.marko(
                    require(__dirname + '../../views/cadastro/cadastrar_cliente.marko'), {
                        cliente: {},
                        sucesso: false,
                        erroEmail: true
                    }
                );
            } else if (!erros.isEmpty()) {
                return resp.marko(
                    require(__dirname + '../../views/cadastro/cadastrar_cliente.marko'), {
                        cliente: {},
                        errosValidacao: erros.array()
                    }
                );
            } else {
                console.log(form);
                usuarioCliente.adiciona(form)
                    .then(
                        resp.marko(
                            require(__dirname + '../../views/cadastro/cadastrar_cliente.marko'), {
                                cliente: {},
                                sucesso: true,
                                erroEmail: false
                            }
                        ))
                    .catch(erro => console.log(erro))
            }
        };
    }

    alterarProfissional() {

    }
}

module.exports = UsuarioClienteController
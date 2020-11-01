const UsuariosProfissional = require('../models/usuariosProfissional');
const conexao = require('../config/conexao');

class UsuarioProfissionalController {

    cadastrarProfissional() {
        return function(req, resp) {
            const form = req.body;
            const email = req.body.email;
            console.log(form);

            const usuariosProfissional = new UsuariosProfissional(conexao);

            usuariosProfissional.procurarEmail(email).then((usuariosProfissional) => {
                if (email) {
                    req.flash("error_msg", "Email informado ja existe, por favor insira outro.")
                    resp.redirect('/cadastrar_profissional')
                } else {
                    usuariosProfissional.adiciona(form)
                        .then(resp.redirect('/profissional_index.html'))
                        .catch(erro => console.log(erro));
                }
            })
        };
    }

    alterarProfissional() {

    }
}

module.exports = UsuarioProfissionalController
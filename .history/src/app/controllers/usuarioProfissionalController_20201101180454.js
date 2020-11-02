const UsuariosProfissional = require('../models/usuariosProfissional');
const conexao = require('../config/conexao');

class UsuarioProfissionalController {

    cadastrarProfissional() {
        return function(req, resp) {
            const form = req.body;
            const email = req.body.email;

            const usuariosProfissional = new UsuariosProfissional(conexao);

            usuariosProfissional.procurarEmail(email).then((usuariosProfissional) => {
                if (email) {
                    console.log("error_msg", "Email informado ja existe, por favor insira outro.");
                    resp.redirect('/cadastrar_profissional');
                } else {
                    console.log(form);
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
const Solicitacoes = require('../models/solicitacoes');
const Servicos = require('../models/servicos');
const conexao = require('../config/conexao');
const moment = require('moment');

moment.locale('pt-BR');

class SolicitacoesController {

    cadastrarSolicitacao() {
        return function(req, resp) {
            const form = req.body;
            var idCategoria = req.body.idCategoria;

            const solicitacoes = new Solicitacoes(conexao);
            const servicos = new Servicos(conexao);

            const usuarioSessao = req.session.passport == undefined ? undefined : req.session.passport.user

            console.log("caminho id: " + idCategoria);
            console.log("formulario: " + JSON.stringify(form));

            if (idCategoria = 1) {
                solicitacoes.adiciona(form)
                    .then(
                        servicos.listarCategoriaServico(1)
                        .then(servicos => resp.marko(
                            require('../views/categorias/cat_servicos.marko'), {
                                servicos: servicos,
                                usuarioSessao: usuarioSessao,
                                sucesso: true
                            }
                        ))
                        .catch(erro => console.log(erro)))
                    .catch(erro => console.log(erro));
            } else if (idCategoria = 2) {
                solicitacoes.adiciona(form)
                    .then(
                        servicos.listarCategoriaServico(2)
                        .then(servicos => resp.marko(
                            require('../views/categorias/cat_assistencias.marko'), {
                                servicos: servicos,
                                usuarioSessao: usuarioSessao,
                                sucesso: true
                            }
                        ))
                        .catch(erro => console.log(erro)))
                    .catch(erro => console.log(erro));
            } else if (idCategoria = 3) {
                solicitacoes.adiciona(form)
                    .then(
                        servicos.listarCategoriaServico(3)
                        .then(servicos => resp.marko(
                            require('../views/categorias/cat_eventos.marko'), {
                                servicos: servicos,
                                usuarioSessao: usuarioSessao,
                                sucesso: true
                            }
                        ))
                        .catch(erro => console.log(erro)))
                    .catch(erro => console.log(erro));
            } else if (idCategoria = 4) {
                solicitacoes.adiciona(form)
                    .then(
                        servicos.listarCategoriaServico(4)
                        .then(servicos => resp.marko(
                            require('../views/categorias/cat_reformas.marko'), {
                                servicos: servicos,
                                usuarioSessao: usuarioSessao,
                                sucesso: true
                            }
                        ))
                        .catch(erro => console.log(erro)))
                    .catch(erro => console.log(erro));
            } else if (idCategoria = 5) {
                solicitacoes.adiciona(form)
                    .then(
                        servicos.listarCategoriaServico(5)
                        .then(servicos => resp.marko(
                            require('../views/categorias/cat_aulas.marko'), {
                                servicos: servicos,
                                usuarioSessao: usuarioSessao,
                                sucesso: true
                            }
                        ))
                        .catch(erro => console.log(erro)))
                    .catch(erro => console.log(erro));
            } else if (idCategoria = 6) {
                solicitacoes.adiciona(form)
                    .then(
                        servicos.listarCategoriaServico(6)
                        .then(servicos => resp.marko(
                            require('../views/categorias/cat_consultorias.marko'), {
                                servicos: servicos,
                                usuarioSessao: usuarioSessao,
                                sucesso: true
                            }
                        ))
                        .catch(erro => console.log(erro)))
                    .catch(erro => console.log(erro));
            } else {
                console.log("cadastrar solicitacao deu ruim, idCategoria: " + idCategoria);
            }
        };
    }

    cancelarSolicitacaoCliente() {
        return function(req, res) {
            const idServico = req.body.idServico;
            const usuarioSessao = req.session.passport == undefined ? undefined : req.session.passport.user;
            const idCliente = usuarioSessao.idUsuario;

            console.log("idCliente: " + idCliente + " idServico: " + idServico);

            const solicitacoesCliente = new Solicitacoes(conexao);
            solicitacoesCliente.cancelarSolicitacao(idServico)
                .then(
                    solicitacoesCliente.listarSolicitacoesCliente(idCliente)
                    .then(solicitacoes => res.marko(
                        require('../views/perfil/cliente/perfil_cliente_solicitacoes.marko'), {
                            solicitacoes: solicitacoes.map((item) => {
                                let dataFormatada = moment(item.data_solicitacao, 'DD/MM/YYYY').format('DD/MM/YYYY');

                                return {
                                    id: item.id,
                                    id_servico: item.id_servico,
                                    data_solicitacao: item.data_solicitacao = dataFormatada,
                                    hora_solicitacao: item.hora_solicitacao,
                                    nome: item.nome,
                                    categoria: item.categoria,
                                    celular: item.celular,
                                    email: item.email,
                                    id_status: item.id_status,
                                    status: item.status
                                }
                            }),
                            usuarioSessao: usuarioSessao
                        },
                        console.log("solicitacoes: " + JSON.stringify(solicitacoes))
                    ))
                    .catch(erro => console.log(erro))
                ).catch(erro => console.log(erro));
        }
    }

    listarSolicitacoesCliente() {
        return function(req, res) {

            const usuarioSessao = req.session.passport == undefined ? undefined : req.session.passport.user;
            const idCliente = usuarioSessao.idUsuario;

            console.log("listarSolicitacaoCliente: " + JSON.stringify(usuarioSessao));
            console.log("idCliente: " + idCliente);

            const solicitacoesCliente = new Solicitacoes(conexao);
            solicitacoesCliente.listarSolicitacoesCliente(idCliente)
                .then(function(solicitacoes) {
                    res.marko(
                        require('../views/perfil/cliente/perfil_cliente_solicitacoes.marko'), {
                            solicitacoes: solicitacoes.map((item) => {
                                let dataFormatada = moment(item.data_solicitacao, 'DD/MM/YYYY').format('DD/MM/YYYY');

                                return {
                                    id: item.id,
                                    id_servico: item.id_servico,
                                    data_solicitacao: item.data_solicitacao = dataFormatada,
                                    hora_solicitacao: item.hora_solicitacao,
                                    nome: item.nome,
                                    categoria: item.categoria,
                                    celular: item.celular,
                                    email: item.email,
                                    id_status: item.id_status,
                                    status: item.status
                                }
                            }),
                            usuarioSessao: usuarioSessao
                        },
                        console.log("solicitacoes: " + JSON.stringify(solicitacoes))
                    )
                })
                .catch(erro => console.log(erro));
        }
    }

    listarSolicitacoesProfissional() {
        return function(req, res) {

            const usuarioSessao = req.session.passport == undefined ? undefined : req.session.passport.user;
            const idProfissional = usuarioSessao.idUsuario;

            console.log("idProfissional: " + idProfissional);

            const solicitacoesProfissional = new Solicitacoes(conexao);
            solicitacoesProfissional.listarSolicitacoesProfissional(idProfissional)
                .then(solicitacoes => res.marko(
                    require('../views/perfil/profissional/perfil_profissional_solicitacoes.marko'), {
                        solicitacoes: solicitacoes.map((item) => {
                            let dataFormatada = moment(item.data_solicitacao, 'DD/MM/YYYY').format('DD/MM/YYYY');

                            return {
                                id: item.id,
                                id_servico: item.id_servico,
                                data_solicitacao: item.data_solicitacao = dataFormatada,
                                hora_solicitacao: item.hora_solicitacao,
                                nome: item.nome,
                                categoria: item.categoria,
                                celular: item.celular,
                                email: item.email,
                                id_status: item.id_status,
                                status: item.status,
                                titulo: item.titulo,
                                endereco: item.endereco
                            }
                        }),
                        usuarioSessao: usuarioSessao
                    },
                    console.log("solicitacoes: " + JSON.stringify(solicitacoes))
                ))
                .catch(erro => console.log(erro));
        }
    }

    confirmarSolicitacao() {
        return function(req, res) {
            const solicitacoes = new Solicitacoes(conexao);

            const usuarioSessao = req.session.passport == undefined ? undefined : req.session.passport.user;
            const idProfissional = usuarioSessao.idUsuario;
            const idSolicitacao = req.body.idSolicitacao;

            console.log("idSolicitacao: " + idSolicitacao + " idProfissional: " + idProfissional);

            solicitacoes.confirmarSolicitacao(idSolicitacao);

            solicitacoes.listarSolicitacoesProfissional(idProfissional)
                .then(solicitacoes => res.marko(
                    require('../views/perfil/profissional/perfil_profissional_solicitacoes.marko'), {
                        solicitacoes: solicitacoes.map((item) => {
                            let dataFormatada = moment(item.data_solicitacao, 'DD/MM/YYYY').format('DD/MM/YYYY');

                            return {
                                id: item.id,
                                id_servico: item.id_servico,
                                data_solicitacao: item.data_solicitacao = dataFormatada,
                                hora_solicitacao: item.hora_solicitacao,
                                nome: item.nome,
                                categoria: item.categoria,
                                celular: item.celular,
                                email: item.email,
                                id_status: item.id_status,
                                status: item.status,
                                titulo: item.titulo,
                                endereco: item.endereco
                            }
                        }),
                        usuarioSessao: usuarioSessao
                    },
                    console.log("solicitacoes: " + JSON.stringify(solicitacoes))
                ))
                .catch(erro => console.log(erro));
        }
    }

    cancelarSolicitacaoProfissional() {
        return function(req, res) {
            const idServico = req.body.idServico;
            const usuarioSessao = req.session.passport == undefined ? undefined : req.session.passport.user;
            const idProfissional = usuarioSessao.idUsuario;

            console.log("idProfissional: " + idProfissional + " idServico: " + idServico);

            const solicitacoesProfissional = new Solicitacoes(conexao);
            solicitacoesProfissional.cancelarSolicitacao(idServico)
                .then(
                    solicitacoesProfissional.listarSolicitacoesProfissional(idProfissional)
                    .then(solicitacoes => res.marko(
                        require('../views/perfil/profissional/perfil_profissional_solicitacoes.marko'), {
                            solicitacoes: solicitacoes.map((item) => {
                                let dataFormatada = moment(item.data_solicitacao, 'DD/MM/YYYY').format('DD/MM/YYYY');

                                return {
                                    id: item.id,
                                    id_servico: item.id_servico,
                                    data_solicitacao: item.data_solicitacao = dataFormatada,
                                    hora_solicitacao: item.hora_solicitacao,
                                    nome: item.nome,
                                    categoria: item.categoria,
                                    celular: item.celular,
                                    email: item.email,
                                    id_status: item.id_status,
                                    status: item.status,
                                    titulo: item.titulo,
                                    endereco: item.endereco
                                }
                            }),
                            usuarioSessao: usuarioSessao
                        },
                        console.log("solicitacoes: " + JSON.stringify(solicitacoes))
                    ))
                    .catch(erro => console.log(erro))
                ).catch(erro => console.log(erro));
        }
    }
}

module.exports = SolicitacoesController;
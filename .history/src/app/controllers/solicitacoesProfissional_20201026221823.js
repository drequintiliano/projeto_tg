const SolicitacoesProfissional = require('../models/solicitacoesProfissional')

module.exports = app => {
    app.get('/solicitacoesProfissional', (req, res) => {
        SolicitacoesProfissional.listarTodos(res);
    })

    // app.get('/atendimentos/:id', (req, res) => {
    //     const id = parseInt(req.params.id)

    //     Atendimento.buscaPorId(id, res)
    // })

    // app.post('/atendimentos', (req, res) => {
    //    const atendimento = req.body

    //     Atendimento.adiciona(atendimento, res)
    // }) 

    // app.patch('/atendimentos/:id', (req, res) => {
    //     const id = parseInt(req.params.id)
    //     const valores = req.body

    //     Atendimento.altera(id, valores, res)
    // })

    // app.delete('/atendimentos/:id', (req, res) => {
    //     const id = parseInt(req.params.id)

    //     Atendimento.deleta(id, res)
    // })
}
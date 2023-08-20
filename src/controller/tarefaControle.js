import { Router } from "express"
import { listarTarefas, inserir, finalizados, alterar, apagar } from "../repository/tarefarepository.js"

let endpoint = Router()


endpoint.get('/tarefas/listar', async (req, resp) => {
    let dados = await listarTarefas()
    resp.send(dados)
})

endpoint.post('/tarefa', async (req, resp) => {
    let tarefa = req.body

    let dados = await inserir(tarefa)
    resp.send(dados)

})

endpoint.get('/tarefas/finalizados', async (req, resp) => {
    let dados = await buscarfinalizados()
    resp.send(dados)
})

endpoint.put('/alterar', async (req, resp) => {
    let id = req.query.id
    let nm = req.query.nome

    let dados = await alterar(nm, id);
    resp.send('alterado')
})

endpoint.delete('/apagar', async (req, resp) => {
    let id = req.query.id
    let dados = await apagar(id)
    resp.send('dados da tabela apagados')
})

endpoint.get('/finalizados', async (req,resp) =>{
    let dados = await finalizados();
    resp.send(dados);
});

endpoint.put('/alterar', async (req,resp) =>{
    let id = req.query.id;
    let nm = req.query.nome;
    
    let dados = await alterar(nm, id);
    resp.send('Contato Alterado!!');
})

endpoint.delete('/deletar', async (req,resp) =>{
    let id = req.query.id;
    let dados = await apagar(id);
    resp.send('Agenda Apagada com sucesso!!')
});


export default endpoint;
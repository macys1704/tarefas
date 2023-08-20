import conexao from "./connections.js";

export async function listarTarefas(){
    let sql = 'select * from tb_tarefas';

    let resp = await conexao.query(sql);
    let dados = resp[0]

    return dados;
}

export async function inserir(tarefas) {
    let sql = 'insert into tb_tarefas (ds_tarefa, nr_ordem, bt_finalizado, dt_cadastro) values (?, ?, ?, ?)'

    let resp = await conexao.query(sql, [tarefas.desc, tarefas.ordem, tarefas.finalizado, tarefas.data])
    let dados = resp[0]

    tarefas.id = dados.insertId
    return tarefas   
}

export async function finalizados() {
    let sql = 'select * from tb_tarefas where bt_finalizado = 1';
    let resp = await conexao.query(sql)

    let dados = resp[0];
    return dados
}

export async function alterar(nm,id){
    let sql = 'UPDATE tb_tarefas SET ds_tarefa = ? WHERE id_tarefa = ?';
    let resp = await conexao.query(sql, [nm, id]);

    let dados = resp[0];
    return dados;
}

export async function apagar(id){
    let sql = 'delete from tb_tarefas where id_tarefa = ?';
    let resp = await conexao.query(sql , [id]);

    let dados = resp[0];
    return dados
}
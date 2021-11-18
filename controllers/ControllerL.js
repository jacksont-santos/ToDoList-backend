const servicosList = require('./../services/servicesL');
const servicos = new servicosList;

class ControllerList {
    getList = async (req,res)=>{
        const lista = await servicos.findAll();
        if (!lista){res.status(404).send(" Lista de tarefas não encontrada"); return;};
        res.status(200).send(lista);
    };
    getTarefa = async (req,res)=>{
        const id = req.params.id;
        if(id <= 0) {
            res.status(404).send({
                error: 'Tarefa não encontrada!'
            });
            return;
        };
        const tarefa = await servicos.find(id);
        res.status(200).send(tarefa);
    };
    postTarefa = async (req,res)=>{
        const novaTarefa = req.body;
        if (!novaTarefa.titulo || !novaTarefa.descricao || !novaTarefa.prioridade || !novaTarefa.prazo || !novaTarefa.status){
            res.status(400).send({message: 'Preencha todos os campos'});
        return;
        };
        await servicos.inserirTarefa(novaTarefa);
        res.status(201).send("tarefa adicionada");
    };
    deletarTarefa = async (req,res)=>{
        const id = req.params.id;
        if(id <= 0) {
            res.status(404).send({
                error: 'Tarefa não encontrada!'
            });
            return;
        };
        await servicos.delete(id);
        res.status(200).send("tarefa excluída!");
    };
    putTarefa = async (req,res)=>{
        const id = req.params.id;
        if(id <= 0) {
            res.status(404).send({
                error: 'Tarefa não encontrada!'
            });
            return;
        };
        const newTarefa = req.body;
        if (!newTarefa.titulo || !newTarefa.descricao || !newTarefa.prioridade || !newTarefa.prazo || !newTarefa.status){
            res.status(400).send({message: 'Preencha todos os campos'});
        return;
        };
        await servicos.atualizarTarefa(id, newTarefa);
        res.status(200).send("tarefa atualizada");
    };
};
module.exports = ControllerList;
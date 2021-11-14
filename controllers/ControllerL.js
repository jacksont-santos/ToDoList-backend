const servicosList = require('./../services/servicesL');
const servicos = new servicosList;

class ControllerList {
    getList = async (req,res)=>{
        const lista = await servicos.findAll();
        res.send(lista);
    };
    getTarefa = async (req,res)=>{
        const id = req.params.id;
        const tarefa = await servicos.find(id);
        res.send(tarefa);
    };
    postTarefa = async (req,res)=>{
        const novaTarefa = req.body;
        await servicos.inserirTarefa(novaTarefa);
        res.send("tarefa adicionada");
    };
    deletarTarefa = async (req,res)=>{
        const id = req.params.id;
        await servicos.delete(id);
        res.send("tarefa excluída!");
    };
    putTarefa = async (req,res)=>{
        const id = req.params.id;
        const newTarefa = req.body;
        await servicos.atualizarTarefa(id, newTarefa);
        res.send("tarefa atualizada");
    };
};
module.exports = ControllerList;
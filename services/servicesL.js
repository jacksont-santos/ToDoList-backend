const model = require('./../models/modelList');

class serviceslist {
    
    findAll = async ()=> await model.find();
    find = async (id)=> await model.findById(id);
    inserirTarefa = async (tarefa)=> await model.create(tarefa);
    delete = async (id) => await model.findByIdAndDelete(id);
    atualizarTarefa = async (id, tarefa) => await model.findByIdAndUpdate(id, tarefa);
};
module.exports = serviceslist;
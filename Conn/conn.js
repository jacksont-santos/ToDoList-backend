const mongoose = require('mongoose');

const Conn = ()=>{
    mongoose.connect('mongodb://localhost:27017/ToDo', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }) .then(()=>{
        console.log(' MongoDB conectado!');
    }) .catch((err)=>{
        console.log('erro de conexao com o banco', err);
    });
};
module.exports = Conn;
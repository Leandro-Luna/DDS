const Usuarios=require('./cliente.js')
const Cliente=require('./usuarios.js')
const Propiedades=require('./propiedades.js')

Cliente.hasMany(Propiedades);
Propiedades.belongsTo(Cliente);

module.exports= {Cliente,Propiedades}
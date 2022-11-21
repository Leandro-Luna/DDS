const {sequelize}=require('../db.js')
const { DataTypes } = require('sequelize');



const Cliente =sequelize.define('cliente', {
    dni_cliente: {
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true
    },
    numero_cliente: {
        type:DataTypes.BIGINT,
    },
    nombre_cliente: {
        type:DataTypes.STRING,
    },
    apellido_cliente: {
        type:DataTypes.STRING,
    },

    tipo_cliente: {
        type:DataTypes.STRING,
    },
    telefono_cliente: {
        type:DataTypes.BIGINT,
    },
    direccion_cliente: {
        type:DataTypes.STRING,
    },
    correo_cliente: {
        type:DataTypes.STRING,
    }

}, {
    timestamps: false,
});

module.exports= Cliente
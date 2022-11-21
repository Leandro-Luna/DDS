const {sequelize}=require('../db.js')
const { DataTypes } = require('sequelize');



const Propiedades =sequelize.define('propiedades', {
    cod_inmueble: {
        type:DataTypes.STRING,
        allowNull:false,
        primaryKey:true
    },
    tipo: {
        type:DataTypes.STRING,
    },
    precio: {
        type:DataTypes.INTEGER,
    },
    cant_habitaciones: {
        type:DataTypes.INTEGER,
    },
    cant_banios: {
        type:DataTypes.INTEGER,
    },
    antiguedad: {
        type:DataTypes.INTEGER,
    },
    servicios_adheridos: {
        type:DataTypes.STRING,
    },
    espacios_que_posee: {
        type:DataTypes.INTEGER,
    },
    opcion_contrato: {
        type:DataTypes.STRING,
    },
    direccion: {
        type:DataTypes.STRING,
    },
    artefactos: {
        type:DataTypes.STRING,
    },
    cod_postal: {
        type:DataTypes.INTEGER,
    },
    breve_Descripcion_propiedad: {
        type:DataTypes.STRING(4000),
    },
    descripcion_detallada_propiedad: {
        type:DataTypes.STRING(4000),
    },

    image:{
        type: DataTypes.BLOB
    },
    dni_cliente: {
        type:DataTypes.INTEGER,
    },

}, {
    timestamps: false,
});

module.exports= Propiedades
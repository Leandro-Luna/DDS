const {sequelize}=require('../db.js')
const { DataTypes } = require('sequelize');

const Usuarios= sequelize.define('usuarios', {
        nombre: {
            type:DataTypes.STRING,
        },
        apellido: {
            type:DataTypes.STRING,
        },
        dni: {
            type:DataTypes.INTEGER,
            primaryKey:true
        },
        puesto_trabajo: {
            type:DataTypes.STRING,
        },
        telefono: {
            type:DataTypes.BIGINT,
        },
        telefono_alternativo: {
            type:DataTypes.BIGINT,
        },
        correo: {
            type:DataTypes.STRING,
        },
        nombre_usuario: {
            type:DataTypes.STRING,
        },
        contraseña: {
            type:DataTypes.STRING,
        }

    }, {
        timestamps: false,
    });

module.exports=Usuarios





require('dotenv').config();
const {Sequelize}=require('sequelize')
const {DB_USER,DB_PASSWORD,DB_HOST,DB_NAME, DB_PORT}=process.env

const sequelize= new Sequelize(`Server=tcp:inmobiliariadomus.database.windows.net,1433;Initial Catalog=InmobiliariaDomus;Persist Security Info=False;User ID=UTN2022-TPIDDSG3;Password={Grupo3DDS2022};MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;`, {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  });

module.exports= {sequelize}
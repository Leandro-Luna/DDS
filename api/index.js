
const app=require('./src/app.js')
const {sequelize}=require("./src/db.js")
const {PORT}=process.env
//sync nos permite sincronizar todos los modelos con la base de datos que hayamos especificado
sequelize.sync({force:false}).then(
    ()=>{
        app.listen(PORT,()=>{
            console.log(`listen on port ${PORT}`)
        })
    }
)


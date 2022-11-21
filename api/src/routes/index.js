const { Router }=require("express");
const Usuarios = require('../models//usuarios.js')
const Cliente = require('../models/cliente.js')
const Propiedades=require('../models/propiedades.js')
const router= Router();

const multer= require('multer')
const path= require('path')
const fs=require('fs')
//---------------------------ALTA PROPIEDADES------------------------------------------

const diskstorage= multer.diskStorage({
    destination: path.join(__dirname, '../images'),
    filename: (req, file, cb)=>{
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const fileUpload= multer({
    storage: diskstorage,
}).single('image')
//
router.get('/propiedades',async (req,res)=>{
    const all=await Propiedades.findAll()
    const {cod_inmueble,id}=req.query
    if(id) {
        const propiedad= await Propiedades.findOne({
            where:{
                cod_inmueble:[id]
            }
        })
        if(propiedad) return res.send(true)
        else return res.send(propiedad)
    }


    if (cod_inmueble){
        const propiedad= await Propiedades.findOne({
            where:{
                cod_inmueble:[cod_inmueble]
            }
        })
        if (propiedad){

            const cliente=await Cliente.findOne({
                where:{
                    dni_cliente:propiedad.dni_cliente
                }
            })

            if(cliente){
              return  res.send({propiedad,cliente})
            }

           
        }
    }else{
        all.map(element=>{
            fs.writeFileSync(path.join(__dirname, '../dbImages/' + element.cod_inmueble + `tpi.png`), element.image)

        })
        const imageDir= fs.readdirSync(path.join(__dirname, '../dbImages/'))
        const propiedadesImages={all,imageDir}

        res.send(propiedadesImages) 
    }

})


router.post('/propiedades', fileUpload, async (req,res)=>{

    
    const type=req.file.mimetype
    const name=req.file.originalname
    const data=fs.readFileSync(path.join(__dirname, '../images/' + req.file.filename))


    const {cod_inmueble,
        tipo,
        precio,
        cant_habitaciones,
        cant_banios,
        antiguedad,
        servicios_adheridos,
        espacios_que_posee,
        opcion_contrato,
        direccion,
        artefactos,
        cod_postal,
        breve_Descripcion_propiedad,
        descripcion_detallada_propiedad,
        dni_cliente,
        nombre_cliente,
        apellido_cliente,
        tipo_cliente,
        telefono_cliente,
        direccion_cliente,
        correo_cliente,
    }=req.body   
        
    const id= await Propiedades.findOne({
        where:{
            cod_inmueble:[cod_inmueble]
        }
    })
    let final_cod=0
    if (id){
       final_cod= Math.floor(Math.random() * 1000)
    }else        final_cod= cod_inmueble

    await Propiedades.create({
        cod_inmueble: final_cod,
        tipo,
        precio:parseInt(precio),
        cant_habitaciones:parseInt(cant_habitaciones),
        cant_banios:parseInt(cant_banios),
        antiguedad:parseInt(antiguedad),
        servicios_adheridos,
        espacios_que_posee:parseInt(espacios_que_posee),
        opcion_contrato,
        direccion,
        artefactos,
        cod_postal:parseInt(cod_postal),
        breve_Descripcion_propiedad,
        descripcion_detallada_propiedad,
        image:data,
        dni_cliente
    })
    const clienteCreado=await Cliente.findOne({
        where:{
            dni_cliente:dni_cliente
        }
    })
    if(!clienteCreado){
        await Cliente.create({
            dni_cliente,
            nombre_cliente,
            apellido_cliente,
            tipo_cliente,
            telefono_cliente,
            direccion_cliente,
            correo_cliente,
        })
 
    }





    const all=await Propiedades.findAll()
    res.send(all) 
})
//---------------------------VERIFICACION Y ALTA CLIENTE------------------------------------------
 router.get('/cliente',async (req,res)=>{
    const {dni}=req.query
    const cliente=await Cliente.findOne({
        where:{
            dni_cliente:[dni]
        }
    })
    
    if (cliente) res.send(cliente)
    else res.send(false)

})
 
router.post('/cliente',async (req,res)=>{
    const {input}=req.body
    if (input){
        var {
            dni_cliente,
            numero_cliente,
            nombre_cliente,
            apellido_cliente,
            tipo_cliente,
            telefono_cliente,
            direccion_cliente,
            correo_cliente,
        }=input
    }
    
  
    await Cliente.create({
        dni_cliente,
        numero_cliente,
        nombre_cliente,
        apellido_cliente,
        tipo_cliente,
        telefono_cliente,
        direccion_cliente,
        correo_cliente,
    })
        res.send(true)
    


})









//---------------------------ALTA EMPLEADOS------------------------------------------

router.get('/empleados',async(req,res)=>{
    const {dni}=req.query
    if (dni){
        const empleado=await Usuarios.findOne({
            where:{
                dni:dni
            }
        })
        if(empleado) res.send(true)
        else res.send(false)
    }else {
        const empleados= await Usuarios.findAll()
        res.send(empleados)
    }

})
router.post('/empleados',async(req,res)=>{
    const {input}=req.body
    const {nombre,
        apellido,
        dni,
        puesto_trabajo,
        telefono,
        telefono_alternativo,
        correo,
        nombre_usuario,
        contraseña
    }=input
    const nombreFinal=nombre[0].toUpperCase()+nombre.slice(1)
    const apellidoFinal=apellido[0].toUpperCase()+apellido.slice(1)
    const emp=await Usuarios.findOne({
        where:{
            dni:[dni]
        }
    })
    if (!emp){
        await Usuarios.create({
            nombre:nombreFinal,
            apellido:apellidoFinal,
            dni,
            puesto_trabajo,
            telefono,
            telefono_alternativo,
            correo,
            nombre_usuario,
            contraseña,
            cod_inmueble:0213
        })
    }else return res.status(400).send('El dni ya existe')

    
})
module.exports = router;
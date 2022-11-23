
import React, { useState } from 'react';
import axios from 'axios'
import { Link  } from 'react-router-dom'
import './AgregarPropiedad.css'
import { useNavigate } from 'react-router-dom';

const verificacion=(input)=>{
       let error={}
        if ( input.cod_inmueble==='') error.cod_inmueble=[true,'Codigo inmueble']
        if ( input.tipo==='') error.tipo=[true,'Tipo de inmueble']
        if ( input.precio===0) error.precio=[true,'Precio']
        if ( input.cant_habitaciones===0) error.cant_habitaciones=[true,'Cantidad de habitaciones']
        if ( input.cant_banios===0) error.cant_banios=[true,'Cantidad de baños']
        if ( input.antiguedad===0) error.antiguedad=[true,'Antiguedad']
        if ( input.servicios_adheridos==='') error.servicios_adheridos=[true,'Servicios Adheridos']
        if ( input.espacios_que_posee===0) error.espacios_que_posee=[true,'Espacios que posee']
        if ( input.opcion_contrato==='') error.opcion_contrato=[true,'Opción de contrato']
        if ( input.direccion==='') error.direccion=[true,'Direccion']
        if ( input.artefactos==='') error.artefactos=[true,'Artefactos']
        if ( input.cod_postal===0) error.cod_postal=[true,'Codigo Postal']
        if ( input.breve_Descripcion_propiedad==='') error.breve_Descripcion_propiedad=[true,'Descripcion de propiedad']
        if ( input.descripcion_detallada_propiedad==='') error.descripcion_detallada_propiedad=[true,'Descripcion detallada']
        if ( input.dni_cliente===0) error.dni_cliente=[true,'Dni cliente']
        if ( input.nombre_cliente==='') error.nombre_cliente=[true,'Nombre cliente']
        if ( input.tipo_cliente==='') error.tipo_cliente=[true,'Tipo cliente']
        if ( input.apellido_cliente==='') error.apellido_cliente=[true,'Apellido cliente']
        if ( input.telefono_cliente===0) error.telefono_cliente=[true,'Telefono cliente']
        if ( input.direccion_cliente==='') error.direccion_cliente=[true,'Direccion cliente']
        if ( input.correo_cliente==='' || !input.correo_cliente.includes('@') || !input.correo_cliente.includes('.') ) error.correo_cliente=[true,'Correo cliente invalido']

          return error
}




const AgregarPropiedad = () => {
        const navigate = useNavigate(); //Movernos de pantallaa a pantalla

        const [verificar,setVerificar]=useState(0)
        //0: no se hizo la verificacion
        //1: el cliente no esta registrado
        //2: el cliente esta registrado



        const [input, setInput]= useState({      //ESTADO para guardar TODO
                cod_inmueble:'',
                tipo:'',
                precio:0,
                cant_habitaciones:0,
                cant_banios:0,
                antiguedad:0,
                servicios_adheridos:'',
                espacios_que_posee:0,
                opcion_contrato:'',
                direccion:'',
                artefactos:'',
                cod_postal:0,
                breve_Descripcion_propiedad:'',
                descripcion_detallada_propiedad:'',
                dni_cliente:0,
                numero_cliente:0,
                nombre_cliente:'',
                tipo_cliente:'',
                apellido_cliente:'',
                telefono_cliente:0,
                direccion_cliente:'',
                correo_cliente:'',
                
        })
        const [cliente,setCliente]=useState({ //ESTADO para guardar TODO DEL CLIENTE
                dni_cliente:0,
                numero_cliente:0,
                nombre_cliente:'',
                tipo_cliente:'',
                apellido_cliente:'',
                telefono_cliente:0,
                direccion_cliente:'',
                correo_cliente:'',
        })
        
        const [file,setFile]=useState(null)

        
        const onClickVerificar=async (e)=>{
                e.preventDefault()
                if(cliente.dni_cliente!==''){
                        const info= await axios.get(`http://localhost:3001/cliente?dni=${cliente.dni_cliente}`) //Peticion al backend
                        if(info.data){ //SI TIENE ALGO
                                
                                setCliente({
                                        dni_cliente:info.data.dni_cliente,
                                        numero_cliente:info.data.numero_cliente,
                                        nombre_cliente:info.data.nombre_cliente,
                                        tipo_cliente:info.data.tipo_cliente,
                                        apellido_cliente:info.data.apellido_cliente,
                                        telefono_cliente:info.data.telefono_cliente,
                                        direccion_cliente:info.data.direccion_cliente,
                                        correo_cliente:info.data.correo_cliente, 
                                })
                                setInput({
                                        ...input,
                                        dni_cliente:info.data.dni_cliente,
                                        numero_cliente:info.data.numero_cliente,
                                        nombre_cliente:info.data.nombre_cliente,
                                        tipo_cliente:info.data.tipo_cliente,
                                        apellido_cliente:info.data.apellido_cliente,
                                        telefono_cliente:info.data.telefono_cliente,
                                        direccion_cliente:info.data.direccion_cliente,
                                        correo_cliente:info.data.correo_cliente, 
                                })
                                alert('El cliente ya se encuentra registrado.')
                                setVerificar(2)

                        }else{
                                alert('El cliente no se encuentra registrado, complete los datos.')
                                setInput({
                                        ...input,
                                        dni_cliente:0,
                                        numero_cliente:0,
                                        nombre_cliente:'',
                                        tipo_cliente:'',
                                        apellido_cliente:'',
                                        telefono_cliente:0,
                                        direccion_cliente:'',
                                        correo_cliente:'', 
                                })
                                setVerificar(1)
                        }
                }else alert('Inserte DNI')

        }
 

        
        const onChangeCliente=(e)=>{            //asociado a cualquier cambio del input de cliente
                e.preventDefault()
                setCliente({
                        ...cliente,
                        [e.target.name]:e.target.value
                })
        }


        const onChangeFile=(e)=>{
                setFile(e.target.files[0])
        }
        const onChangeInput=async (e)=>{
                e.preventDefault()
                if(e.target.name==='cod_inmueble'){
                        if(!isNaN(parseInt(e.target.value) || e.target.value==='') ){ //DEJA ESCRIBIR SOLO 3 NUMEROS
                                setInput({
                                        ...input,
                                        [e.target.name]:e.target.value
                                }) 
                        }
                }else{
                 setInput({
                        ...input,
                        [e.target.name]:e.target.value
                })     
                }

        }
        const onSubmitInput= async (e)=>{
                e.preventDefault()
                let bandera=false //Agregar la coma
                input.dni_cliente=cliente.dni_cliente
                let error=verificacion(input)
                let salida='Tiene los siguientes errores:  '
                
                for (const prop in error){  //VERIFICA los datos

                        if(error[prop][0]){
                                if(!bandera){
                                        salida=salida+' '+error[prop][1]
                                        bandera=true
                                }else  salida=salida+', '+error[prop][1]
                        }
                }
               


                if(salida!=='Tiene los siguientes errores:  '){
                      return  alert(salida)
                }else {
                        if (!file){
                        alert('Necesitas subir una foto')  //Controla que necesita una imagen si o si
                        
                        }else {
                                const info=await axios.get(`http://localhost:3001/propiedades?id=${input.cod_inmueble}`)

                                if(info.data) return alert('El codigo de inmueble ya esta ocupado') //SI me devuelve un TRUE significa que existe el cod_inmueble
                                else {
                                    const formdata= new FormData()
                                    formdata.append('image', file)
                                for (const data in input) { //Anexa al objeto que tiene la iamgen, los demas datos de la pripiedad y del cliente, de a uno
                                        formdata.append(`${[data]}`,input[data])
                                } 
                                fetch('http://localhost:3001/propiedades', {
                                        method: 'POST',
                                        body: formdata,
                                        
                                })
                                .then(res=>res.text())
                                .then(res=>console.log(res)) //Muestra la respuesta
                                .catch(err=>console.error(err)) //muestra si hay un error
                                
                                document.getElementById('fileinput').value=null 

                                setFile(null)
                                }
                                alert('Propiedad creada con exito')
                                navigate('/MenuAgentes')
                        }    
                 }
                                
                
                
        }
    return (
      <div className='fondo-form-propiedad'>
            <div className='cuadro-Formulario-Añadir'>
                    <div  className='titulo-formulario-Añadir '>
                            <h1> Completar datos para la nueva propiedad </h1>
                    </div>  
                          <div className='cuerpo-formulario-Añadir'>
                                <div className='cuerpo-formulario-Añadir-sup'>
                                        <div className='cuerpo-form-izq-propiedad'>
                                                
                                        <form method='POST' className='cuerpo-form-izq-formulario-propiedad'>
                                               
                                                <label> Código del inmueble:</label>
                                                <input type='text' name='cod_inmueble' minLength='3' maxLength='3'  value={input.cod_inmueble} onChange={(e)=>onChangeInput(e)} required></input>
                    
                                               
                                                <label>Tipo: </label>
                                                <select name="tipo" defaultValue='choose'  onChange={(e)=>onChangeInput(e)} className='selectAltura'>
                                                        <option value='choose' disabled>Opciones</option>
                                                        <option value='Departamento'>Departamento</option>
                                                        <option value='Casa'>Casa</option>
                                                        <option value='Chalet'>Chalet</option>
                                                        <option value='Local'>Local</option>
                                                        <option value='Casa con local'>Casa con local</option>
                                                        <option value='Cabania'>Cabaña</option>
                                                        <option value='Cochera'>Cochera</option>
                                                </select>
                                
                                                <label>Precio total:</label>
                                                <input type='number' name='precio'   onChange={(e)=>onChangeInput(e)}required></input>

                                                <label>Cantidad de habitaciones:</label>
                                                <input type='number' name='cant_habitaciones'  onChange={(e)=>onChangeInput(e)} required></input>

                                                <label>Cantidad de baños:</label>
                                                <input type='number' name='cant_banios'  onChange={(e)=>onChangeInput(e)} required></input>

                                                <label>Antigüedad:</label>
                                                <input type='number' name='antiguedad'  onChange={(e)=>onChangeInput(e)}required></input>

                                                <label>Servicios adheridos:</label>
                                                <input type='text' name='servicios_adheridos' value={input.servicios_adheridos} onChange={(e)=>onChangeInput(e)}required></input>

                                        </form>    
                                        </div>
                                        <div className='cuerpo-form-medio-propiedad'>
                                        <form method='POST' className='cuerpo-form-izq-formulario-propiedad'>
                                                
                                               
                                        <label>Espacios con los que cuenta:</label>
                                               <input type='number' name='espacios_que_posee'  onChange={(e)=>onChangeInput(e)} required></input>
                                                
                                                
                                               <label>Opciones de contrato:</label>
                                               <select name="opcion_contrato" defaultValue='choose'  onChange={(e)=>onChangeInput(e)} className='selectAltura' >
                                                       <option value='choose' disabled>Opciones</option>
                                                       <option value='Venta'>Venta</option>
                                                       <option value='Alquiler'>Alquiler</option>
                                               </select>

                                               <label>Dirección:</label>
                                               <input type='text' name='direccion' value={input.direccion} onChange={(e)=>onChangeInput(e)} required></input>



                                               <label>Artefactos con los que cuenta:</label>
                                               <input type='text' name='artefactos'value={input.artefactos} onChange={(e)=>onChangeInput(e)} required></input>

                                               <label>Código postal:</label>
                                               <input type='number' name='cod_postal' onChange={(e)=>onChangeInput(e)} required></input>

                                               <label>Foto de presentación:</label>
                                                <input type='file' id='fileinput'  onChange={onChangeFile}required></input>
                                                
                                                <label> DNI de cliente: </label>
                                                <input type='number' name='dni_cliente' onChange={(e=> onChangeCliente(e) )} required></input>

                                               

                                        </form>    
                                        </div>
                                        <div className='cuerpo-form-dcha-propiedad'>
                                        <form method='POST' className='cuerpo-form-izq-formulario-propiedad'>                                              


                                               {
                                                verificar===0?
                                                <> 
                                                        <label> Nombre: </label>
                                                        <input type='text' name='nombre_cliente'  placeholder='VERIFIQUE DNI' disabled ></input>
                                                </>
                                                : verificar===1?
                                                        <> 
                                                                <label> Nombre: </label>
                                                                <input type='text' name='nombre_cliente'  placeholder='Ingrese datos'  value={input.nombre_cliente} onChange={(e=> onChangeInput(e) )} required></input>
                                                        </>
                                                        :       
                                                        <> 
                                                                <label> Nombre: </label>
                                                                <input type='text' name='nombre_cliente' disabled placeholder={cliente.nombre_cliente}  ></input>
                                                        </>
                                               }
                                                
                                                {
                                                verificar===0?
                                                <> 
                                                        <label> Apellido: </label>
                                                        <input type='text' name='apellido_cliente'  placeholder='VERIFIQUE DNI' disabled ></input>
                                                </>
                                                : verificar===1?
                                                        <> 
                                                                <label> Apellido: </label>
                                                                <input type='text' name='apellido_cliente' placeholder='Ingrese datos' value={input.apellido_cliente} onChange={(e=> onChangeInput(e) )} required></input>                                                        </>
                                                        :       
                                                        <> 
                                                                <label> Apellido: </label>
                                                                <input type='text' name='nombre_cliente' disabled placeholder={cliente.apellido_cliente}  ></input>
                                                        </>
                                               }
                                                
                                                {
                                                verificar===0?
                                                <> 
                                                       <label>Opciones de cliente:</label>
                                                        <select name="tipo_cliente"  defaultValue='choose' className='selectAltura'   >
                                                        <option value='choose' disabled>VERIFIQUE DNI</option>
                                                       
                                                </select> 
                                                </>
                                                : verificar===1?
                                                        <> 
                                                                <label>Opciones de cliente:</label>
                                                                <select name="tipo_cliente"  defaultValue='choose' className='selectAltura'  onChange={(e=> onChangeInput(e) )} >
                                                                        <option value='choose' disabled>Opciones</option>
                                                                        <option value='Corporativo'>Corporativo</option>
                                                                        <option value='Particular'>Particular</option>
                                                                </select>                                                        </>
                                                        :       
                                                        <> 
                                                                <label>Opciones de cliente:</label>
                                                                <input type='text' name='nombre_cliente' disabled placeholder={cliente.tipo_cliente}  ></input>
                                                        </>
                                               }


                                                {       
                                                verificar===0?
                                                <> 
                                                        <label>Teléfono:</label>
                                                        <input type='number' name='telefono_cliente'  placeholder='VERIFIQUE DNI' disabled ></input>
                                                </>
                                                : verificar===1?
                                                        <> 
                                                                <label>Teléfono:</label>
                                                                <input type='number' name='telefono_cliente' placeholder='Ingrese datos'  onChange={(e=> onChangeInput(e) )} required></input>                                                        </>
                                                        :       
                                                        <> 
                                                                <label>Teléfono:</label>
                                                                <input type='number' name='telefono_cliente' disabled placeholder={cliente.telefono_cliente}  ></input>
                                                        </>
                                               }

{       
                                                verificar===0?
                                                <> 
                                                        <label>Dirección de cliente:</label>
                                                        <input type='text' name='direccion_cliente'  placeholder='VERIFIQUE DNI' disabled ></input>
                                                </>
                                                : verificar===1?
                                                        <> 
                                                                <label>Dirección de cliente:</label>
                                                                <input type='text' name='direccion_cliente' placeholder='Ingrese datos' value={input.direccion_cliente} onChange={(e=> onChangeInput(e) )} required></input>                                                        </>
                                                        :       
                                                        <> 
                                                                <label>Dirección de cliente:</label>
                                                                <input type='text' name='direccion_cliente' disabled placeholder={cliente.direccion_cliente}  ></input>
                                                        </>
                                               }
                                                {       
                                                verificar===0?
                                                <> 
                                                        <label>Correo:</label>
                                                        <input type='text' name='correo_cliente'  placeholder='VERIFIQUE DNI' disabled ></input>
                                                </>
                                                : verificar===1?
                                                        <> 
                                                                <label>Correo:</label>
                                                                <input type='text' name='correo_cliente' placeholder='Ingrese datos' value={input.correo_cliente} onChange={(e=> onChangeInput(e) )} required></input>                                                        </>
                                                        :       
                                                        <> 
                                                                <label>Correo:</label>
                                                                <input type='text' name='correo_cliente' disabled placeholder={cliente.correo_cliente}  ></input>
                                                        </>
                                               }
                                                

                                       </form>        
                                        </div>
                                </div>
                                <button className='boton-verificar-dni' onClick={(e)=>onClickVerificar(e)}> Verificar DNI </button>
                                <div className='cuerpo-formulario-Añadir-inf'>
                                        
                                         <form method='POST'>
                                         <label> Breve descripción:</label>
                                         <textarea rows='5' maxLength="4000" type='text' className='descripcionAgregarPropiedad' name='breve_Descripcion_propiedad' value={input.breve_Descripcion_propiedad} onChange={(e)=>onChangeInput(e)}  required></textarea>

                                         <label> Descripción detallada: </label>
                                        <textarea rows='10' maxLength="4000" type='text' className='descripcionAgregarPropiedad' name='descripcion_detallada_propiedad' value={input.descripcion_detallada_propiedad} onChange={(e)=>onChangeInput(e)} required></textarea>

                                        </form>
                                </div>               
                    </div>

            </div>
            
            <div className='btn-container' >  
                        <Link to='/MenuAgentes'><button className='boton-volver-Menu'> Volver al menú </button></Link>
                                      
                        <form  method='POST'>
                                <input className='cuerpo-form-boton' type='submit' onClick={(e)=>onSubmitInput(e)}/>
                        </form>
            </div>


      </div>
    )
  }
  
  export default AgregarPropiedad



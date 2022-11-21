
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './empleadoFormulario.css'
import axios from 'axios'

const EmpFormulario = () => {
        const navigate = useNavigate();
        const [input,setInput]=useState({
                nombre:'',
                apellido:'',
                dni:0,
                puesto_trabajo:'',
                telefono:0,
                telefono_alternativo:0,
                correo:'',
                nombre_usuario:'',
                contraseña:''
        })
        const handlerInput=(e)=>{
                e.preventDefault()
                setInput({
                        ...input,
                        [e.target.name]:e.target.value
                })
        }
        const onSubmit= async(e)=>{
                e.preventDefault()
                try{
                        var info= await axios.get(`http://localhost:3001/empleados?dni=${input.dni}`)
                }catch(error){
                        console.log(error)
                }

                if (info.data===true) alert('El dni ya existe')
                else{
                        try {
                                axios.post('http://localhost:3001/empleados',{input})
                        } catch (error) {
                                console.log(error)
                        }
                        navigate('/menuAdministradorSitio') 
                }

                
        }
    return (
      <div className='fondo-form-emp'>
            <div className='cuadro-form-emp'>
                    <div  className='titulo-form-emp'>
                            <h1> Registrar nuevo empleado </h1>
                    </div>
                    <div className='cuerpo-form-emp'>
                            <form method='POST' className='cuerpo-form-emp-formulario'>
                                    <label> Nombre: </label>
                                    <input type='text' name='nombre' onChange={(e)=>handlerInput(e)} required></input>

                                    <label> Apellido:</label>
                                    <input type='text' name='apellido' onChange={(e)=>handlerInput(e)} required></input>

                                    <label> DNI:</label>
                                    <input type='number' name='dni' onChange={(e)=>handlerInput(e)} required></input>
                                    <label> Puesto de trabajo:</label>
                                        <select name="puesto_trabajo"  defaultValue='choose' className='selectAltura'  onChange={(e=> handlerInput(e) )} >
                                                <option value='choose' disabled>Opciones</option>
                                                <option value='agente_inmobiliario'>Agente inmobiliario</option>
                                                <option value='administrador_sitio'>Administrador del sitio</option>
                                                <option value='secretaria'>Secretaria</option>
                                                <option value='marketing'>Marketing</option>
                                                <option value='jefe_administrativo'>Jefe administrativo</option>
                                                <option value='jefe_comercializacion'>Jefe comercialización</option>
                                                <option value='cajero'>Cajero</option>
                                                <option value='gerente'>Gerente</option>


                                        </select>                   
                                    

                                    <label> Teléfono de contacto:</label>
                                    <input type='number' name='telefono' placeholder="+54" onChange={(e)=>handlerInput(e)} required></input>

                                    <label> Teléfono de contacto alternativo:</label>
                                    <input type='number' name='telefono_alternativo' placeholder="+54" onChange={(e)=>handlerInput(e)} required></input>

                                    <label> Dirección de correo electrénico:</label>
                                    <input type='email' name='correo' placeholder="Nombre@gmail.com" onChange={(e)=>handlerInput(e)} required></input>

                                    <label> Nombre de usuario:</label>
                                    <input type='text' name='nombre_usuario' onChange={(e)=>handlerInput(e)} required></input>

                                    <label> Contraseña:</label>
                                    <input type='password' name='contraseña' onChange={(e)=>handlerInput(e)} required></input>

                                    <button type="submit" onClick={(e)=>onSubmit(e)} className='boton-emp-reg'> Registrar empleado</button>


                            </form>
                    </div>
            </div>
                <div className='btn-volver'>
                        <Link to='/menuAdministradorSitio'><button>Volver al menú</button></Link>
                </div>
      </div>
    )
  }
  
  export default EmpFormulario
  

import React from 'react'
import { useState } from 'react'
import { Link,useParams  } from 'react-router-dom'
import './ingreseDatos.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const IngreseDatos = () => {
  let{dni}=useParams()
  const navigate = useNavigate();

  const [input,setInput]=useState({
    dni_cliente:dni,
    numero_cliente:0,
    nombre_cliente:'',
    tipo_cliente:'',
    apellido_cliente:'',
    telefono_cliente:0,
    direccion_cliente:'',
    correo_cliente:'',
  })

  const onChangeInput=(e)=>{
    e.preventDefault()
    setInput({
      ...input,
      [e.target.name]:e.target.value
    })

  }



  const onSubmit= async(e)=>{
    e.preventDefault()
    await axios.post('http://localhost:3001/cliente',{input})
    navigate('MenuAgentes')
  }
    return (
      <div className='login_container-principal'>
          <div className='cuadro-is'>
              
              <form method='POST' className='cuadro-is-form'>
              <h1 className='cuadro-is-h1'>Verifique DNI del cliente</h1>
              <label> Número de cliente: </label>
                <input type='number' name='numero_cliente'  value={input.numero_cliente} onChange={(e)=>onChangeInput(e)} required></input>

                <label> Nombre </label>
                <input type='text' name='nombre_cliente'   value={input.nombre_cliente} onChange={(e)=>onChangeInput(e)} required></input>
                <label> Apellido: </label>
                <input type='text' name='apellido_cliente' placeholder='VERIFIQUE DNI' value={input.apellido_cliente} onChange={(e)=>onChangeInput(e)} required></input>


        
                <label>Opciones de cliente:</label>
                <select name="tipo_cliente"  defaultValue='choose' className='selectAltura'  onChange={(e)=>onChangeInput(e)} >
                        <option value='choose' disabled>Opciones</option>
                        <option value='Corporativo'>Corporativo</option>
                        <option value='Particular'>Particular</option>
                </select> 


                <label> Teléfono:</label>
                <input type='number' name='telefono_cliente'   value={input.telefono_cliente} onChange={(e)=>onChangeInput(e)} required></input>

                <label> Dirección de cliente:</label>
                <input type='text' name='direccion_cliente' value={input.direccion_cliente} onChange={(e)=>onChangeInput(e)} required></input>

                <label> Correo:</label>
                <input type='text' name='correo_cliente'   value={input.correo_cliente} onChange={(e)=>onChangeInput(e)} required></input>

                                              
                                                


              </form>     
              <div className='auxiliar'>
             
               <button onClick={onSubmit}>finalizar</button>
              </div>
          </div>
      </div>
    )
  }
  
  export default IngreseDatos
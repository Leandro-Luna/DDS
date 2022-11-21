
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import vivienda1 from '../../imagenes/vivienda1.jpg'
import './clienteFormularioReg2.css'
const ClienteFormularioReg = () => {
        let [propiedad,setPropiedad]=useState({})
        let{id}=useParams()
      useEffect(()=>{
        const prop= async (cod)=>{
          const info =await axios.get(`http://localhost:3001/propiedades?cod_inmueble=${cod}`)
          setPropiedad(info.data)
        }
        
        prop(id)
      },[id]) 
    return (
      <div className='fondo-form'>
            <div className='cuadro-form'>
                    <div  className='titulo-form'>
                            <h1> Solicitar cita - Completar formulario </h1>
                            <p> Vivienda #{id} </p>
                    </div>
                    <div className='cuerpo-form'>
                            <div className='cuerpo-form-izq'>
                            <form method='POST' className='cuerpo-form-izq-formularioR'>
                                    

                                    <label> Fecha de cita:</label>
                                    <input type='date' name='Fecha de cita'></input>
                                    <div className='divHora'>
                                        <label> Hora de cita:</label>
                                    <input type='time' name='Hora de cita'></input>
                                    </div>
                                    


                                
                            </form>    
                            </div>
                            <div className='cuerpo-form-dcha'>
                                    <img className='imagen-formulario' src = {`http://localhost:3001/${id}tpi.png`} alt='#' />
                                    <form  method='POST'>
                                            <input className='cuerpo-form-dcha-boton' type='submit' value='Enviar solicitud'></input>
                                    </form>
                            </div>
                           

                           

                    </div>
            </div>
            <div >
                        <Link to={`/verPropiedadReg/${id}`}><button className='boton-volver-propiedad'> Volver a vivienda </button></Link>
            </div>


      </div>
    )
  }
  
  export default ClienteFormularioReg
import React, { useState } from 'react'
import { useEffect } from 'react'

import { Link,useParams  } from 'react-router-dom'
import './AgenteVerPropiedad.css'
import axios from 'axios'

const AgenteVerPropiedad = () => {
  
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
    <div className='fondoverpropiedad' >
        <div className='cuadropropiedad2'>
              <div className='sector1'>
                    <div className='imagenverpropiedad'>
                        <img src = {`http://localhost:3001/${id}tpi.png`} alt='#'  /> 
                    </div> 
                    <div className='datosverpropiedad'>
                        <p className='titulopropiedad'>
                          Vivienda #{id}                                               
                        </p>
                        <div className='datossecundarios'>
                          
                            <p> {propiedad.propiedad?.opcion_contrato}</p>

                            <p> Precio: ${propiedad.propiedad?.precio}</p> 

                            <p> Cantidad de habitaciones: {propiedad.propiedad?.cant_habitaciones} </p>

                            <p> Cantidad de baños: {propiedad.propiedad?.cant_banios}      </p>  

                            <p>Servicios adheridos: {propiedad.propiedad?.servicios_adheridos}</p>

                            <p>Artefactos incluidos: {propiedad.propiedad?.artefactos}</p>    
                                
                            <p> Dirección: {propiedad.propiedad?.direccion}</p>      


                            <p> Nombre cliente: {propiedad.cliente?.nombre_cliente} {propiedad.cliente?.apellido_cliente} </p> 



                            <p> DNI: {propiedad.cliente?.dni_cliente}      </p>  

                            <p>Telefono: {propiedad.cliente?.telefono_cliente}</p>
                            
                            <p>Correo: {propiedad.cliente?.correo_cliente}</p>   

                            <p>Tipo de cliente: {propiedad.cliente?.tipo_cliente}</p>    
                            
                        </div>
                      
                      </div>
              </div>
              <div className='sector2'>
                  <p className='descrip'>
                  Descripción breve:
                  </p>
                  <p>
                  {propiedad.propiedad?.breve_Descripcion_propiedad}
                  </p>
                  <p className='descrip'>
                  Descripción:
                  </p>
                  <p>
                  {propiedad.propiedad?.descripcion_detallada_propiedad}
                  </p>
                  <div className='divbotones2'>
              <Link to='/AgenteCatalogo'><button className='botonDetalle'> Volver al catalogo</button></Link>

              <Link to='/CambiarEstado'><button className='botonDetalle'> Cambiar Estado </button></Link>   
              </div>
              </div>

              


        </div>
              
    </div>
  )
}
  
  export default AgenteVerPropiedad

import React from 'react'
import { Link } from 'react-router-dom'
import './AgregarPropiedad.css'
import vivienda1 from '../../imagenes/vivienda1.jpg'

const AgregarPropiedad = () => {
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
                                                <input type='number' name='CodInmueble' required></input>
                    
                                               
                                                <label>Tipo: </label>
                                                <select name="Tipo"  className='selectAltura'>
                                                        <option>Departamento</option>
                                                        <option>Casa</option>
                                                        <option>Chalet</option>
                                                        <option>Local</option>
                                                        <option>Casa con local</option>
                                                        <option>Cabaña</option>
                                                        <option>Cochera</option>
                                                </select>
                                
                                                <label>Precio total:</label>
                                                <input type='number' name='Precio' required></input>

                                                <label>Cantidad de habitaciones:</label>
                                                <input type='number' name='Habitaciones' required></input>

                                                <label>Cantidad de baños:</label>
                                                <input type='number' name='Baños' required></input>

                                                <label>Antigüedad:</label>
                                                <input type='number' name='Antigüedad' required></input>

                                                <label>Servicios adheridos:</label>
                                                <input type='text' name='Direccion' required></input>

                                        </form>    
                                        </div>



                                        <div className='cuerpo-form-medio-propiedad'>
                                        <form method='POST' className='cuerpo-form-izq-formulario-propiedad'>
                                                
                                               
                                                 <label>Espacios con los que cuenta:</label>
                                                <input type='number' name='Espacios' required></input>
                                                
                                                
                                                <label>Opciones de contrato:</label>
                                                <select name="Tipo"  className='selectAltura' >
                                                        <option>Venta</option>
                                                        <option>Alquiler</option>
                                                </select>

                                                <label>Dirección:</label>
                                                <input type='text' name='Direccion' required></input>



                                                <label>Artefactos con los que cuenta:</label>
                                                <input type='text' name='Artefactos' required></input>

                                                <label>Código postal:</label>
                                                <input type='number' name='CP' required></input>

                                                
                                                <label> Número de cliente: </label>
                                                <input type='number' name='N° Cliente' required></input>

                                                <label> Nombre y apellido: </label>
                                                <input type='text' name='nombre y apellido' required></input>


                                        </form>    
                                        </div>

                                        <div className='cuerpo-form-dcha-propiedad'>
                                        <form method='POST' className='cuerpo-form-izq-formulario-propiedad'>



                                        <label> DNI:</label>
                                                <input type='number' name='DNI' required></input>

                                                <label>Opciones de cliente:</label>
                                                <select name="Tipo" className='selectAltura'>
                                                        <option>Corporativo</option>
                                                        <option>Particular</option>
                                                </select> 


                                                <label> Teléfono:</label>
                                                <input type='number' name='Telefono' required></input>

                                                <label> Dirección de cliente:</label>
                                                <input type='text' name='Dirección' required></input>

                                                <label> Correo:</label>
                                                <input type='email' name='Correo' required></input>

                                              
                                                


                                        </form>             
                                        </div>
                                </div>
                                <div className='cuerpo-formulario-Añadir-inf'>
                                         <form method='POST'>
                                         <label> Breve descripción:</label>
                                                <textarea rows='5'> </textarea>

                                                <label> Descripción detallada: </label>
                                                <textarea rows='10'> </textarea>

                                        </form>
                                </div>

                                       
                    </div>

            </div>
            
            <div className='btn-container' >                                        
                        <form  method='POST'>
                                <input className='cuerpo-form-boton' type='submit' value='Cargar datos'></input>
                        </form>
                        <Link to='/MenuAgentes'><button className='boton-volver-Menu'> Volver al menú </button></Link>
            </div>


      </div>
    )
  }
  
  export default AgregarPropiedad
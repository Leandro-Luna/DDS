import React from 'react'
import { Link } from 'react-router-dom'
import './pagoAlqui.css'

const PagoAlqui = () => {
    return (
      <div className='fondo-form'>
            <div className='cuadro-Formulario-Añadir2'>
                    <div  className='titulo-formulario-Añadir2 '>
                            <h1> Pago de alquiler</h1>
                    </div>  
                              <div className='cuerpo-formulario-Añadir2 '>
                                    <div className='cuerpo-form-izq2'>
                                        <form method='POST' className='cuerpo-form-izq-formulario1'>

                                                <label> Número de transacción: 9999999</label>
                                                <label>Propietario: xxxxxxxxxxxxxxxxxx</label>

                                                <label> Año al que corresponde:</label>
                                                <input type='number' name='año'></input>
                                                <label> Mes al que corresponde: </label>
                                                <input type='number' name='mes'></input>

                                        </form>    
                                    </div>



                                    <div className='cuerpo-form-medio2'>
                                        <form method='POST' className='cuerpo-form-izq-formulario2'>
                                                
                                          <label> Inmueble: 9999999</label>
                                          <label> Inquilino: xxxxxxxxxxxxxxxxxx</label> 
                                          
                                          <label> Forma de pago:</label>
                                          <input type='text' name='Forma de Pago'></input>
                                          <label>Total a pagar:</label>
                                                <input type='number' name='total'></input> 

                                        </form>    
                                    </div>

                                    <div className='cuerpo-form-dcha2'>
                                          <form method='POST' className='cuerpo-form-izq-formulario3'>
                                                <label> Fecha de pago: 99/99/9999</label>
                                                <label> Precio del alquiler: $999999999</label> 
                                                <label> Interés por mora:</label>
                                                <input type='number' name='interes'></input>
                                                <div className='asentar-pago'>
                                                      <Link to='/menuCajera'><button className='btn-asentar'> Asentar pago </button></Link>
                                          </div>
                                          </form>             
                                    </div>
         
                              </div>
            </div>
            
            <div className='btn-volver-pago'>            
                  <Link to='/menuCajera'><button className='btn-volverEmpleado1'> Volver al menú </button></Link>
            </div>
      </div>
    )
  }
  
  export default PagoAlqui

        
  

             
                                                   
                               

   



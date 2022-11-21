import React from 'react'
import { Link } from 'react-router-dom'
import vivienda1 from '../../imagenes/vivienda1.jpg'
import './cambiarEstado.css'

const CambiarEstado = () => {
    return (
      <div className='fondoverpropiedad' >
         <div className='cuadropropiedad-agregar'>
                <div className='sector1'>
                      <div className='imagenverpropiedad'>
                          <img src = {vivienda1}  /> 
                      </div> 
                      <div className='datosverpropiedad'>
                          <p className='titulopropiedad'>
                            Vivienda #99999                                                  
                          </p>
                          <div className='datossecundarios'>
                          
                              <p> Alquiler</p>

                              <p> Precio: $99999.99</p> 

                              <p> Cantidad de habitaciones: 999 </p>

                              <p> Cantidad de baños: 999      </p>  

                              <p> Metros cuadrados cubiertos: 999m2</p>

                              <p> Metros cuadrados superficie: 999m2</p>    
                                  
                              <p> Dirección: Lorem ipsum dolor sit amet. Nam nemo corporis ea reiciendis nostrum et</p>             
                            
                                <div className='contenedor-nuevo-estado'>
                                  <label><strong>Nuevo estado: </strong> </label>
                                  <select name="Tipo"  className='nuevo-estado'>
                                                        <option>Disponible</option>
                                                        <option>No disponible</option>
                                                </select>  
                                </div>
                                  
                                  <div className='btn-enviar-salir' >
                                    <Link to='/AgenteCatalogo'><button className='boton-volver-propiedad'> Enviar y volver </button></Link>
                                  </div>
                          </div>
                         
                        </div>
                </div>
                <div className='sector2'>
                    <p className='descrip'>
                    Descripción:
                    </p>
                    <p>
                    Lorem ipsum dolor sit amet. Nam nemo corporis ea reiciendis nostrum et nesciunt itaque non labore enim ut aliquam molestiae. 
                    Aut quis quos vel amet doloremque sed molestiae rerum et ipsa praesentium non eveniet omnis! Ut neque veritatis in provident 
                    eius ea dolore voluptatem qui consequatur nisi sit dolorem velit aut pariatur sequi! Sit magni harum aut aperiam consequatur 
                    est dolorem laborum qui galisum aspernatur ut incidunt sunt.
                    Ab explicabo eius ut dolorem omnis ea fuga atque. Aut voluptas vitae aut autem magni vel repellendus. Ab provident 
                    repudiandae eum dolor et inventore autem?
                    Ex quia fuga et rerum voluptatem eos impedit eaque est eligendi delectus nam quia aperiam aut deserunt 
                    amet qui dolorem odio! Ab tempore magnam eum nesciunt officia id molestias consequatur ut voluptatibus quas est 
                    consequatur commodi ut earum ipsam ut quia architecto.
                    Lorem ipsum dolor sit amet. Nam nemo corporis ea reiciendis nostrum et nesciunt itaque non labore enim ut aliquam molestiae. 
                    Aut quis quos vel amet doloremque sed molestiae rerum et ipsa praesentium non eveniet omnis! Ut neque veritatis in provident 
                    eius ea dolore voluptatem qui consequatur nisi sit dolorem velit aut pariatur sequi! Sit magni harum aut aperiam consequatur 
                    est dolorem laborum qui galisum aspernatur ut incidunt sunt.
                    Ab explicabo eius ut dolorem omnis ea fuga atque. Aut voluptas vitae aut autem magni vel repellendus. Ab provident 
                    repudiandae eum dolor et inventore autem?
                    Ex quia fuga et rerum voluptatem eos impedit eaque est eligendi delectus nam quia aperiam aut deserunt 
                    amet qui dolorem odio! Ab tempore magnam eum nesciunt officia id molestias consequatur ut voluptatibus quas est 
                    consequatur commodi ut earum ipsam ut quia architecto.
                    </p>
                </div>


         </div>
               
      </div>
    )
  }
  
  export default CambiarEstado
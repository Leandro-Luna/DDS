import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './modificarImagenProp.css'
import vivienda1 from '../../imagenes/vivienda1.jpg'

const ModificarImagenProp = () => {
  const [eliminar,setEliminar]=useState(false)
  const handleEliminar=()=>{
      setEliminar((prev)=>!prev)
  }
  const [eliminarImg,setEliminarImg]=useState(false)
  const handleEliminarImg=()=>{
      setEliminarImg((prev)=>!prev)
  }
    return (
      
      <div className='fondoverpropiedad' >
                      {eliminar &&  <div className='eliminar-img-fondo'>
                            <div className='eliminar-img-cuadro'>
                                    <div className='eliminar-img-cuadro-sup'>
                                        <div className='eliminar-img-cuadro-sup-text'> <p>Seleccione imagen/video que desea eliminar</p></div>
                                        <button className='eliminar-img-cuadro-cerrar' onClick={handleEliminar}>X</button>
                                    </div>
                                    <div className='eliminar-img-cuadro-inf'>
                                            <table className='eliminar-img-cuadro-inf-tabla'>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <button onClick={handleEliminarImg}><img src = {vivienda1} /> </button>
                                                        </td>
                                                        <td>
                                                            <button onClick={handleEliminarImg}><img src = {vivienda1} /> </button>
                                                        </td>
                                                        <td>
                                                            <button onClick={handleEliminarImg}><img src = {vivienda1} /> </button>
                                                        </td>
                                                        <td>
                                                            <button onClick={handleEliminarImg}><img src = {vivienda1} /> </button>
                                                        </td>
                                                       
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <button onClick={handleEliminarImg}><img src = {vivienda1} /> </button>
                                                        </td>
                                                        <td>
                                                            <button onClick={handleEliminarImg}><img src = {vivienda1} /> </button>
                                                        </td>
                                                        <td>
                                                            <button onClick={handleEliminarImg}><img src = {vivienda1} /> </button>
                                                        </td>
                                                        <td>
                                                            <button onClick={handleEliminarImg}><img src = {vivienda1} /> </button>
                                                        </td>
                                                        
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <button onClick={handleEliminarImg}><img src = {vivienda1} /> </button>
                                                        </td>
                                                        <td>
                                                            <button onClick={handleEliminarImg}><img src = {vivienda1} /> </button>
                                                        </td>
                                                        <td>
                                                            <button onClick={handleEliminarImg}><img src = {vivienda1} /> </button>
                                                        </td>
                                                       
                                                        
                                                    </tr>
                                                </tbody>
                                            </table>
                                        
                                    </div>    
                                </div>     
                            </div>}

                            {eliminarImg &&  <div className='eliminar-img-conf-fondo'>
                            <div className='eliminar-img-conf-cuadro'>
                                    <div className='eliminar-img-conf-cuadro-sup'>
                                        <button className='eliminar-img-conf-cuadro-cerrar' onClick={handleEliminarImg}>X</button>
                                    </div>
                                    <div className='eliminar-img-conf-cuadro-inf'>
                                        <div className='eliminar-img-conf-cuadro-inf-pregunta'><p>¿Está seguro de que desea eliminar la imagen?</p></div>
                                            <div className='eliminar-img-conf-cuadro-inf-opcion'>
                                                <input type='submit' value='Confirmar'></input>
                                                <button onClick={handleEliminarImg}> Cancelar</button>
                                            </div>
                                        
                                    </div>    
                                </div>     
                            </div>}
         <div className='cuadropropiedad'>
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
                          </div>
                          <div className='renglon-botones'>
                                  <div className='renglon-botones-izq'>
                                      <form method='POST'>
                                          <div class="file-select" id="src-file1" >
                                              <input type="file" name="src-file1" aria-label="Archivo" accept="image/*,video/*" multiple/>
                                          </div>
                                      </form>
                                  </div>
                                  <div className='renglon-botones-der'>
                                      <button id='renglon-botones-der-elim' onClick={handleEliminar}>Eliminar imagenes/videos</button>
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
  
  export default ModificarImagenProp
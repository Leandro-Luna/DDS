import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './verSolicitudCitaSec.css'
import '../asignarAgenteSec/asignarAgenteSec.css'
import '../modificarCitaSec/modificarCitaSec.css'
import '../eliminarCitaSec/eliminarCitaSec.css'

const VerSolicitudCitaSec = () => {
    const [agregarAgente,setAgregarAgente]=useState(false)
    const handleAgregarAgente=()=>{
        setAgregarAgente((prev)=>!prev)
    }
    const [modificarCita,setModificarCita]=useState(false)
    const handleModificarCita=()=>{
        setModificarCita((prev)=>!prev)
    }
    const [eliminarCita,setEliminarCita]=useState(false)
    const handleEliminarCita=()=>{
        setEliminarCita((prev)=>!prev)
    }
    return (
      <div className='login_container-cita'>
                            {agregarAgente &&  <div className='agregar-agente-fondo'>
                                        <div className='agregar-agente-cuadro'>
                                            <div className='agregar-agente-cuadro-sup'>
                                            <button className='agregar-agente-cuadro-cerrar' onClick={handleAgregarAgente}>X</button>
                                            </div>
                                            <div className='agregar-agente-cuadro-inf'>
                                            <form method='POST' className='agregar-agente-form'>
                                                <label> Nombre agente inmobiliario: </label>
                                                <select name="Nombre agente">
                                                        <option>Nombre agente 1</option>
                                                        <option>Nombre agente 2</option>
                                                        <option>Nombre agente 3</option>
                                                        <option>Nombre agente 4</option>
                                                        <option>Nombre agente 5</option>
                                                </select>
                                                <input type='submit' value='Asignar agente'></input>                    
                                            </form>
                                            </div>    
                                        </div>     
                                </div>}
                            {modificarCita &&  <div className='modificar-cita-fondo'>
                                    <div className='modificar-cita-cuadro'>
                                        <div className='modificar-cita-cuadro-sup'>
                                        <button className='modificar-cita-cuadro-cerrar' onClick={handleModificarCita}>X</button>
                                        </div>
                                        <div className='modificar-cita-cuadro-inf'>
                                        <form method='POST' className='modificar-cita-form'>
                                            <div className='modificar-cita-form-renglon'>
                                                <label> Nombre agente inmobiliario: </label>
                                                <select name="Nombre agente">
                                                        <option>Nombre agente 1</option>
                                                        <option>Nombre agente 2</option>
                                                        <option>Nombre agente 3</option>
                                                        <option>Nombre agente 4</option>
                                                        <option>Nombre agente 5</option>
                                                </select>
                                            </div>
                                            <div className='modificar-cita-form-renglon'>
                                                <label> Fecha: </label>
                                                <input type='date' name='Fecha de cita'></input>
                                            </div>
                                            <div className='modificar-cita-form-renglon'>
                                                <label> Hora: </label>
                                                <input type='time' name='Hora de cita'></input>
                                            </div>
                                            <input type='submit' value='Guardar cambios' className='modificar-cita-form-guardar'></input>                    
                                        </form>
                                        </div>    
                                    </div>     
                            </div>}
                            {eliminarCita &&  <div className='eliminar-cita-fondo'>
                                    <div className='eliminar-cita-cuadro'>
                                        <div className='eliminar-cita-cuadro-sup'>
                                        <button className='eliminar-cita-cuadro-cerrar' onClick={handleEliminarCita}>X</button>
                                        </div>
                                        <div className='eliminar-cita-cuadro-inf'>
                                            <div className='eliminar-cita-cuadro-inf-pregunta'><p>¿Está seguro de que desea eliminar la cita?</p></div>
                                        <div className='eliminar-cita-cuadro-inf-opcion'>
                                            <input type='submit' value='Confirmar'></input>
                                            <button onClick={handleEliminarCita}> Cancelar</button>
                                        </div>
                                        </div>    
                                    </div>     
                            </div>}
            <div className='solicitud-cita-sec-cuadro'>     
                <div className='solicitud-cita-sec-cuadro-titulo'>
                    <h1>Solicitudes de citas</h1>
                </div>
                <div className='solicitud-cita-sec-cuadro-datos'>
                    <table className='solicitud-cita-sec-tabla'>
                        <tbody>
                            <tr className='solicitud-cita-sec-tabla-titulo'>
                                <th>DNI cliente</th>
                                <th>Fecha</th>
                                <th>Hora</th>
                                <th>Agente asignado</th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                            <tr>
                                <td>99.999.999</td>
                                <td>99/99/9999</td>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxxxxxxxxxxxx</td>
                                <td><button className='solicitud-cita-sec-tabla-agregar' onClick={handleAgregarAgente}>Asignar agente</button></td>
                                <td><button className='solicitud-cita-sec-tabla-modificar' onClick={handleModificarCita}>Modificar cita</button ></td>
                                <td><button className='solicitud-cita-sec-tabla-eliminar' onClick={handleEliminarCita}>Eliminar cita</button></td>
                            </tr>
                            <tr>
                                <td>99.999.999</td>
                                <td>99/99/9999</td>
                                <td>99:99hs</td>
                                <td>-</td>
                                <td><button className='solicitud-cita-sec-tabla-agregar' onClick={handleAgregarAgente}>Asignar agente</button></td>
                                <td><button className='solicitud-cita-sec-tabla-modificar' onClick={handleModificarCita}>Modificar cita</button ></td>
                                <td><button className='solicitud-cita-sec-tabla-eliminar' onClick={handleEliminarCita}>Eliminar cita</button></td>
                            </tr>
                            <tr>
                                <td>99.999.999</td>
                                <td>99/99/9999</td>
                                <td>99:99hs</td>
                                <td>-</td>
                                <td><button className='solicitud-cita-sec-tabla-agregar' onClick={handleAgregarAgente}>Asignar agente</button></td>
                                <td><button className='solicitud-cita-sec-tabla-modificar' onClick={handleModificarCita}>Modificar cita</button ></td>
                                <td><button className='solicitud-cita-sec-tabla-eliminar' onClick={handleEliminarCita}>Eliminar cita</button></td>
                            </tr>
                            <tr>
                                <td>99.999.999</td>
                                <td>99/99/9999</td>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxxxxxxxxxxxx</td>
                                <td><button className='solicitud-cita-sec-tabla-agregar' onClick={handleAgregarAgente}>Asignar agente</button></td>
                                <td><button className='solicitud-cita-sec-tabla-modificar' onClick={handleModificarCita}>Modificar cita</button ></td>
                                <td><button className='solicitud-cita-sec-tabla-eliminar' onClick={handleEliminarCita}>Eliminar cita</button></td>
                            </tr>
                            <tr>
                                <td>99.999.999</td>
                                <td>99/99/9999</td>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxxxxxxxxxxxx</td>
                                <td><button className='solicitud-cita-sec-tabla-agregar' onClick={handleAgregarAgente}>Asignar agente</button></td>
                                <td><button className='solicitud-cita-sec-tabla-modificar' onClick={handleModificarCita}>Modificar cita</button ></td>
                                <td><button className='solicitud-cita-sec-tabla-eliminar' onClick={handleEliminarCita}>Eliminar cita</button></td>
                            </tr>
                            <tr>
                                <td>99.999.999</td>
                                <td>99/99/9999</td>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxxxxxxxxxxxx</td>
                                <td><button className='solicitud-cita-sec-tabla-agregar' onClick={handleAgregarAgente}>Asignar agente</button></td>
                                <td><button className='solicitud-cita-sec-tabla-modificar' onClick={handleModificarCita}>Modificar cita</button ></td>
                                <td><button className='solicitud-cita-sec-tabla-eliminar' onClick={handleEliminarCita}>Eliminar cita</button></td>
                            </tr>  <tr>
                                <td>99.999.999</td>
                                <td>99/99/9999</td>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxxxxxxxxxxxx</td>
                                <td><button className='solicitud-cita-sec-tabla-agregar' onClick={handleAgregarAgente}>Asignar agente</button></td>
                                <td><button className='solicitud-cita-sec-tabla-modificar' onClick={handleModificarCita}>Modificar cita</button ></td>
                                <td><button className='solicitud-cita-sec-tabla-eliminar' onClick={handleEliminarCita}>Eliminar cita</button></td>
                            </tr>
                            <tr>
                                <td>99.999.999</td>
                                <td>99/99/9999</td>
                                <td>99:99hs</td>
                                <td>-</td>
                                <td><button className='solicitud-cita-sec-tabla-agregar' onClick={handleAgregarAgente}>Asignar agente</button></td>
                                <td><button className='solicitud-cita-sec-tabla-modificar' onClick={handleModificarCita}>Modificar cita</button ></td>
                                <td><button className='solicitud-cita-sec-tabla-eliminar' onClick={handleEliminarCita}>Eliminar cita</button></td>
                            </tr>
                            <tr>
                                <td>99.999.999</td>
                                <td>99/99/9999</td>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxxxxxxxxxxxx</td>
                                <td><button className='solicitud-cita-sec-tabla-agregar' onClick={handleAgregarAgente}>Asignar agente</button></td>
                                <td><button className='solicitud-cita-sec-tabla-modificar' onClick={handleModificarCita}>Modificar cita</button ></td>
                                <td><button className='solicitud-cita-sec-tabla-eliminar' onClick={handleEliminarCita}>Eliminar cita</button></td>
                            </tr>  <tr>
                                <td>99.999.999</td>
                                <td>99/99/9999</td>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxxxxxxxxxxxx</td>
                                <td><button className='solicitud-cita-sec-tabla-agregar' onClick={handleAgregarAgente}>Asignar agente</button></td>
                                <td><button className='solicitud-cita-sec-tabla-modificar' onClick={handleModificarCita}>Modificar cita</button ></td>
                                <td><button className='solicitud-cita-sec-tabla-eliminar' onClick={handleEliminarCita}>Eliminar cita</button></td>
                            </tr>
                            <tr>
                                <td>99.999.999</td>
                                <td>99/99/9999</td>
                                <td>99:99hs</td>
                                <td>-</td>
                                <td><button className='solicitud-cita-sec-tabla-agregar' onClick={handleAgregarAgente}>Asignar agente</button></td>
                                <td><button className='solicitud-cita-sec-tabla-modificar' onClick={handleModificarCita}>Modificar cita</button ></td>
                                <td><button className='solicitud-cita-sec-tabla-eliminar' onClick={handleEliminarCita}>Eliminar cita</button></td>
                            </tr>
                            <tr>
                                <td>99.999.999</td>
                                <td>99/99/9999</td>
                                <td>99:99hs</td>
                                <td>-</td>
                                <td><button className='solicitud-cita-sec-tabla-agregar' onClick={handleAgregarAgente}>Asignar agente</button></td>
                                <td><button className='solicitud-cita-sec-tabla-modificar' onClick={handleModificarCita}>Modificar cita</button ></td>
                                <td><button className='solicitud-cita-sec-tabla-eliminar' onClick={handleEliminarCita}>Eliminar cita</button></td>
                            </tr>
                            <tr>
                                <td>99.999.999</td>
                                <td>99/99/9999</td>
                                <td>99:99hs</td>
                                <td>-</td>
                                <td><button className='solicitud-cita-sec-tabla-agregar' onClick={handleAgregarAgente}>Asignar agente</button></td>
                                <td><button className='solicitud-cita-sec-tabla-modificar' onClick={handleModificarCita}>Modificar cita</button ></td>
                                <td><button className='solicitud-cita-sec-tabla-eliminar' onClick={handleEliminarCita}>Eliminar cita</button></td>
                            </tr>
                            <tr>
                                <td>99.999.999</td>
                                <td>99/99/9999</td>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxxxxxxxxxxxx</td>
                                <td><button className='solicitud-cita-sec-tabla-agregar' onClick={handleAgregarAgente}>Asignar agente</button></td>
                                <td><button className='solicitud-cita-sec-tabla-modificar' onClick={handleModificarCita}>Modificar cita</button ></td>
                                <td><button className='solicitud-cita-sec-tabla-eliminar' onClick={handleEliminarCita}>Eliminar cita</button></td>
                            </tr>
                            <tr>
                                <td>99.999.999</td>
                                <td>99/99/9999</td>
                                <td>99:99hs</td>
                                <td>-</td>
                                <td><button className='solicitud-cita-sec-tabla-agregar' onClick={handleAgregarAgente}>Asignar agente</button></td>
                                <td><button className='solicitud-cita-sec-tabla-modificar' onClick={handleModificarCita}>Modificar cita</button ></td>
                                <td><button className='solicitud-cita-sec-tabla-eliminar' onClick={handleEliminarCita}>Eliminar cita</button></td>
                            </tr>
                            <tr>
                                <td>99.999.999</td>
                                <td>99/99/9999</td>
                                <td>99:99hs</td>
                                <td>-</td>
                                <td><button className='solicitud-cita-sec-tabla-agregar' onClick={handleAgregarAgente}>Asignar agente</button></td>
                                <td><button className='solicitud-cita-sec-tabla-modificar' onClick={handleModificarCita}>Modificar cita</button ></td>
                                <td><button className='solicitud-cita-sec-tabla-eliminar' onClick={handleEliminarCita}>Eliminar cita</button></td>
                            </tr>
                            <tr>
                                <td>99.999.999</td>
                                <td>99/99/9999</td>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxxxxxxxxxxxx</td>
                                <td><button className='solicitud-cita-sec-tabla-agregar' onClick={handleAgregarAgente}>Asignar agente</button></td>
                                <td><button className='solicitud-cita-sec-tabla-modificar' onClick={handleModificarCita}>Modificar cita</button ></td>
                                <td><button className='solicitud-cita-sec-tabla-eliminar' onClick={handleEliminarCita}>Eliminar cita</button></td>
                            </tr>
                            <tr>
                                <td>99.999.999</td>
                                <td>99/99/9999</td>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxxxxxxxxxxxx</td>
                                <td><button className='solicitud-cita-sec-tabla-agregar' onClick={handleAgregarAgente}>Asignar agente</button></td>
                                <td><button className='solicitud-cita-sec-tabla-modificar' onClick={handleModificarCita}>Modificar cita</button ></td>
                                <td><button className='solicitud-cita-sec-tabla-eliminar' onClick={handleEliminarCita}>Eliminar cita</button></td>
                            </tr>
                            <tr>
                                <td>99.999.999</td>
                                <td>99/99/9999</td>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxxxxxxxxxxxx</td>
                                <td><button className='solicitud-cita-sec-tabla-agregar' onClick={handleAgregarAgente}>Asignar agente</button></td>
                                <td><button className='solicitud-cita-sec-tabla-modificar' onClick={handleModificarCita}>Modificar cita</button ></td>
                                <td><button className='solicitud-cita-sec-tabla-eliminar' onClick={handleEliminarCita}>Eliminar cita</button></td>
                            </tr>  <tr>
                                <td>99.999.999</td>
                                <td>99/99/9999</td>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxxxxxxxxxxxx</td>
                                <td><button className='solicitud-cita-sec-tabla-agregar' onClick={handleAgregarAgente}>Asignar agente</button></td>
                                <td><button className='solicitud-cita-sec-tabla-modificar' onClick={handleModificarCita}>Modificar cita</button ></td>
                                <td><button className='solicitud-cita-sec-tabla-eliminar' onClick={handleEliminarCita}>Eliminar cita</button></td>
                            </tr>
                            <tr>
                                <td>99.999.999</td>
                                <td>99/99/9999</td>
                                <td>99:99hs</td>
                                <td>-</td>
                                <td><button className='solicitud-cita-sec-tabla-agregar' onClick={handleAgregarAgente}>Asignar agente</button></td>
                                <td><button className='solicitud-cita-sec-tabla-modificar' onClick={handleModificarCita}>Modificar cita</button ></td>
                                <td><button className='solicitud-cita-sec-tabla-eliminar' onClick={handleEliminarCita}>Eliminar cita</button></td>
                            </tr>
                            <tr>
                                <td>99.999.999</td>
                                <td>99/99/9999</td>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxxxxxxxxxxxx</td>
                                <td><button className='solicitud-cita-sec-tabla-agregar' onClick={handleAgregarAgente}>Asignar agente</button></td>
                                <td><button className='solicitud-cita-sec-tabla-modificar' onClick={handleModificarCita}>Modificar cita</button ></td>
                                <td><button className='solicitud-cita-sec-tabla-eliminar' onClick={handleEliminarCita}>Eliminar cita</button></td>
                            </tr>  <tr>
                                <td>99.999.999</td>
                                <td>99/99/9999</td>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxxxxxxxxxxxx</td>
                                <td><button className='solicitud-cita-sec-tabla-agregar' onClick={handleAgregarAgente}>Asignar agente</button></td>
                                <td><button className='solicitud-cita-sec-tabla-modificar' onClick={handleModificarCita}>Modificar cita</button ></td>
                                <td><button className='solicitud-cita-sec-tabla-eliminar' onClick={handleEliminarCita}>Eliminar cita</button></td>
                            </tr>
                            <tr>
                                <td>99.999.999</td>
                                <td>99/99/9999</td>
                                <td>99:99hs</td>
                                <td>-</td>
                                <td><button className='solicitud-cita-sec-tabla-agregar' onClick={handleAgregarAgente}>Asignar agente</button></td>
                                <td><button className='solicitud-cita-sec-tabla-modificar' onClick={handleModificarCita}>Modificar cita</button ></td>
                                <td><button className='solicitud-cita-sec-tabla-eliminar' onClick={handleEliminarCita}>Eliminar cita</button></td>
                            </tr>
                            <tr>
                                <td>99.999.999</td>
                                <td>99/99/9999</td>
                                <td>99:99hs</td>
                                <td>-</td>
                                <td><button className='solicitud-cita-sec-tabla-agregar' onClick={handleAgregarAgente}>Asignar agente</button></td>
                                <td><button className='solicitud-cita-sec-tabla-modificar' onClick={handleModificarCita}>Modificar cita</button ></td>
                                <td><button className='solicitud-cita-sec-tabla-eliminar' onClick={handleEliminarCita}>Eliminar cita</button></td>
                            </tr>
                            <tr>
                                <td>99.999.999</td>
                                <td>99/99/9999</td>
                                <td>99:99hs</td>
                                <td>-</td>
                                <td><button className='solicitud-cita-sec-tabla-agregar' onClick={handleAgregarAgente}>Asignar agente</button></td>
                                <td><button className='solicitud-cita-sec-tabla-modificar' onClick={handleModificarCita}>Modificar cita</button ></td>
                                <td><button className='solicitud-cita-sec-tabla-eliminar' onClick={handleEliminarCita}>Eliminar cita</button></td>
                            </tr>
                            <tr>
                                <td>99.999.999</td>
                                <td>99/99/9999</td>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxxxxxxxxxxxx</td>
                                <td><button className='solicitud-cita-sec-tabla-agregar' onClick={handleAgregarAgente}>Asignar agente</button></td>
                                <td><button className='solicitud-cita-sec-tabla-modificar' onClick={handleModificarCita}>Modificar cita</button ></td>
                                <td><button className='solicitud-cita-sec-tabla-eliminar' onClick={handleEliminarCita}>Eliminar cita</button></td>
                            </tr>
                            <tr>
                                <td>99.999.999</td>
                                <td>99/99/9999</td>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxxxxxxxxxxxx</td>
                                <td><button className='solicitud-cita-sec-tabla-agregar' onClick={handleAgregarAgente}>Asignar agente</button></td>
                                <td><button className='solicitud-cita-sec-tabla-modificar' onClick={handleModificarCita}>Modificar cita</button ></td>
                                <td><button className='solicitud-cita-sec-tabla-eliminar' onClick={handleEliminarCita}>Eliminar cita</button></td>
                            </tr>  <tr>
                                <td>99.999.999</td>
                                <td>99/99/9999</td>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxxxxxxxxxxxx</td>
                                <td><button className='solicitud-cita-sec-tabla-agregar' onClick={handleAgregarAgente}>Asignar agente</button></td>
                                <td><button className='solicitud-cita-sec-tabla-modificar' onClick={handleModificarCita}>Modificar cita</button ></td>
                                <td><button className='solicitud-cita-sec-tabla-eliminar' onClick={handleEliminarCita}>Eliminar cita</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
            <div className='btn-volver2'>
                    <Link to='/menuSecretaria'><button>Volver al menú</button></Link>
            </div>
      </div>
    )
  }
  
  export default VerSolicitudCitaSec
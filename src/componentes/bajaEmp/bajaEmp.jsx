import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './bajaEmp.css'

const BajaEmple = () => {
    const [verEmpleado,setVerEmpleado]=useState(false)
    const handleVerEmpleado=()=>{
        setVerEmpleado((prev)=>!prev)
    }
    const [eliminarEmpleado,setEliminarEmpleado]=useState(false)
    const handleEliminarEmpleado=()=>{
        setEliminarEmpleado((prev)=>!prev)
    }
    return (
        <div className='emp-container'>
                {verEmpleado &&  <div className='ver-empleado-fondo'>
                            <div className='ver-empleado-cuadro'>
                                <div className='ver-empleado-cuadro-sup'>
                                <button className='ver-empleado-cuadro-cerrar' onClick={handleVerEmpleado}>X</button>
                                </div>
                                <div className='ver-empleado-cuadro-inf'>
                                <form method='POST' className='ver-empleado-form'>
                                    <label> Nombre y apellido: </label>
                                    <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                                    <label> DNI: </label>
                                    <p>99.999.99</p>
                                    <label> Usuario: </label>
                                    <p>xxxxxxxxxxxxxxxx</p>
                                    <label> Correo electrónico: </label>
                                    <p>xxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                                    <label> Teléfono: </label>
                                    <p>+999999999999</p>
                                    <button className='btn-volverEmpleado2'onClick={handleVerEmpleado}> Volver </button>                   
                                </form>
                                </div>    
                            </div>     
                    </div>}
                {eliminarEmpleado &&  <div className='eliminar-emp-fondo'>
                                <div className='eliminar-emp-cuadro'>
                                    <div className='eliminar-emp-cuadro-sup'>
                                    <button className='eliminar-emp-cuadro-cerrar' onClick={handleEliminarEmpleado}>X</button>
                                    </div>
                                    <div className='eliminar-emp-cuadro-inf'>
                                        <div className='eliminar-emp-cuadro-inf-pregunta'><p>¿Está seguro de que desea eliminar al empleado?</p></div>
                                    <div className='eliminar-emp-cuadro-inf-opcion'>
                                        <input type='submit' value='Confirmar'></input>
                                        <button onClick={handleEliminarEmpleado}> Cancelar</button>
                                    </div>
                                    </div>    
                                </div>     
                        </div>}
                    <div className='container-bajaEmp'>
                        <div className='docEmpleado-sec-cuadro'>
                                <div className='docEmpleado-sec-cuadro-titulo'>
                                    <h1>Empleados</h1>
                                </div>
                                <div className='docEmpleado-sec-cuadro-datos'>
                                    <table className='docEmpleado-sec-cuadro-tabla'>
                                        <tbody>
                                            <tr className='docEmpleado-sec-cuadro-tabla-titulo'>
                                                <th>Nombre y apellido</th>
                                                <th>Usuario</th>
                                                <th>Puesto</th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                            <tr>
                                                <td>xxxxxxxxxxxxxxxxxxxxxxxxxxx</td>
                                                <td>xxxxxxxxxxxxxxx</td>
                                                <td>Cajero</td>
                                                <td><button className='docEmpleado-sec-cuadro-tabla-ver' onClick={handleVerEmpleado}>Ver</button></td>
                                                <td><button className='docEmpleado-sec-cuadro-tabla-eliminar' onClick={handleEliminarEmpleado}>Eliminar</button></td>
                                            </tr>
                                            <tr>
                                                <td>xxxxxxxxxxxxxxxxxxxxxxxxxxx</td>
                                                <td>xxxxxxxxxxxxxxx</td>
                                                <td>Cajero</td>
                                                <td><button className='docEmpleado-sec-cuadro-tabla-ver' onClick={handleVerEmpleado}>Ver</button></td>
                                                <td><button className='docEmpleado-sec-cuadro-tabla-eliminar' onClick={handleEliminarEmpleado}>Eliminar</button></td>
                                            </tr>
                                            <tr>
                                                <td>xxxxxxxxxxxxxxxxxxxxxxxxxxx</td>
                                                <td>xxxxxxxxxxxxxxx</td>
                                                <td>Agente inmobiliario</td>
                                                <td><button className='docEmpleado-sec-cuadro-tabla-ver' onClick={handleVerEmpleado}>Ver</button></td>
                                                <td><button className='docEmpleado-sec-cuadro-tabla-eliminar' onClick={handleEliminarEmpleado}>Eliminar</button></td>
                                            </tr>
                                            <tr>
                                                <td>xxxxxxxxxxxxxxxxxxxxxxxxxxx</td>
                                                <td>xxxxxxxxxxxxxxx</td>
                                                <td>Agente inmobiliario</td>
                                                <td><button className='docEmpleado-sec-cuadro-tabla-ver' onClick={handleVerEmpleado}>Ver</button></td>
                                                <td><button className='docEmpleado-sec-cuadro-tabla-eliminar' onClick={handleEliminarEmpleado}>Eliminar</button></td>
                                            </tr>
                                            <tr>
                                                <td>xxxxxxxxxxxxxxxxxxxxxxxxxxx</td>
                                                <td>xxxxxxxxxxxxxxx</td>
                                                <td>Agente inmobiliario</td>
                                                <td><button className='docEmpleado-sec-cuadro-tabla-ver' onClick={handleVerEmpleado}>Ver</button></td>
                                                <td><button className='docEmpleado-sec-cuadro-tabla-eliminar' onClick={handleEliminarEmpleado}>Eliminar</button></td>
                                            </tr>
                                            <tr>
                                                <td>xxxxxxxxxxxxxxxxxxxxxxxxxxx</td>
                                                <td>xxxxxxxxxxxxxxx</td>
                                                <td>Jefe de comercialización</td>
                                                <td><button className='docEmpleado-sec-cuadro-tabla-ver' onClick={handleVerEmpleado}>Ver</button></td>
                                                <td><button className='docEmpleado-sec-cuadro-tabla-eliminar' onClick={handleEliminarEmpleado}>Eliminar</button></td>
                                            </tr>
                                            <tr>
                                                <td>xxxxxxxxxxxxxxxxxxxxxxxxxxx</td>
                                                <td>xxxxxxxxxxxxxxx</td>
                                                <td>Jefe de administración</td>
                                                <td><button className='docEmpleado-sec-cuadro-tabla-ver' onClick={handleVerEmpleado}>Ver</button></td>
                                                <td><button className='docEmpleado-sec-cuadro-tabla-eliminar' onClick={handleEliminarEmpleado}>Eliminar</button></td>
                                            </tr>
                                            <tr>
                                                <td>xxxxxxxxxxxxxxxxxxxxxxxxxxx</td>
                                                <td>xxxxxxxxxxxxxxx</td>
                                                <td>Cajero</td>
                                                <td><button className='docEmpleado-sec-cuadro-tabla-ver' onClick={handleVerEmpleado}>Ver</button></td>
                                                <td><button className='docEmpleado-sec-cuadro-tabla-eliminar' onClick={handleEliminarEmpleado}>Eliminar</button></td>
                                            </tr>
                                            <tr>
                                                <td>xxxxxxxxxxxxxxxxxxxxxxxxxxx</td>
                                                <td>xxxxxxxxxxxxxxx</td>
                                                <td>Agente inmobiliario</td>
                                                <td><button className='docEmpleado-sec-cuadro-tabla-ver' onClick={handleVerEmpleado}>Ver</button></td>
                                                <td><button className='docEmpleado-sec-cuadro-tabla-eliminar' onClick={handleEliminarEmpleado}>Eliminar</button></td>
                                            </tr>
                                            <tr>
                                                <td>xxxxxxxxxxxxxxxxxxxxxxxxxxx</td>
                                                <td>xxxxxxxxxxxxxxx</td>
                                                <td>Jefe de marketing</td>
                                                <td><button className='docEmpleado-sec-cuadro-tabla-ver' onClick={handleVerEmpleado}>Ver</button></td>
                                                <td><button className='docEmpleado-sec-cuadro-tabla-eliminar' onClick={handleEliminarEmpleado}>Eliminar</button></td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>

                            </div>
                            <Link to='/menuAdministradorSitio'><button className='btn-volverEmpleado'> Volver al menú </button></Link>
                    </div>
        </div>
    )
  }
  
  export default BajaEmple
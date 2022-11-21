import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './bajaEmp.css'
import axios from 'axios'
const BajaEmple = () => {
    const [verEmpleado,setVerEmpleado]=useState(false)
    const [todosEmpleados, setTodosEmpleados]=useState({})
    const [unEmpleados, setUnEmpleados]=useState({})
    const [eliminarEmpleado,setEliminarEmpleado]=useState(false)

    const handleVerEmpleado=(e)=>{
        var dni=parseInt(e.target.value)
        
        const emp=todosEmpleados.find((element)=>element.dni===dni)
        setUnEmpleados(emp)
        setVerEmpleado((prev)=>!prev)
    }
    const handleEliminarEmpleado=()=>{
        setEliminarEmpleado((prev)=>!prev)
    }

    useEffect(()=>{
        const getEmpleados= async()=>{
            const info= await axios.get('http://localhost:3001/empleados')
            setTodosEmpleados(info.data)
        }
        getEmpleados()
    },[])

    return (
        <div className='emp-container'>
                {verEmpleado &&  <div className='ver-empleado-fondo'>
                            <div className='ver-empleado-cuadro'>
                                <div className='ver-empleado-cuadro-sup'>
                                <button className='ver-empleado-cuadro-cerrar' onClick={handleVerEmpleado}>X</button>
                                </div>
                                <div className='ver-empleado-cuadro-inf'>
                                {
                                    unEmpleados?
                                        

                                            
                                               <form method='POST' className='ver-empleado-form'>
                                                    <label> Nombre y apellido: </label>
                                                    <p>{unEmpleados.nombre+' '+unEmpleados.apellido}</p>
                                                    <label> DNI: </label>
                                                    <p>{unEmpleados.dni}</p>
                                                    <label> Usuario: </label>
                                                    <p>{unEmpleados.nombre_usuario}</p>
                                                    <label> Correo electrónico: </label>
                                                    <p>{unEmpleados.correo}</p>
                                                    <label> Teléfono: </label>
                                                    <p>{unEmpleados.telefono}</p>
                                                    <button className='btn-volverEmpleado2'onClick={handleVerEmpleado}> Volver </button>                   
                                                </form> 
                                            
                                            
                                        
                                    :null
                                }    
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
                                            {
                                                todosEmpleados.length?
                                                    todosEmpleados.map((element,index)=>{
                                                        return(
                                                            <tr key={index}>
                                                                <td>{element.nombre+' '+ element.apellido}</td>
                                                                <td>{element.nombre_usuario}</td>
                                                                <td>{element.puesto_trabajo}</td>
                                                                <td><button className='docEmpleado-sec-cuadro-tabla-ver' value={element.dni} onClick={(e)=>handleVerEmpleado(e)}>Ver</button></td>
                                                                <td><button className='docEmpleado-sec-cuadro-tabla-eliminar' value={element.dni} onClick={handleEliminarEmpleado}>Eliminar</button></td>
                                                            </tr>
                                                        )
                                                    })
                                                :null
                                            }
                                            {/* <tr>
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
                                                <td>xxxxxxxxxxxxxxxx</td>
                                                <td>xxxxxxx</td>
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
                                            </tr> */}

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

import React from 'react'
import { Link } from 'react-router-dom'
import './empleadoFormulario.css'

const EmpFormulario = () => {
    return (
      <div className='fondo-form-emp'>
            <div className='cuadro-form-emp'>
                    <div  className='titulo-form-emp'>
                            <h1> Registrar nuevo empleado </h1>
                    </div>
                    <div className='cuerpo-form-emp'>
                            <form method='POST' className='cuerpo-form-emp-formulario'>
                                    <label> Nombre: </label>
                                    <input type='text' name='nombre' required></input>

                                    <label> Apellido:</label>
                                    <input type='text' name='Apellido' required></input>

                                    <label> DNI:</label>
                                    <input type='number' name='DNI' required></input>

                                    <label> Puesto de trabajo:</label>
                                    <input type='text' name='Puesto-trabajo' required></input>

                                    <label> Teléfono de contacto:</label>
                                    <input type='number' name='Telefono-contacto' placeholder="+54" required></input>

                                    <label> Teléfono de contacto alternativo:</label>
                                    <input type='number' name='Telefono-contacto-alt' placeholder="+54" required></input>

                                    <label> Dirección de correo electrénico:</label>
                                    <input type='email' name='Correo-electronico' placeholder="Nombre@gmail.com" required></input>

                                    <label> Nombre de usuario:</label>
                                    <input type='text' name='Nombre-usuario' required></input>

                                    <label> Contraseña:</label>
                                    <input type='password' name='Contraseña' required></input>

                                    <button type="submit" className='boton-emp-reg'> Registrar empleado</button>


                            </form>
                    </div>
            </div>
                <div className='btn-volver'>
                        <Link to='/menuAdministradorSitio'><button>Volver al menú</button></Link>
                </div>
      </div>
    )
  }
  
  export default EmpFormulario
  

import React from 'react'
import { Link } from 'react-router-dom'
import './inicioSesion.css'

const InicioSesion = () => {
    return (
      <div className='login_container-principal'>
          <div className='cuadro-is'>
              <h1 className='cuadro-is-h1'>Iniciar sesión</h1>
              <form method='POST' className='cuadro-is-form'>
                    <label> Email:</label>
                    
                    <input type='email' name='email'></input>
                    
                    <label> Contraseña:</label>
                    
                    <input type='password' name='contraseña'></input>
                    
                    <input className='cuadro-is-form-submit' type='submit' value='Iniciar Sesión'></input>
              </form>     
              <div className='auxiliar'>
              <Link to='/clienteReg'><button >Ingrese como cliente</button ></Link>
              <Link to='/menuSecretaria'><button className='auxiliar-button'>Ingrese como secretaria</button ></Link>
              <Link to='/menuEmpleadoMarketing'><button className='auxiliar-button'>Ingrese como empleado de marketing</button ></Link>
              <Link to='/menuAdministradorSitio'><button className='auxiliar-button'>Ingrese como administrador del sitio</button ></Link>
              <Link to='/menuCajera'><button className='auxiliar-button'>Ingrese como cajera</button ></Link>
              <Link to='/menuAgentes'><button className='auxiliar-button'>Ingrese como agente inmobiliario</button ></Link>
              <Link to='/MenuJefaAdministracion'><button className='auxiliar-button'>Ingrese como jefe de administracion</button ></Link>
              <Link to='/MenuGerente'><button className='auxiliar-button'>Ingrese como gerente general</button ></Link>
              <Link to='/menuJefeComer'><button className='auxiliar-button'>Ingrese como jefe de comercialización</button ></Link>


              </div>
          </div>
      </div>
    )
  }
  
  export default InicioSesion
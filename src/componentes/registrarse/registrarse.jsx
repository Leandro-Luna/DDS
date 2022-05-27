
import React from 'react'
import { Link } from 'react-router-dom'
import './registrarse.css'

const Registrarse = () => {
    return (
      <div className='login_container'>
          <div className='cuadro-reg'>
                    <h1 className='cuadro-reg-h1'>Registrarse</h1>
                    <form method='POST' className='cuadro-reg-form'>
                            <label> Email:</label>
                            
                            <input type='email' name='email'></input>
                            
                            <label> Contraseña:</label>
                            
                            <input type='password' name='contraseña'></input>

                            <label> Repetir contraseña:</label>
                            
                            <input type='password' name='repetir contraseña'></input>
                            
                            <input className='cuadro-reg-form-submit' type='submit' value='Registrarme'></input>
                    </form>     

          </div>
      </div>
    )
  }
  
  export default Registrarse
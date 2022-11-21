import React from 'react'
import { Link } from 'react-router-dom'
import './ConsultarTransJefe.css'

const ConsultarTransJefe = () => {
    return (
      <div className='login_container-jefe'>
          <div className='cuadro-reg-jefe'>
                    <h1 className='cuadro-reg-h1-jefe'>Ingrese un rango de fecha</h1>
                    <form method='POST' className='cuadro-reg-form-jefe'>
                            <label> Desde:</label>                      
                            <input type='Date' name='Date'></input>
                            <label> Hasta:</label>                        
                            <input type='Date' name='Date'></input>
                    </form>     
                    <div className='cuadro-menu-jefe-datos'>
                      <Link to='/RegistroTransJefe'><button>Buscar transacciones</button></Link>
                   </div>
          </div>
                   <Link to='/MenuJefaAdministracion'><button className='boton-volver-Menu-cajera-cierre'> Volver al menú </button></Link>
      </div>
    )
  }
  
  export default ConsultarTransJefe
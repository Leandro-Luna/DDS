import React from 'react'
import { Link } from 'react-router-dom'
import './consultarTrans.css'

const ConsultarTrans = () => {
    return (
      <div className='login_container-consulta'>
          <div className='cuadro-reg4'>
                    <h1 className='cuadro-reg-h14'>Ingrese un rango de fecha</h1>
                    <form method='POST' className='cuadro-reg-form-consulta'>
                            <label> Desde:</label>                      
                            <input type='Date' name='Date'></input>
                            <label> Hasta:</label>                        
                            <input type='Date' name='Date'></input>
                    </form>     
                    <div className='cuadro-menu-empleado-datos'>
                      <Link to='/registroTransacciones'><button>Buscar transacciones</button></Link>
                   </div>
          </div>
                   <Link to='/menuCajera'><button className='boton-volver-Menu-cajera-cierre'> Volver al menú </button></Link>
      </div>
    )
  }
  
  export default ConsultarTrans
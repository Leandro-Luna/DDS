import React from 'react'
import { Link } from 'react-router-dom'
import './pagoAlquilerCaj.css'

const PagoAlquilerCaj = () => {
    return (
      <div className='login_container'>
          <div className='cuadro-reg1'>
                    <h1 className='cuadro-reg-h11'>Nuevo pago</h1>
                    <form method='POST' className='cuadro-reg-form'>
                            <label> Ingrese DNI del cliente:</label>
                            <input type='number' name='DNI'></input>
                    </form>     
                    <div className='cuadro-menu-empleado-datos'>
                      <Link to='/pagoAlquiler'><button>Buscar cliente</button></Link>
                   </div>
          </div>
                   <Link to='/menuCajera'><button className='btn-volverEmpleado-caj'> Volver al menú </button></Link>
      </div>
    )
  }
  
  export default PagoAlquilerCaj

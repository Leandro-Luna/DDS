import React from 'react'
import { Link } from 'react-router-dom'
import './pagoVentaCaj.css'

const PagoVentaCaj = () => {
    return (
      <div className='login_container-pago-venta'>
          <div className='cuadro-reg1-venta'>
                    <h1 className='cuadro-reg-h11'>Nueva venta</h1>
                    <form method='POST' className='cuadro-reg-form-caj'>
                            <label> Ingrese el código de la propiedad:</label>
                            
                            <input type='number' name='DNI'></input>
                    </form>     
                    <div className='cuadro-menu-empleado-datos'>
                      <Link to='/pagoVenta'><button>Buscar propiedad</button></Link>

                   </div>
          </div>
                   <Link to='/menuCajera'><button className='btn-volverEmpleado-caj'> Volver al menú </button></Link>
      </div>
    )
  }
  
  export default PagoVentaCaj

import React from 'react'
import { Link } from 'react-router-dom'
import './menuCaj.css'

const MenuCaj = () => {
    return (
      <div className='login_container'>
          <div className='cuadro-menu-empleado'>
              <div className='cuadro-menu-empleado-titulo'> 
                    <h1>Menú</h1>
              </div>
              <div className='cuadro-menu-empleado-datos'>
                    <Link to='/pagoAlquilerCajera'><button>Caja de alquileres</button></Link>
                    <Link to='/pagoVentaCajera'><button>Caja de ventas</button></Link>
                    <Link to='/registrarEntradaSalida'><button>Registrar entrada/salida</button></Link>
                    <Link to='/cierreCaja'><button>Realizar cierre de caja</button></Link>
                    <Link to='/consultarTransacciones'><button>Consultar transacciones</button></Link>
              </div>

          </div>

      </div>
    )
  }
  
  export default MenuCaj
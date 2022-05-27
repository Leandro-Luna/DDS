import React from 'react'
import { Link } from 'react-router-dom'
import './registrarEntradaSal.css'

const RegistrarEntradaSal = () => {
    return (
      <div className='login_container'>
          <div className='cuadro-menu-empleado'>
              <div className='cuadro-menu-empleado-titulo'> 
                    <h1>Entradas/Salidas</h1>
              </div>
              <div className='cuadro-menu-empleado-datos'>
                    <Link to='/movimientosEntrada'><button>Movimientos de entrada</button></Link>
                    <Link to='/movimientosSalida'><button>Movimientos de salida</button></Link>
                    <Link to='/entradaSalida'><button>Agregar entrada/salida</button></Link>
              </div>
          </div>

              <Link to='/menuCajera'><button className='btn-volverEntradaSalida'> Volver atrás </button></Link>
      </div>
    )
  }
  
  export default RegistrarEntradaSal
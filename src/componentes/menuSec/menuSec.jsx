
import React from 'react'
import { Link } from 'react-router-dom'
import './menuSec.css'

const MenuSec = () => {
    return (
      <div className='login_container'>
          <div className='cuadro-menu-empleado'>
              <div className='cuadro-menu-empleado-titulo'> 
                    <h1>Menú</h1>
              </div>
              <div className='cuadro-menu-empleado-datos'>
                    <Link to='/verSolicitudCitaSec'><button>Ver solicitudes de citas</button></Link>
                    <Link to='/verAgendaSec'><button>Ver agenda</button></Link>
                    <Link to='/verDocumentacionClienteSec'><button>Ver documentación de clientes</button></Link>
              </div>

          </div>

      </div>
    )
  }
  
  export default MenuSec
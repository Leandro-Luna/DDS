
import React from 'react'
import { Link } from 'react-router-dom'
import './menuAdmin.css'

const MenuAdminSitio = () => {
    return (
      <div className='login_container'>
          <div className='cuadro-menu-empleado'>
              <div className='cuadro-menu-empleado-titulo'> 
                    <h1>Menú</h1>
              </div>
              <div className='cuadro-menu-empleado-datos'>
                    <Link to='/completarFormularioEmpleado'><button>Dar de alta empleado</button></Link>
                    <Link to='/bajaEmpleado'><button>Dar de baja empleado</button></Link>
              </div>

          </div>

      </div>
    )
  }
  
  export default MenuAdminSitio
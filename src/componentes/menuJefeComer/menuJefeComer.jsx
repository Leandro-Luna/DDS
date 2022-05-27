import React from 'react'
import { Link } from 'react-router-dom'
import './menuJefeComer.css'

const MenuJefeComer = () => {
    return (
      <div className='login_container'>
          <div className='cuadro-menu-empleado'>
              <div className='cuadro-menu-empleado-titulo'> 
                    <h1>Menú</h1>
              </div>
              <div className='cuadro-menu-empleado-datos'>
                    <Link to='/agendaJefeComer'><button>Seguimiento de actividades</button></Link>
                    <Link to='/seleccionReporte'><button>Generar reporte</button></Link>
                    <Link to='/consultarPropiedades'><button>Consultar propiedades</button></Link>
                    <Link to='/consultarClientes'><button>Consultar clientes</button></Link>
              </div>

          </div>

      </div>
    )
  }
  
  export default MenuJefeComer
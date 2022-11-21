import React from 'react'
import { Link } from 'react-router-dom'
import './MenuJefaAdministracion.css'

const MenuJefaAdministracion = () => {
    return (
      <div className='login_container'>
          <div className='cuadro-menu-administracion'>
              <div className='cuadro-menu-administracion-titulo'> 
                    <h1>Menú</h1>
              </div>
              <div className='cuadro-menu-administracion-datos'>
                    <Link to='/ConsultarTransJefe'><button>Consultar transacciones realizadas</button></Link>
                    <Link to='/ConsultarReportes'><button>Generar reportes</button></Link>
                    <Link to='/ArchivoClientes'><button>Archivo clientes</button></Link>
              </div>

          </div>

      </div>
    )
  }
  
  export default MenuJefaAdministracion
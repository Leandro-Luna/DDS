import React from 'react'
import { Link } from 'react-router-dom'
import './MenuGerente.css'

const MenuGerente = () => {
    return (
      <div className='login_container'>
          <div className='cuadro-menu-gerente'>
              <div className='cuadro-menu-gerente-titulo'> 
                    <h1>Menú</h1>
              </div>
              <div className='cuadro-menu-gerente-datos'>
                    <Link to='/ReportesGerente'><button>Reportes</button></Link>

              </div>

          </div>

      </div>
    )
  }
  
  export default MenuGerente
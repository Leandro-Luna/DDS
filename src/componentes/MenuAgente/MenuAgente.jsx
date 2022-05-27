import React from 'react'
import { Link } from 'react-router-dom'
import './MenuAgente.css'

const MenuAgente = () => {
    return (
      <div className='login_container'>
          <div className='cuadro-menu-empleado'>
              <div className='cuadro-menu-empleado-titulo'> 
                    <h1>Menú</h1>
              </div>
              <div className='cuadro-menu-empleado-datos'>
                    <Link to='/AgenteCatalogo'><button>Ver catálogo de propiedades</button></Link>
                    <Link to='/AgendaAgentes'><button>Agenda</button></Link>
                    <Link to='/AgregarPropiedades'><button>Añadir nueva propiedad</button></Link>
              </div>

          </div>

      </div>
    )
  }
  
  export default MenuAgente
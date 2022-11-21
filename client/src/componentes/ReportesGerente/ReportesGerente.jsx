import React from 'react'
import { Link } from 'react-router-dom'
import './ReportesGerente.css'

const ReportesGerente = () => {
    return (
      <div className='login_container-Gerente'>
          <div className='cuadro-reportes-gerente'>
                    <h1 className='cuadro-reg-reportes-gerente'>Ingrese un rango de fecha</h1>
                    <form method='POST' className='cuadro-reg-form-reportes-gerente'>
                         <label> Desde:</label>                      
                         <input type='Date' name='Date'></input>
                         <label> Hasta:</label>                        
                         <input type='Date' name='Date'></input>
                    </form>     
                    <div className='cuadro-menu-reportes-datos-gerente'>
                      <Link to='/ReportesVentasGerente'><button>Venta</button></Link>
                      <Link to='/ReportesAlquilerGerente'><button>Alquiler</button></Link>
                   </div>

                   <div className='cuadro-menu-reportes-datos-gerente'>
                   <Link to='/ReportesClientesGerente'><button>Clientes</button></Link>
                   <Link to='/ReportesPropiedadesGerente'><button>Propiedades</button></Link>
                    </div>
          </div>
          <div >                    
            <Link to='/MenuGerente'><button className='boton-volver-Menu-jefe'> Volver al menú </button></Link>
          </div>
      </div>
    )
  }
  
  export default ReportesGerente
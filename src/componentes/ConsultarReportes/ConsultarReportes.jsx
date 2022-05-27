import React from 'react'
import { Link } from 'react-router-dom'
import './ConsultarReportes.css'

const ConsultarReportes = () => {
    return (
      <div className='login_container-reportes'>
          <div className='cuadro-reportes'>
                    <h1 className='cuadro-reg-reportes'>Ingrese un rango de fecha</h1>
                    <form method='POST' className='cuadro-reg-form-reportes'>
                            <label> Desde:</label>                      
                            <input type='Date' name='Date'></input>
                            <label> Hasta:</label>                        
                            <input type='Date' name='Date'></input>
                    </form>     
                    <div className='cuadro-menu-reportes-datos'>
                   
                      <Link to='/ReporteAlquilerJefa'><button>Caja de alquileres</button></Link>
                      <Link to='/ReporteVentaJefa'><button>Caja de ventas</button></Link>
                      <Link to='/ReporteEntradaSalida'><button>Entradas/Salidas</button></Link>
                   
                   </div>
          </div>
          <div >                    
          <Link to='/MenuJefaAdministracion'><button className='boton-volver-Menu-jefe'> Volver al menú </button></Link>
            </div>
      </div>
    )
  }
  
  export default ConsultarReportes
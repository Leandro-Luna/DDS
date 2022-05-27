import React from 'react'
import { Link } from 'react-router-dom'
import './ReportesVentasGerente.css'

const ReportesVentasGerente = () => {
    return (
        <div className='login_container-gerente'>
        <div className='solicitud-cita-caj-cuadro-gerente'>
            <div className='solicitud-cita-caj-cuadro-titulo1-gerente'>
                <h1>Reportes de ventas realizadas entre 99/99/9999 y 99/99/9999</h1>
            </div>
            <div className='solicitud-cita-caj-cuadro-datos-gerente'>
                <table className='solicitud-cita-caj-tabla-gerente'>
                    <tbody>
                    <tr className='solicitud-cita-caj-tabla-titulo'>
                        <th>Tipo</th>
                        <th>Nro de reporte</th>
                        <th>Fecha</th>
                        <th>Descargar</th>
                    </tr>
                    <tr>
                        <td>xxxxxxxxx</td>
                        <td>9999999999</td>
                        <td>99/99/9999</td>
                        <td><a href="Files\ReporteVentas.pdf" download="ReporteVentas" className='boton-volver-Reportes-PDF-gerente'>PDF</a></td>
                    </tr>
                    <tr>
                        <td>xxxxxxxxx</td>
                        <td>9999999999</td>
                        <td>99/99/9999</td>
                        <td><a href="Files\ReporteVentas.pdf" download="ReporteVentas" className='boton-volver-Reportes-PDF-gerente'>PDF</a></td>
                    </tr>
                    <tr>
                        <td>xxxxxxxxx</td>
                        <td>9999999999</td>
                        <td>99/99/9999</td>
                        <td><a href="Files\ReporteVentas.pdf" download="ReporteVentas" className='boton-volver-Reportes-PDF-gerente'>PDF</a></td>
                    </tr>
                    <tr>
                        <td>xxxxxxxxx</td>
                        <td>9999999999</td>
                        <td>99/99/9999</td>
                        <td><a href="Files\ReporteVentas.pdf" download="ReporteVentas" className='boton-volver-Reportes-PDF-gerente'>PDF</a></td>
                    </tr>
                    <tr>
                        <td>xxxxxxxxx</td>
                        <td>9999999999</td>
                        <td>99/99/9999</td>
                        <td><a href="Files\ReporteVentas.pdf" download="ReporteVentas" className='boton-volver-Reportes-PDF-gerente'>PDF</a></td>
                    </tr>
                    <tr>
                        <td>xxxxxxxxx</td>
                        <td>9999999999</td>
                        <td>99/99/9999</td>
                        <td><a href="Files\ReporteVentas.pdf" download="ReporteVentas" className='boton-volver-Reportes-PDF-gerente'>PDF</a></td>
                    </tr>
                    <tr>
                        <td>xxxxxxxxx</td>
                        <td>9999999999</td>
                        <td>99/99/9999</td>
                        <td><a href="Files\ReporteVentas.pdf" download="ReporteVentas" className='boton-volver-Reportes-PDF-gerente'>PDF</a></td>
                    </tr>
                    <tr>
                        <td>xxxxxxxxx</td>
                        <td>9999999999</td>
                        <td>99/99/9999</td>
                        <td><a href="Files\ReporteVentas.pdf" download="ReporteVentas" className='boton-volver-Reportes-PDF-gerente'>PDF</a></td>
                    </tr>
                    <tr>
                        <td>xxxxxxxxx</td>
                        <td>9999999999</td>
                        <td>99/99/9999</td>
                        <td><a href="Files\ReporteVentas.pdf" download="ReporteVentas" className='boton-volver-Reportes-PDF-gerente'>PDF</a></td>
                    </tr>
                    <tr>
                        <td>xxxxxxxxx</td>
                        <td>9999999999</td>
                        <td>99/99/9999</td>
                        <td><a href="Files\ReporteVentas.pdf" download="ReporteVentas" className='boton-volver-Reportes-PDF-gerente'>PDF</a></td>
                    </tr>
                    <tr>
                        <td>xxxxxxxxx</td>
                        <td>9999999999</td>
                        <td>99/99/9999</td>
                        <td><a href="Files\ReporteVentas.pdf" download="ReporteVentas" className='boton-volver-Reportes-PDF-gerente'>PDF</a></td>
                    </tr>
                    <tr>
                        <td>xxxxxxxxx</td>
                        <td>9999999999</td>
                        <td>99/99/9999</td>
                        <td><a href="Files\ReporteVentas.pdf" download="ReporteVentas" className='boton-volver-Reportes-PDF-gerente'>PDF</a></td>
                    </tr>
                    <tr>
                        <td>xxxxxxxxx</td>
                        <td>9999999999</td>
                        <td>99/99/9999</td>
                        <td><a href="Files\ReporteVentas.pdf" download="ReporteVentas" className='boton-volver-Reportes-PDF-gerente'>PDF</a></td>
                    </tr>
                    </tbody>
                    
                 </table>



            </div>

        </div>
        <div className='contenedor-botones'>
            <button className='btn-volverEntradaSalida'> Imprimir </button>
            <Link to='/ReportesGerente'><button className='btn-volverEntradaSalida'> Volver atrás </button></Link>
       
        </div>
  </div>
    )
  }
  
  
  export default ReportesVentasGerente
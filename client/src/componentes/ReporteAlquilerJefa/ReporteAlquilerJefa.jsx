import React from 'react'
import { Link } from 'react-router-dom'
import './ReporteAlquilerJefa.css'

const ReporteAlquilerJefa = () => {
    return (
      <div className='login_container-reporte-jefe'>
            <div className='solicitud-cita-caj-cuadro-reportes-alquiler-jefa'>
                <div className='solicitud-cita-caj-cuadro-titulo1-reportes-alquiler-jefa'>
                    <h1>Reportes de caja de alquileres realizadas entre 99/99/9999 y 99/99/9999</h1>
                </div>
                <div className='solicitud-cita-caj-cuadro-datos-reportes-alquiler-jefa'>
                    <table className='solicitud-cita-caj-tabla-reportes-alquiler-jefa'>
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
                            <td><a href="Files\ReporteCajadeAlquileres.pdf" download="ReporteCajadeAlquileres" className='boton-volver-Reportes-PDF-alquiler-jefa'>PDF</a></td>
                        </tr>
                        <tr>
                            <td>xxxxxxxxx</td>
                            <td>9999999999</td>
                            <td>99/99/9999</td>
                            <td><a href="Files\ReporteCajadeAlquileres.pdf" download="ReporteCajadeAlquileres" className='boton-volver-Reportes-PDF-alquiler-jefa'>PDF</a></td>
                        </tr>
                        <tr>
                            <td>xxxxxxxxx</td>
                            <td>9999999999</td>
                            <td>99/99/9999</td>
                            <td><a href="Files\ReporteCajadeAlquileres.pdf" download="ReporteCajadeAlquileres" className='boton-volver-Reportes-PDF-alquiler-jefa'>PDF</a></td>
                        </tr>
                        <tr>
                            <td>xxxxxxxxx</td>
                            <td>9999999999</td>
                            <td>99/99/9999</td>
                            <td><a href="Files\ReporteCajadeAlquileres.pdf" download="ReporteCajadeAlquileres" className='boton-volver-Reportes-PDF-alquiler-jefa'>PDF</a></td>
                        </tr>
                        <tr>
                            <td>xxxxxxxxx</td>
                            <td>9999999999</td>
                            <td>99/99/9999</td>
                            <td><a href="Files\ReporteCajadeAlquileres.pdf" download="ReporteCajadeAlquileres" className='boton-volver-Reportes-PDF-alquiler-jefa'>PDF</a></td>
                        </tr>
                        <tr>
                            <td>xxxxxxxxx</td>
                            <td>9999999999</td>
                            <td>99/99/9999</td>
                            <td><a href="Files\ReporteCajadeAlquileres.pdf" download="ReporteCajadeAlquileres" className='boton-volver-Reportes-PDF-alquiler-jefa'>PDF</a></td>
                        </tr>
                        <tr>
                            <td>xxxxxxxxx</td>
                            <td>9999999999</td>
                            <td>99/99/9999</td>
                            <td><a href="Files\ReporteCajadeAlquileres.pdf" download="ReporteCajadeAlquileres" className='boton-volver-Reportes-PDF-alquiler-jefa'>PDF</a></td>
                        </tr>
                        <tr>
                            <td>xxxxxxxxx</td>
                            <td>9999999999</td>
                            <td>99/99/9999</td>
                            <td><a href="Files\ReporteCajadeAlquileres.pdf" download="ReporteCajadeAlquileres" className='boton-volver-Reportes-PDF-alquiler-jefa'>PDF</a></td>
                        </tr>
                        <tr>
                            <td>xxxxxxxxx</td>
                            <td>9999999999</td>
                            <td>99/99/9999</td>
                            <td><a href="Files\ReporteCajadeAlquileres.pdf" download="ReporteCajadeAlquileres" className='boton-volver-Reportes-PDF-alquiler-jefa'>PDF</a></td>
                        </tr>
                        <tr>
                            <td>xxxxxxxxx</td>
                            <td>9999999999</td>
                            <td>99/99/9999</td>
                            <td><a href="Files\ReporteCajadeAlquileres.pdf" download="ReporteCajadeAlquileres" className='boton-volver-Reportes-PDF-alquiler-jefa'>PDF</a></td>
                        </tr>
                        <tr>
                            <td>xxxxxxxxx</td>
                            <td>9999999999</td>
                            <td>99/99/9999</td>
                            <td><a href="Files\ReporteCajadeAlquileres.pdf" download="ReporteCajadeAlquileres" className='boton-volver-Reportes-PDF-alquiler-jefa'>PDF</a></td>
                        </tr>
                        <tr>
                            <td>xxxxxxxxx</td>
                            <td>9999999999</td>
                            <td>99/99/9999</td>
                            <td><a href="Files\ReporteCajadeAlquileres.pdf" download="ReporteCajadeAlquileres" className='boton-volver-Reportes-PDF-alquiler-jefa'>PDF</a></td>
                        </tr>
                        <tr>
                            <td>xxxxxxxxx</td>
                            <td>9999999999</td>
                            <td>99/99/9999</td>
                            <td><a href="Files\ReporteCajadeAlquileres.pdf" download="ReporteCajadeAlquileres" className='boton-volver-Reportes-PDF-alquiler-jefa'>PDF</a></td>
                        </tr>
                        </tbody>
                        
                     </table>


 
                </div>

            </div>
            <div className='contenedor-botones'>
                <button className='btn-volverEntradaSalida'> Imprimir </button>
                <Link to='/ConsultarReportes'><button className='btn-volverEntradaSalida'> Volver atrás </button></Link>
           
            </div>
      </div>
    )
  }
  
  
  export default ReporteAlquilerJefa
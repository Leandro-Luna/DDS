import React from 'react'
import { Link } from 'react-router-dom'
import './movimientosSal.css'

const MovimientosSal = () => {
    return (
      <div className='login_container'>
            <div className='solicitud-cita-caj-cuadro'>
                <div className='solicitud-cita-caj-cuadro-titulo1'>
                    <h1>Movimientos de salida</h1>
                </div>
                <div className='solicitud-cita-caj-cuadro-datos'>
                    <table className='solicitud-cita-caj-tabla'>
                        <tbody>
                            <tr className='solicitud-cita-caj-tabla-titulo'>
                                <th>Fecha</th>
                                <th>Hora</th>
                                <th>Concepto</th>
                                <th>Monto</th>
                                <th></th>
                            </tr>
                            <tr>
                                <td>99/99/9999</td>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>$9999999</td>
                            </tr>
                            <tr>
                            <td>99/99/9999</td>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>$9999999</td>
                            </tr>
                            <tr>
                            <td>99/99/9999</td>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>$9999999</td>
                            </tr>
                            <tr>
                            <td>99/99/9999</td>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>$9999999</td>
                            </tr>
                            <tr>
                                
                            </tr>
                            <tr>
                            <td>99/99/9999</td>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>$9999999</td>
                            </tr>
                            <tr>
                            <td>99/99/9999</td>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>$9999999</td>
                            </tr>
                            <tr>
                            <td>99/99/9999</td>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>$9999999</td>
                            </tr>
                            <tr>
                            <td>99/99/9999</td>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>$9999999</td>
                            </tr>
                            <tr>
                            <td>99/99/9999</td>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>$9999999</td>
                            </tr>
                            <tr>
                            <td>99/99/9999</td>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>$9999999</td>
                            </tr>
                            <tr>
                            <td>99/99/9999</td>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>$9999999</td>
                            </tr>
                            <tr>
                            <td>99/99/9999</td>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>$9999999</td>
                            </tr>
                            <tr>
                            <td>99/99/9999</td>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>$9999999</td>
                            </tr>
                            <tr>
                            <td>99/99/9999</td>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>$9999999</td>
                            </tr>
                            <tr>
                            <td>99/99/9999</td>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>$9999999</td>
                            </tr>
                            <tr>
                            <td>99/99/9999</td>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>$9999999</td>
                            </tr>
                            <tr>
                            <td>99/99/9999</td>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>$9999999</td>
                            </tr>
                            <tr>
                            <td>99/99/9999</td>
                                <td>99:99hs</td>
                                <td>xxxxxxxxxxxxx</td>
                                <td>$9999999</td>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </div>
            <Link to='/registrarEntradaSalida'><button className='btn-volverEntradaSalida'> Volver atrás </button></Link>
      </div>
    )
  }
  
  export default MovimientosSal
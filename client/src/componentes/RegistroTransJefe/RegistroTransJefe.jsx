import React from 'react'
import { Link } from 'react-router-dom'
import './RegistroTransJefe.css'

const RegistroTransJefe = () => {
    return (
        <div className='login_container-registro-jefe'>
            <div className='registro-trans-cuadro-jefe'>     
                <div className='registro-trans-cuadro-titulo-jefe'>
                    <h1>Transacciones realizadas entre 99/99/9999 y 99/99/9999</h1>
                </div>
                <div className='registro-trans-cuadro-datos-jefe'>
                    <table className='registro-trans-tabla'>
                        <tbody>
                            <tr className='registro-trans-tabla-titulo-jefe'>
                                <th>Nro de transacción</th>
                                <th>Tipo de transacción</th>
                                <th>Fecha</th>
                                <th>Importe</th>
                            </tr>
                            <tr>
                                <td>99999</td>
                                <td>Entrada dinero</td>
                                <td>99/99/9999</td>
                                <td>$999999999</td>
                            </tr>
                            <tr>
                                <td>99999</td>
                                <td>Entrada dinero</td>
                                <td>99/99/9999</td>
                                <td>$999999999</td>
                            </tr>
                            <tr>
                                <td>99999</td>
                                <td>Entrada dinero</td>
                                <td>99/99/9999</td>
                                <td>$999999999</td>
                            </tr>
                            <tr>
                                <td>99999</td>
                                <td>Salida dinero</td>
                                <td>99/99/9999</td>
                                <td>$999999999</td>
                            </tr>
                            <tr>
                                <td>99999</td>
                                <td>Salida dinero</td>
                                <td>99/99/9999</td>
                                <td>$999999999</td>
                            </tr>
                            <tr>
                                <td>99999</td>
                                <td>Salida dinero</td>
                                <td>99/99/9999</td>
                                <td>$999999999</td>
                            </tr>
                            <tr>
                                <td>99999</td>
                                <td>Salida dinero</td>
                                <td>99/99/9999</td>
                                <td>$999999999</td>
                            </tr>
                            <tr>
                                <td>99999</td>
                                <td>Entrada dinero</td>
                                <td>99/99/9999</td>
                                <td>$999999999</td>
                            </tr>
                            <tr>
                                <td>99999</td>
                                <td>Salida dinero</td>
                                <td>99/99/9999</td>
                                <td>$999999999</td>
                            </tr>
                            <tr>
                                <td>99999</td>
                                <td>Entrada dinero</td>
                                <td>99/99/9999</td>
                                <td>$999999999</td>
                            </tr>
                            <tr>
                                <td>99999</td>
                                <td>Salida dinero</td>
                                <td>99/99/9999</td>
                                <td>$999999999</td>
                            </tr>
                            <tr>
                                <td>99999</td>
                                <td>Salida dinero</td>
                                <td>99/99/9999</td>
                                <td>$999999999</td>
                            </tr>
                            <tr>
                                <td>99999</td>
                                <td>Entrada dinero</td>
                                <td>99/99/9999</td>
                                <td>$999999999</td>
                            </tr>
                            <tr>
                                <td>99999</td>
                                <td>Entrada dinero</td>
                                <td>99/99/9999</td>
                                <td>$999999999</td>
                            </tr>
                            <tr>
                                <td>99999</td>
                                <td>Entrada dinero</td>
                                <td>99/99/9999</td>
                                <td>$999999999</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        <Link to='/ConsultarTransJefe'><button className='boton-volver-Menu-jefe'> Volver atrás </button></Link>
    </div>
    )
  }
  
  
  export default RegistroTransJefe


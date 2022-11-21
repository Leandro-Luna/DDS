import React from 'react'
import { Link } from 'react-router-dom'
import './registroTrans.css'

const RegistroTrans = () => {
    return (
      <div className='login_container-registro'>
            <div className='registro-trans-cuadro'>     
                <div className='registro-trans-cuadro-titulo'>
                    <h1>Transacciones realizadas entre 99/99/9999 y 99/99/9999</h1>
                </div>
                <div className='registro-trans-cuadro-datos'>
                    <table className='registro-trans-tabla'>
                        <tbody>
                            <tr className='registro-trans-tabla-titulo'>
                                <th>Nro de transacción</th>
                                <th>Tipo de transacción</th>
                                <th>Fecha</th>
                                <th className='ultima-columna'>Importe</th>
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
            <Link to='/consultarTransacciones'><button className='boton-volver-Menu-cajera-cierre'> Volver atrás </button></Link>
        </div>
    )
  }
  
  export default RegistroTrans


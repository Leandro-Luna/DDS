import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './verDocumentacionClienteSec.css'

const VerDocumentacionClienteSec = () => {
    const [agregarDocumentacion,setAgregarDocumentacion]=useState(false)
    const handleAgregarDocumentacion=()=>{
        setAgregarDocumentacion((prev)=>!prev)
    }
    return (
      <div className='container'>
           {agregarDocumentacion &&  <div className='docCliente-sec-popup-fondo'>
                                        <div className='docCliente-sec-popup-cuadro'>
                                            <div className='docCliente-sec-popup-cuadro-sup'>
                                            <button className='docCliente-sec-popup-cuadro-cerrar' onClick={handleAgregarDocumentacion}>X</button>
                                            </div>
                                            <div className='docCliente-sec-popup-cuadro-inf'>
                                                <p>Seleccione el tipo de cliente que desea registrar:</p>
                                                <Link to='/agYmdClienteFisico'><button>Particular</button></Link>
                                                <Link to='/agYmdClienteCorporativo'><button>Corporativo</button></Link>
                                            </div>    
                                        </div>     
                                </div>}
          <div className='docCliente-sec-cuadro'>
                <div className='docCliente-sec-cuadro-titulo'>
                    <h1>Documentación de clientes</h1>
                </div>
                <div className='docCliente-sec-cuadro-datos'>
                    <table className='docCliente-sec-cuadro-tabla'>
                        <tbody>
                            <tr className='docCliente-sec-cuadro-tabla-titulo'>
                                <th>CUIT cliente</th>
                                <th>Tipo de cliente</th>
                                <th></th>
                                <th></th>
                                
                            </tr>
                            <tr>
                                <td>99-99.999.999-9</td>
                                <td>Particular</td>
                                <td><Link to='/verClienteFisico'><button className='docCliente-sec-cuadro-tabla-ver'>Ver</button></Link></td>
                                <td><Link to='/agYmdClienteFisico'><button className='docCliente-sec-cuadro-tabla-modificar'>Modificar</button ></Link></td>
                            </tr>
                            <tr>
                                <td>99-99.999.999-9</td>
                                <td>Corporativo</td>
                                <td><Link to='/verClienteCorporativo'><button className='docCliente-sec-cuadro-tabla-ver'>Ver</button></Link></td>
                                <td><Link to='/agYmdClienteCorporativo'><button className='docCliente-sec-cuadro-tabla-modificar'>Modificar</button ></Link></td>
                            </tr>
                            <tr>
                                <td>99-99.999.999-9</td>
                                <td>Particular</td>
                                <td><Link to='/verClienteFisico'><button className='docCliente-sec-cuadro-tabla-ver'>Ver</button></Link></td>
                                <td><Link to='/agYmdClienteFisico'><button className='docCliente-sec-cuadro-tabla-modificar'>Modificar</button ></Link></td>
                            </tr>
                            <tr>
                                <td>99-99.999.999-9</td>
                                <td>Particular</td>
                                <td><Link to='/verClienteFisico'><button className='docCliente-sec-cuadro-tabla-ver'>Ver</button></Link></td>
                                <td><Link to='/agYmdClienteFisico'><button className='docCliente-sec-cuadro-tabla-modificar'>Modificar</button ></Link></td>
                            </tr>
                            <tr>
                                <td>99-99.999.999-9</td>
                                <td>Particular</td>
                                <td><Link to='/verClienteFisico'><button className='docCliente-sec-cuadro-tabla-ver'>Ver</button></Link></td>
                                <td><Link to='/agYmdClienteFisico'><button className='docCliente-sec-cuadro-tabla-modificar'>Modificar</button ></Link></td>
                            </tr>
                            <tr>
                                <td>99-99.999.999-9</td>
                                <td>Corporativo</td>
                                <td><Link to='/verClienteCorporativo'><button className='docCliente-sec-cuadro-tabla-ver'>Ver</button></Link></td>
                                <td><Link to='/agYmdClienteCorporativo'><button className='docCliente-sec-cuadro-tabla-modificar'>Modificar</button ></Link></td>
                            </tr>
                            <tr>
                                <td>99-99.999.999-9</td>
                                <td>Corporativo</td>
                                <td><Link to='/verClienteCorporativo'><button className='docCliente-sec-cuadro-tabla-ver'>Ver</button></Link></td>
                                <td><Link to='/agYmdClienteCorporativo'><button className='docCliente-sec-cuadro-tabla-modificar'>Modificar</button ></Link></td>
                            </tr>
                            <tr>
                                <td>99-99.999.999-9</td>
                                <td>Particular</td>
                                <td><Link to='/verClienteFisico'><button className='docCliente-sec-cuadro-tabla-ver'>Ver</button></Link></td>
                                <td><Link to='/agYmdClienteFisico'><button className='docCliente-sec-cuadro-tabla-modificar'>Modificar</button ></Link></td>
                            </tr>
                            <tr>
                                <td>99-99.999.999-9</td>
                                <td>Corporativo</td>
                                <td><Link to='/verClienteCorporativo'><button className='docCliente-sec-cuadro-tabla-ver'>Ver</button></Link></td>
                                <td><Link to='/agYmdClienteCorporativo'><button className='docCliente-sec-cuadro-tabla-modificar'>Modificar</button ></Link></td>
                            </tr>
                            <tr>
                                <td>99-99.999.999-9</td>
                                <td>Particular</td>
                                <td><Link to='/verClienteFisico'><button className='docCliente-sec-cuadro-tabla-ver'>Ver</button></Link></td>
                                <td><Link to='/agYmdClienteFisico'><button className='docCliente-sec-cuadro-tabla-modificar'>Modificar</button ></Link></td>
                            </tr><tr>
                                <td>99-99.999.999-9</td>
                                <td>Particular</td>
                                <td><Link to='/verClienteFisico'><button className='docCliente-sec-cuadro-tabla-ver'>Ver</button></Link></td>
                                <td><Link to='/agYmdClienteFisico'><button className='docCliente-sec-cuadro-tabla-modificar'>Modificar</button ></Link></td>
                            </tr>
                            <tr>
                                <td>99-99.999.999-9</td>
                                <td>Corporativo</td>
                                <td><Link to='/verClienteCorporativo'><button className='docCliente-sec-cuadro-tabla-ver'>Ver</button></Link></td>
                                <td><Link to='/agYmdClienteCorporativo'><button className='docCliente-sec-cuadro-tabla-modificar'>Modificar</button ></Link></td>
                            </tr>
                            <tr>
                                <td>99-99.999.999-9</td>
                                <td>Particular</td>
                                <td><Link to='/verClienteFisico'><button className='docCliente-sec-cuadro-tabla-ver'>Ver</button></Link></td>
                                <td><Link to='/agYmdClienteFisico'><button className='docCliente-sec-cuadro-tabla-modificar'>Modificar</button ></Link></td>
                            </tr>
                            <tr>
                                <td>99-99.999.999-9</td>
                                <td>Corporativo</td>
                                <td><Link to='/verClienteCorporativo'><button className='docCliente-sec-cuadro-tabla-ver'>Ver</button></Link></td>
                                <td><Link to='/agYmdClienteCorporativo'><button className='docCliente-sec-cuadro-tabla-modificar'>Modificar</button ></Link></td>
                            </tr>
                            <tr>
                                <td>99-99.999.999-9</td>
                                <td>Corporativo</td>
                                <td><Link to='/verClienteCorporativo'><button className='docCliente-sec-cuadro-tabla-ver'>Ver</button></Link></td>
                                <td><Link to='/agYmdClienteCorporativo'><button className='docCliente-sec-cuadro-tabla-modificar'>Modificar</button ></Link></td>
                            </tr><tr>
                                <td>99-99.999.999-9</td>
                                <td>Corporativo</td>
                                <td><Link to='/verClienteCorporativo'><button className='docCliente-sec-cuadro-tabla-ver'>Ver</button></Link></td>
                                <td><Link to='/agYmdClienteCorporativo'><button className='docCliente-sec-cuadro-tabla-modificar'>Modificar</button ></Link></td>
                            </tr>
                            <tr>
                                <td>99-99.999.999-9</td>
                                <td>Particular</td>
                                <td><Link to='/verClienteFisico'><button className='docCliente-sec-cuadro-tabla-ver'>Ver</button></Link></td>
                                <td><Link to='/agYmdClienteFisico'><button className='docCliente-sec-cuadro-tabla-modificar'>Modificar</button ></Link></td>
                            </tr>
                            <tr>
                                <td>99-99.999.999-9</td>
                                <td>Corporativo</td>
                                <td><Link to='/verClienteCorporativo'><button className='docCliente-sec-cuadro-tabla-ver'>Ver</button></Link></td>
                                <td><Link to='/agYmdClienteCorporativo'><button className='docCliente-sec-cuadro-tabla-modificar'>Modificar</button ></Link></td>
                            </tr>
                            <tr>
                                <td>99-99.999.999-9</td>
                                <td>Particular</td>
                                <td><Link to='/verClienteFisico'><button className='docCliente-sec-cuadro-tabla-ver'>Ver</button></Link></td>
                                <td><Link to='/agYmdClienteFisico'><button className='docCliente-sec-cuadro-tabla-modificar'>Modificar</button ></Link></td>
                            </tr>
                            <tr>
                                <td>99-99.999.999-9</td>
                                <td>Particular</td>
                                <td><Link to='/verClienteFisico'><button className='docCliente-sec-cuadro-tabla-ver'>Ver</button></Link></td>
                                <td><Link to='/agYmdClienteFisico'><button className='docCliente-sec-cuadro-tabla-modificar'>Modificar</button ></Link></td>
                            </tr>
                            <tr>
                                <td>99-99.999.999-9</td>
                                <td>Particular</td>
                                <td><Link to='/verClienteFisico'><button className='docCliente-sec-cuadro-tabla-ver'>Ver</button></Link></td>
                                <td><Link to='/agYmdClienteFisico'><button className='docCliente-sec-cuadro-tabla-modificar'>Modificar</button ></Link></td>
                            </tr>
                            <tr>
                                <td>99-99.999.999-9</td>
                                <td>Corporativo</td>
                                <td><Link to='/verClienteCorporativo'><button className='docCliente-sec-cuadro-tabla-ver'>Ver</button></Link></td>
                                <td><Link to='/agYmdClienteCorporativo'><button className='docCliente-sec-cuadro-tabla-modificar'>Modificar</button ></Link></td>
                            </tr>
                            <tr>
                                <td>99-99.999.999-9</td>
                                <td>Corporativo</td>
                                <td><Link to='/verClienteCorporativo'><button className='docCliente-sec-cuadro-tabla-ver'>Ver</button></Link></td>
                                <td><Link to='/agYmdClienteCorporativo'><button className='docCliente-sec-cuadro-tabla-modificar'>Modificar</button ></Link></td>
                            </tr>
                            <tr>
                                <td>99-99.999.999-9</td>
                                <td>Particular</td>
                                <td><Link to='/verClienteFisico'><button className='docCliente-sec-cuadro-tabla-ver'>Ver</button></Link></td>
                                <td><Link to='/agYmdClienteFisico'><button className='docCliente-sec-cuadro-tabla-modificar'>Modificar</button ></Link></td>
                            </tr>
                            <tr>
                                <td>99-99.999.999-9</td>
                                <td>Corporativo</td>
                                <td><Link to='/verClienteCorporativo'><button className='docCliente-sec-cuadro-tabla-ver'>Ver</button></Link></td>
                                <td><Link to='/agYmdClienteCorporativo'><button className='docCliente-sec-cuadro-tabla-modificar'>Modificar</button ></Link></td>
                            </tr>
                            <tr>
                                <td>99-99.999.999-9</td>
                                <td>Particular</td>
                                <td><Link to='/verClienteFisico'><button className='docCliente-sec-cuadro-tabla-ver'>Ver</button></Link></td>
                                <td><Link to='/agYmdClienteFisico'><button className='docCliente-sec-cuadro-tabla-modificar'>Modificar</button ></Link></td>
                            </tr><tr>
                                <td>99-99.999.999-9</td>
                                <td>Particular</td>
                                <td><Link to='/verClienteFisico'><button className='docCliente-sec-cuadro-tabla-ver'>Ver</button></Link></td>
                                <td><Link to='/agYmdClienteFisico'><button className='docCliente-sec-cuadro-tabla-modificar'>Modificar</button ></Link></td>
                            </tr>
                            <tr>
                                <td>99-99.999.999-9</td>
                                <td>Corporativo</td>
                                <td><Link to='/verClienteCorporativo'><button className='docCliente-sec-cuadro-tabla-ver'>Ver</button></Link></td>
                                <td><Link to='/agYmdClienteCorporativo'><button className='docCliente-sec-cuadro-tabla-modificar'>Modificar</button ></Link></td>
                            </tr>
                            <tr>
                                <td>99-99.999.999-9</td>
                                <td>Particular</td>
                                <td><Link to='/verClienteFisico'><button className='docCliente-sec-cuadro-tabla-ver'>Ver</button></Link></td>
                                <td><Link to='/agYmdClienteFisico'><button className='docCliente-sec-cuadro-tabla-modificar'>Modificar</button ></Link></td>
                            </tr>
                            <tr>
                                <td>99-99.999.999-9</td>
                                <td>Corporativo</td>
                                <td><Link to='/verClienteCorporativo'><button className='docCliente-sec-cuadro-tabla-ver'>Ver</button></Link></td>
                                <td><Link to='/agYmdClienteCorporativo'><button className='docCliente-sec-cuadro-tabla-modificar'>Modificar</button ></Link></td>
                            </tr>
                            <tr>
                                <td>99-99.999.999-9</td>
                                <td>Corporativo</td>
                                <td><Link to='/verClienteCorporativo'><button className='docCliente-sec-cuadro-tabla-ver'>Ver</button></Link></td>
                                <td><Link to='/agYmdClienteCorporativo'><button className='docCliente-sec-cuadro-tabla-modificar'>Modificar</button ></Link></td>
                            </tr><tr>
                                <td>99-99.999.999-9</td>
                                <td>Corporativo</td>
                                <td><Link to='/verClienteCorporativo'><button className='docCliente-sec-cuadro-tabla-ver'>Ver</button></Link></td>
                                <td><Link to='/agYmdClienteCorporativo'><button className='docCliente-sec-cuadro-tabla-modificar'>Modificar</button ></Link></td>
                            </tr>


                        </tbody>
                    </table>
                </div>

            </div>
            <div className='btn-container'>
           
                <button className='docCliente-sec-agregar' onClick={handleAgregarDocumentacion}>Agregar nuevo cliente</button>
                <Link to='/menuSecretaria' className='btn-volver4'><button>Volver al menú</button></Link>
            </div>
      </div>
    )
  }
  
  export default VerDocumentacionClienteSec
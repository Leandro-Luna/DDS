import React from 'react'
import { Link } from 'react-router-dom'
import './verClienteFis.css'

const VerClienteFis = () => {
    return (
      <div className='login_container'>
          <div className='ver-cliente-cuadro'>
                    <div className='ver-cliente-cuadro-titulo'>
                        <h1>Cliente particular</h1>
                    </div>   
                    <div className='ver-cliente-cuadro-datos'>
                        
                                <div className='ver-cliente-cuadro-renglon'>
                                    <p> Nombre y apellido: </p>           
                                    <p>xxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                                </div>
                                <div className='ver-cliente-cuadro-renglon'>
                                    <p> DNI/CUIT:</p>           
                                    <p>99-99.999.999-9</p>
                                </div>
                                <div className='ver-cliente-cuadro-renglon'>
                                    <p> Fecha de nacimiento:</p>           
                                    <p>99/99/9999</p>
                                </div>
                                <div className='ver-cliente-cuadro-renglon'>
                                    <p> Teléfono:</p>           
                                    <p>999999999999</p>
                                </div>
                                <div className='ver-cliente-cuadro-renglon'>
                                    <p> Correo electrónico:</p>           
                                    <p>xxxxxxxxxxxxxxxxxxxxx@xxxxxxxx</p>
                                </div>
                                <div className='ver-cliente-cuadro-renglon'>
                                    <p> Archivos: </p>
                                    <Link to='/files/archivo.pdf' target='_blank' download className='ver-cliente-cuadro-renglon-link'>Descargar archivos</Link>
                                </div>
                                                 
                    </div>           
            </div>
            <Link to='/verDocumentacionClienteSec'><button className='btn-volverEntradaSalida'> Volver atrás </button></Link>
      </div>
    )
  }
  
  export default VerClienteFis
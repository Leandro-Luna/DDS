import React from 'react'
import { Link } from 'react-router-dom'
import '../verClienteFis/verClienteFis.css'

const VerClienteCor = () => {
    return (
      <div className='login_container'>
          <div className='ver-cliente-cuadro'>
                    <div className='ver-cliente-cuadro-titulo'>
                        <h1>Cliente corporativo</h1>
                    </div>   
                    <div className='ver-cliente-cuadro-datos'>
                        
                                <div className='ver-cliente-cuadro-renglon'>
                                    <p> Razon social: </p>           
                                    <p>xxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                                </div>
                                <div className='ver-cliente-cuadro-renglon'>
                                    <p> Nombre de el/los propietario/s: </p>           
                                    <p>xxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                                </div>
                                <div className='ver-cliente-cuadro-renglon'>
                                    <p> CUIT:</p>           
                                    <p>99-99.999.999-9</p>
                                </div>
                                <div className='ver-cliente-cuadro-renglon'>
                                    <p> Teléfono de contacto:</p>           
                                    <p>999999999999</p>
                                </div>
                                <div className='ver-cliente-cuadro-renglon'>
                                    <p> Correo electrónico:</p>           
                                    <p>xxxxxxxxxxxxxxxxxxxxx@xxxxxxxx</p>
                                </div>
                                <div className='ver-cliente-cuadro-renglon'>
                                    <p> Dirección de oficina de administración: </p>           
                                    <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                                </div>
                                <div className='ver-cliente-cuadro-renglon'>
                                    <p> Agente inmobiliario a cargo: </p>           
                                    <p>xxxxxxxxxxxxxxxxxxxxxxxxxx</p>
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
  
  export default VerClienteCor
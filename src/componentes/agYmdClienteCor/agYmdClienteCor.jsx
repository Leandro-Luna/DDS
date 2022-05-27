import React from 'react'
import { Link } from 'react-router-dom'
import '../agYmdClienteFis/agYmdClienteFis.css'

const AgYmdClienteCor = () => {
    return (
      <div className='login_container'>
          <div className='agYmd-cliente-cuadro'>
                    <div className='agYmd-cliente-cuadro-titulo'>
                        <h1>Cliente corporativo</h1>
                    </div>   
                    <div className='agYmd-cliente-cuadro-datos'>
                        <form method='POST' className='agYmd-cliente-cuadro-form'>
                                <div className='agYmd-cliente-cuadro-form-renglon'>
                                    <label> Razon social:</label>            
                                    <input type='text' name='rs'></input>
                                </div>
                                <div className='agYmd-cliente-cuadro-form-renglon'>
                                    <label> Nombre de el/los propietario/s:</label>            
                                    <input type='text' name='prop'></input>
                                </div>
                                <div className='agYmd-cliente-cuadro-form-renglon'>
                                    <label> CUIT:</label>            
                                    <input type='number' name='CUIL'></input>
                                </div>
                                <div className='agYmd-cliente-cuadro-form-renglon'>
                                    <label> Teléfono de contacto:</label>            
                                    <input type='number' name='tel'></input>
                                </div>
                                <div className='agYmd-cliente-cuadro-form-renglon'>
                                    <label> Correo electrónico:</label>            
                                    <input type='email' name='email'></input>
                                </div>
                                <div className='agYmd-cliente-cuadro-form-renglon'>
                                    <label> Dirección de oficina de administración:</label>            
                                    <input type='text' name='dir'></input>
                                </div>
                                <div className='agYmd-cliente-cuadro-form-renglon'>
                                <label> Agente inmobiliario a cargo: </label>
                                                <select name="Nombre agente">
                                                        <option>Nombre agente 1</option>
                                                        <option>Nombre agente 2</option>
                                                        <option>Nombre agente 3</option>
                                                        <option>Nombre agente 4</option>
                                                        <option>Nombre agente 5</option>
                                                </select>
                                </div>
                                <div className='agYmd-cliente-cuadro-form-renglon'>
                                    <label> Archivos:</label>
                                    <input type='file' name='file' multiple></input>
                                </div>
                                
                                <input className='agYmd-cliente-cuadro-form-submit' type='submit' value='Cargar datos'></input>
                        </form>     
                    </div>           
            </div>
            <Link to='/verDocumentacionClienteSec'><button className='btn-volverEntradaSalida'> Volver atrás </button></Link>
      </div>
    )
  }
  
  export default AgYmdClienteCor
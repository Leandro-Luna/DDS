import React from 'react'
import { Link } from 'react-router-dom'
import './agYmdClienteFis.css'

const AgYmdClienteFis = () => {
    return (
      <div className='login_container'>
          <div className='agYmd-cliente-cuadro'>
                    <div className='agYmd-cliente-cuadro-titulo'>
                        <h1>Cliente particular</h1>
                    </div>   
                    <div className='agYmd-cliente-cuadro-datos'>
                        <form method='POST' className='agYmd-cliente-cuadro-form'>
                                <div className='agYmd-cliente-cuadro-form-renglon'>
                                    <label> Nombre y apellido:</label>            
                                    <input type='text' name='nya'></input>
                                </div>
                                <div className='agYmd-cliente-cuadro-form-renglon'>
                                    <label> DNI/CUIT:</label>            
                                    <input type='number' name='DNI/CUIL'></input>
                                </div>
                                <div className='agYmd-cliente-cuadro-form-renglon'>
                                    <label> Fecha de nacimiento:</label>            
                                    <input type='date' name='nac'></input>
                                </div>
                                <div className='agYmd-cliente-cuadro-form-renglon'>
                                    <label> Teléfono:</label>            
                                    <input type='number' name='tel'></input>
                                </div>
                                <div className='agYmd-cliente-cuadro-form-renglon'>
                                    <label> Correo electrónico:</label>            
                                    <input type='email' name='email'></input>
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
  
  export default AgYmdClienteFis
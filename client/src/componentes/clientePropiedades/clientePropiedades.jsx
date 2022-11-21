import React from 'react'
import '../AgentePropiedades/AgentePropiedades.css'
import { Link } from 'react-router-dom'

const ClientePropiedades = ({cod_inmueble,imagen, estado, precio ,ubicacion}) => {

  return (
    <div className='cuadroprincipalAgentePropiedades'>
      <img className='imagenAgentePropiedades' src= {imagen} alt={imagen}/>
      <br/>
      <div className='cuadroAgentePropiedades'>
      {`Vivienda #${cod_inmueble}`}
        <div className='textosecundario1AgentePropiedades'>
            {estado}
        </div>
        <div className='textosecundario2AgentePropiedades'>
            {precio}
        </div>
        <div >
            {
              ubicacion? <Link to={ubicacion}><button>Ver Propiedad</button></Link>
              : <Link to={`/verPropiedadReg/${cod_inmueble}`}><button>Ver Propiedad</button></Link>
            }
           
          </div>
      </div>
    </div>
  )
}

export default ClientePropiedades
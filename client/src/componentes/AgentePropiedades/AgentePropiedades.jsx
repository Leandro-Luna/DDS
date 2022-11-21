import React from 'react'
import './AgentePropiedades.css'
import { Link } from 'react-router-dom'

const AgentePropiedades = ({cod_inmueble,imagen, estado, precio}) => {

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
            <Link to={`/AgenteVerPropiedad/${cod_inmueble}`}><button>Ver Propiedad</button></Link>
          </div>
      </div>
    </div>
  )
}

export default AgentePropiedades
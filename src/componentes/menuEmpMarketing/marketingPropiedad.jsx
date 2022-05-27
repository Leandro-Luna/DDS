import React from 'react'
import { Link } from 'react-router-dom'

const MarketingPropiedad = ({nombre,imagen, estado, precio}) => {
  return (
    <div className='cuadroprincipal'>
      <img className='imagen' src= {imagen} />
      <br/>
      <div className='cuadro'>
        {nombre}
        <div className='textosecundario1'>
            {estado}
        </div>
        <div className='textosecundario2'>
            {precio}
        </div>
        <div >
            <Link to='/modificarImagenPropiedad'><button>Ver Propiedad</button></Link>
        </div>
      </div>
    </div>
  )
}

export default MarketingPropiedad
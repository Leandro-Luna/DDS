import React from 'react'
import './clientePropiedad.css'
import { Link } from 'react-router-dom'

const ClientePropiedad = ({nombre,imagen, estado, precio}) => {
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
            <Link to='/verPropiedad'><button>Ver propiedad</button></Link>
        </div>
      </div>
    </div>
  )
}

export default ClientePropiedad
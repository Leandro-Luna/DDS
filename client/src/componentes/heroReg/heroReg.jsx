import React from 'react'
import { Link } from 'react-router-dom'


const HeroReg = () => {
  return (
    <div className='hero__container'>
        <h1>ENCONTRÁ UN HOGAR PARA VOS</h1>
        <p>Tu lugar ideal para vivir tan solo a un click de distancia</p>
        <button><Link to='/catalogoReg' className='link'>IR AL CATÁLOGO</Link></button>
    </div>
  )
}

export default HeroReg
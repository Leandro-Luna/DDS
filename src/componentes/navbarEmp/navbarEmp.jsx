import React from 'react'
import { Link } from 'react-router-dom'

const NavbarEmp = () => {
    return (
        <div className='nav__container'>
            <p className='botonInmobiliaria'>Inmobiliaria Domus</p>
            <div className='nav__container-btn'>
                <Link to='/miCuentaEmpleado'><button>Mi cuenta</button></Link>
                <Link to='/'><button className='registrar'>Cerrar sesión</button></Link>
            </div>
        </div>
      )
}

export default NavbarEmp
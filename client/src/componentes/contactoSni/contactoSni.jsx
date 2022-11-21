
import React from 'react'
import { Link } from 'react-router-dom'
import './contactoSni.css'

const ContactoSni = () => {
    return (
      <div className='login_container'>
            <div className='contacto-cuadro'>
                <div className='contacto-cuadro-titulo'>
                    <h1> 
                        Contacto
                    </h1>
                    <p> 
                        Llámenos al 9999-9999999 o complete el formulario para informarnos sobre 
                        cualquier pregunta o comentario que tenga y nos 
                        contactaremos con usted en breve
                    </p>
                </div>
                <div className='contacto-cuadro-datos'>
                            <form method='POST' className='contacto-cuadro-datos-formulario'>
                                    
                                    <div className='contacto-cuadro-datos-formulario-normal'>
                                        <label> Nombre y apellido: </label>
                                        <input type='text' name='Nombre y apellido'></input>
                                    </div>
                                    <div className='contacto-cuadro-datos-formulario-normal'>
                                        <label> Email:</label>
                                        <input type='email' name='Email'></input>
                                    </div>
                                    <div className='contacto-cuadro-datos-formulario-normal'>
                                        <label> Teléfono:</label>
                                        <input type='number' name='Teléfono'></input>
                                    </div>
                                    <div>
                                        <label> Comentario: </label>     
                                        <textarea rows='10'> </textarea>
                                    </div>
                                
     
                            </form>  
                            <input className='contacto-cuadro-datos-formulario-submit' type='submit' value='Enviar'></input>
                </div>

                
            </div>
      </div>
    )
  }
  
  export default ContactoSni
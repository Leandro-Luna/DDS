import React from 'react'
import { Link } from 'react-router-dom'
import './NosotrosSr.css' 
import Mapa from '../../imagenes/Mapa.jpg'

const NosotrosSr = () => {
    return(
        <div className='fondonosotros' >
            <div className='cuadronosotros'>
            <div className='cuadro-titulo'>
                    <h1 > 
                        ¡Nosotros!
                    </h1>
            
                </div>
                    <div className='DatosQuienesSomos'>
                        <h1 className='titulo-quienes'>  ¿Quiénes somos? </h1>
                        <br />
                        <p className='parrafo'> Lorem ipsum dolor sit amet. Nam nemo corporis ea reiciendis nostrum et nesciunt itaque non labore enim ut aliquam molestiae. 
                        Aut quis quos vel amet doloremque sed molestiae rerum et ipsa praesentium non eveniet omnis! Ut neque veritatis in provident 
                        eius ea dolore voluptatem qui consequatur nisi sit dolorem velit aut pariatur sequi! Sit magni harum aut aperiam consequatur 
                        est dolorem laborum qui galisum aspernatur ut incidunt sunt.
                        Ab explicabo eius ut dolorem omnis ea fuga atque. Aut voluptas vitae aut autem magni vel repellendus. Ab provident 
                        repudiandae eum dolor et inventore autem?
                        
                        </p>
                        <br />
                        <h1 className='titulo'><center>¿Por qué elegirnos?</center> </h1>
                        <br />
                        <p className='parrafo'> Lorem ipsum dolor sit amet. Nam nemo corporis ea reiciendis nostrum et nesciunt itaque non labore enim ut aliquam molestiae. 
                        Aut quis quos vel amet doloremque sed molestiae rerum et ipsa praesentium non eveniet omnis! Ut neque veritatis in provident 
                        eius ea dolore voluptatem qui consequatur nisi sit dolorem velit aut pariatur sequi! Sit magni harum aut aperiam consequatur 
                        est dolorem laborum qui galisum aspernatur ut incidunt sunt.
                        Ab explicabo eius ut dolorem omnis ea fuga atque. Aut voluptas vitae aut autem magni vel repellendus. Ab provident 
                        repudiandae eum dolor et inventore autem?
                        Ex quia fuga et rerum voluptatem eos impedit eaque est eligendi delectus nam quia aperiam aut deserunt 
                        </p>
                        <h1 className='titulo-donde'> <center> ¿Dónde estamos?</center></h1>
                        <div className='contenedor-donde'>
                            <p className='parrafo-donde' > Lorem ipsum dolor sit amet. Nam nemo corporis ea reiciendis nostrum et nesciunt itaque non labore enim ut aliquam molestiae. 
                            Aut quis quos vel amet doloremque sed molestiae rerum et ipsa praesentium non eveniet omnis! Ut neque veritatis in provident 
                            eius ea dolore voluptatem qui consequatur nisi sit dolorem velit aut pariatur sequi! Sit magni harum aut aperiam consequatur 
                            est dolorem laborum qui galisum aspernatur ut incidunt sunt.
                            </p>
                            <div className='DatosMapa'>
                                <img  className='Map' src={Mapa}  />
                            </div>
                        </div>
                    </div>             
                    
                
            </div>
        </div>

   )

}
export default NosotrosSr
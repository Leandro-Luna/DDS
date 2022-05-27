import React from 'react'
import { Link } from 'react-router-dom'
import  ClientePropiedadReg  from '../clientePropiedadReg/clientePropiedadReg'
import vivienda1 from '../../imagenes/vivienda1.jpg'


const propiedades=[
    {
      nombre:'Vivienda #99999',
      estado:'Alquiler',
      precio:'$99999.99',
      imagen:vivienda1
    },
  
    {
        nombre:'Vivienda #99999',
        estado:'Alquiler',
        precio:'$99999.99',
        imagen:vivienda1
      },
    
      {
        nombre:'Vivienda #99999',
        estado:'Alquiler',
        precio:'$99999.99',
        imagen:vivienda1
      },
    
      {
          nombre:'Vivienda #99999',
          estado:'Alquiler',
          precio:'$99999.99',
          imagen:vivienda1
        },
        {
            nombre:'Vivienda #99999',
            estado:'Alquiler',
            precio:'$99999.99',
            imagen:vivienda1
          },
        
          {
              nombre:'Vivienda #99999',
              estado:'Alquiler',
              precio:'$99999.99',
              imagen:vivienda1
            },
]


const ClienteCatalogoReg = () => {
    return (
       
      <div className='fondo'>
          <div className='filtro'>
                <form  method="post">
                    <div> Ordenar por:
                        <br />
                        <input type='radio' name='Ordenar por' value='Mayor Precio'></input>
                        <label > Mayor precio</label>
                        <br />
                        <input type='radio' name='Ordenar por' value='Menor Precio'></input>
                        <label > Menor precio</label>
                        <br />
                        <input type='radio' name='Ordenar por' value='Orden Alfabetico'></input>
                        <label > Orden alfabético</label>
                    </div>

                    <div className='filtros1'> Filtros:
                        <br />
                        <div >
                                <input type='radio' name='Filtros' value='En venta'></input>
                                <label > En venta</label>
                                <br />
                                <input type='radio' name='Filtros' value='En alquiler'></input>
                                <label > En alquiler</label>
                                <br />
                        </div>
                        <div className='filtros2'>
                            <div className='izq'>
                                <label> Habitaciones: </label>
                                <br />
                                <label> Zona: </label>
                                <br />
                                <label> Tipo de contrato: </label>
                            </div>
                            <div className='der'>
                                <input type='number' name='habitaciones'></input>
                                <br />
                                <input type='text' name='zona'></input>
                                <br />
                                <input type='text' name='Tipo de contrato'></input>
                                <br/>
                            </div>

                        </div>
                        <div className='filtros3'>
                            <input id= 'aplicarfiltro'type='submit' value='Aplicar Filtros'/>
                        </div>
            
                    </div>
                    
                    
                    
                </form>
          </div>
         
          <div className='propiedades'>

                    {propiedades.map((item,index)=>{
                    return(
                        < ClientePropiedadReg key={index} imagen={item.imagen} nombre={item.nombre} estado={item.estado} precio={item.precio}/>
                    )
                                })}
                    
            </div> 
          
        </div>

        

      
      
    )
  }
  
  export default ClienteCatalogoReg
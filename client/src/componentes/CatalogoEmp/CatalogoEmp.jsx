import React, { useState } from 'react'
import axios from 'axios'
import  './CatalogoEmp.css'
import  AgentePropiedades  from '../AgentePropiedades/AgentePropiedades'
import vivienda1 from '../../imagenes/vivienda1.jpg'
import { useEffect } from 'react'


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


const CatalogoEmp = () => {
    const [propiedadesDB,setPropiedadesDB]=useState()

    useEffect(()=>{ //Su funcion es hacer el pedido de todas las propiedades cuando se entra a la pagina
        const DB=async ()=>{
            const info=await axios.get('http://localhost:3001/propiedades')
            setPropiedadesDB(info.data)  
        }
        DB()
        .catch(console.error);
    },[])

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
                    
                    {
                        propiedadesDB?
                            propiedadesDB.all.map((item,index)=>{ //Recorro todas las propiedades y voy asignando a cada cartel, los datos de la propiedad del catalogo
                            return( 
                                < AgentePropiedades key={index} imagen={`http://localhost:3001/${item.cod_inmueble}tpi.png`} cod_inmueble={item.cod_inmueble} estado={item.opcion_contrato} precio={'$'+item.precio}/>
                            )
                            }) 
                        :null
                    }
                    
            </div>
         
    
          
        </div>

        

      
      
    )
  }
  
  export default CatalogoEmp
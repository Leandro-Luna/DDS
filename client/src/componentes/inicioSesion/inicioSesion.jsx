
import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './inicioSesion.css'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const InicioSesion = () => {

  const navigate = useNavigate();

  const [inicio,setInicio]=useState({
    email:'',
    contraseña:''
  })
  const [empleados,setEmpleados]=useState([])

  const handleChange=(e)=>{
    e.preventDefault()
    setInicio({
      ...inicio,
      [e.target.name]:e.target.value
    })

  }

  useEffect(()=>{
    const getEmpleados= async()=>{
      const info= await axios.get('http://localhost:3001/empleados')
      console.log(info.data)
      setEmpleados(info.data)
  }
  getEmpleados()
  },[])

  const onSubmit=(e)=>{
    e.preventDefault()



  switch (inicio.email){
    case 'agente@gmail.com':
      navigate('/MenuAgentes');
      break;
    case 'cliente@gmail.com':
      navigate('/clienteReg');
      break;
      case 'secretaria@gmail.com':
    navigate('/menuSecretaria');
    break;
    case 'marketing@gmail.com':
      navigate('/menuEmpleadoMarketing');
      break;
    case 'cajera@gmail.com':
      navigate('/menuCajera');
      break;
    case 'administradorSitio@gmail.com':
      navigate('/menuAdministradorSitio');
      break;
    case 'jefaAdmi@gmail.com':
      navigate('/MenuJefaAdministracion');
      break;
    case 'gerente@gmail.com':
      navigate('/MenuGerente');
      break;
    case 'jefeComercializacion@gmail.com':
      navigate('/menuJefeComer');
      break;

    default:
      let bandera=false
      empleados.forEach(emp=>{
        if(inicio.email===emp.nombre_usuario && inicio.contraseña===emp.contraseña){
          bandera=true
          switch (emp.puesto_trabajo){
            case 'agente_inmobiliario':
              navigate('/MenuAgentes')
            break;
            case 'administrador_sitio':
              navigate('/menuAdministradorSitio')
            break;
            case 'secretaria':
              navigate('/menuSecretaria')
            break;
            case 'marketing':
              navigate('/menuEmpleadoMarketing')
            break;
            case 'jefe_administrativo':
              navigate('/MenuJefaAdministracion')
            break;
            case 'jefe_comercializacion':
              navigate('/menuJefeComer')
            break;
            case 'cajero':
              navigate('/menuCajera')
            break;
            default:
              navigate('/MenuGerente')
              
            break;
            
          }
        }
      })
      if(!bandera) alert('Datos incorrectos')
    break;



    
   
  }


  }
    return (
      <div className='login_container-principal'>
          <div className='cuadro-is'>
              <h1 className='cuadro-is-h1'>Iniciar sesión</h1>
              <form method='POST' className='cuadro-is-form'>
                    <label> Usuario:</label>
                    
                    <input type='text' name='email' value={inicio.email} onChange={(e)=>handleChange(e)}></input>
                    
                    <label> Contraseña:</label>
                    
                    <input type='password' name='contraseña' value={inicio.contraseña} onChange={(e)=>handleChange(e)}></input>
                    
                    <input className='cuadro-is-form-submit' type='submit' onClick={onSubmit} value='iniciarSesión'></input>
              </form>     
{/*               <div className='auxiliar'>
             
              <Link to={'/MenuAgentes'}> <button>agente</button></Link>
              </div> */}
          </div>
      </div>
    )
  }
  
  export default InicioSesion
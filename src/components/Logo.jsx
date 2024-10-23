import React, { useEffect, useRef } from 'react'
import logoimg from '../assets/Logo.svg'
import '../styles/Logo.css'
import { useNavigate } from 'react-router-dom';
import { Prueba } from '../styles/Logostyle';


const Logo = () => {

  const timeOut = useRef(null);
  const navigate = useNavigate()

  useEffect(() => {
    timeOut.current = setTimeout(() => {
      navigate("/welcome")
    }, 3500);

    return () => {
      clearTimeout(timeOut.current);
    };
  }, []);



  return (
    <>
      <Prueba>
        <img src={logoimg} alt="Logo"/>
      </Prueba>






    </>
  )
}

export default Logo
import React, { useEffect, useRef, useState } from 'react'
import primero from "../assets/Svg1.png"
import segundo from "../assets/Svg2.png"
import tercero from "../assets/Svg3.png"
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ContainerCarrusel = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    background: #242424;
    `;

    const ContainerImagen = styled.div`
    width: 90%;
    height: 58%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 70px 0 0 0;
    `;

    const ImagenCarrusel = styled.img`
    width: 100%;
    height: 81%;
    `;

    const IndicadorContainer = styled.div`
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    `;

const Indicador = styled.div`
    width: ${(props) => props.width};
    height: 10px;
    border-radius: 10px;
    background-color: ${(props) => props.bgColor};
    opacity: ${(props) => props.opacity};
    margin: 8px;
    `;

    const TextoImagenCarrusel = styled.span`
    width: 230px;
    text-align: center;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 400;
    `;

    const Boton = styled.button`
    width: 90%;
    height: 44px;
    background-color: #FFE031;
    color: #414141;
    font-weight: 500;
    font-size: 14px;
    border: 0;
    border-radius: 10px;
    margin-top: 16px;
    margin-bottom: 30px;
    `;

const Welcome = () => {
  const [contadorImagen, setContadorImagen] = useState(0)
  const listaImagenes = [primero, segundo, tercero]
  const textoImagenesCarrusel  = ['Bienvenido a nuestra plataforma', 'Aprenderas cosas nuevas sobre autos', 'Empieza tu camino automovilistico']

  const navigation = useNavigate()

  const interval = useRef(null);
  useEffect(() => {
    interval.current = setInterval(() => {
        if (contadorImagen !== listaImagenes.length - 1) {
            setContadorImagen(contadorImagen + 1);
        }
    }, 4000);
    return () => {
        clearInterval(interval.current);
    };
 });

  return (
    <>
      <ContainerCarrusel>

        <ContainerImagen>
          <ImagenCarrusel src={listaImagenes[contadorImagen]} />
          <TextoImagenCarrusel>{textoImagenesCarrusel[contadorImagen]}</TextoImagenCarrusel>
        </ContainerImagen>

        <IndicadorContainer>
          {listaImagenes.map((img, index) => (
            <Indicador
              key={img}
              bgColor={index === contadorImagen ? '#FFE031' : '#FFE031'}
              opacity={index === contadorImagen ? '1' : '0.3'}
              width={index === contadorImagen ? '26.37px' : '9.13px'} />
          ))}
        </IndicadorContainer>

          <Boton onClick={()=>{navigation("/login")}}>Ingresar</Boton>

      </ContainerCarrusel>


    </>
  )
}

export default Welcome
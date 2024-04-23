import styled, { keyframes } from 'styled-components'
import { colors } from '../../styles'

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`

export const Container = styled.div`
  padding: 16px;
  background-color: ${colors.black};
  overflow: hidden; // Esconde o overflow para a animação parecer contínua
  div {
    display: block;
    text-align: center;

    span {
      color: ${colors.white};
      font-size: 12px;
      font-weight: bold;
    }
  }

  // Contêiner para as imagens que será animado
  .images-container {
    display: flex;
    animation: ${scroll} 15s linear infinite;
  }

  img {
    margin-top: 16px;
    margin-right: 16px;
    margin-bottom: 24px;
  }
`

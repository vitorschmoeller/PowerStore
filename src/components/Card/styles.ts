import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Card = styled.div`
  border: 0px solid ${colors.black};
  width: 300px;
  height: 400px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 10px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  img {
    width: 100%;
    height: 280px;
    border-radius: 8px;
    max-width: 100%;
  }

  h3 {
    font-size: 22px;
    font-weight: bold;
    margin-top: 32px;
    margin-bottom: 8px;
  }

  p {
    font-size: 12px;
    margin-bottom: 32px;
    color: ${colors.red};
  }
  @media (max-width: ${breakpoints.desktop}) {
    width: 100%;
  }
  @media (max-width: ${breakpoints.tablet}) {
    img {
      width: ;
    }
  }
`

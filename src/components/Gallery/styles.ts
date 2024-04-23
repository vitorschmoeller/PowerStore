import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.section`
  padding: 32px 0;
  background: linear-gradient(to right, #ff4462, #0451fc);
  display: block;
  ul {
    display: flex;
    justify-content: center;

    li {
      list-style-type: none;

      img {
        height: 300px;
        transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
        &:hover {
          transform: scale(1.08);
          opacity: 0.9;
        }
      }
    }
  }
  h3 {
    font-size: 24px;
    font-weight: bold;
    display: block;
    text-align: center;
    margin-bottom: 16px;
    color: ${colors.moreWhite};
  }

  img {
    heigth: 300px;
    width: 300px;
    margin-right: 14px;
    border-radius: 4px;
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.1);
  }
`

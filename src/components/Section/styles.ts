import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Container = styled.section``

export const CardContainer = styled.div`
  display: flex;
  padding-bottom: 72px;
  gap: 12px;
  .border {
    border-bottom: 4px solid ${colors.red};
  }
`

export const CardButton = styled.div`
  max-width: 600px;
  width: 100%;
  height: 130px;
  background-color: ${colors.gray};
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-shadow: 0 10px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  @media (max-width: ${breakpoints.desktop}) {
    h3 {
      font-size: 18px;
      font-weight: bold;
    }
    p {
      font-size: 14px;
      text-align: center;
    }
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 8px;

  li {
    list-style-type: none;
  }

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

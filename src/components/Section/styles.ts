import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.section``

export const CardContainer = styled.div`
  display: flex;
  padding-bottom: 72px;

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
  margin-right: 16px;
  box-shadow: 0 10px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 8px;

  li {
    list-style-type: none;
  }
`

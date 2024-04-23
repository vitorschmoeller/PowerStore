import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles'

export const Container = styled.div``

export const Product = styled.div`
  height: 400px;
  max-width: 300px;
  width: 100%;
  text-align: center;

  span {
    font-size: 14px;
    display: block;
    margin-top: 8px;
    margin-bottom: 16px;
  }
`
export const Image = styled.img`
  width: 100%;
  height: 220px;
  margin-bottom: 24px;
`

export const Title = styled.h4`
  font-size: 26px;
  font-weight: bold;
`
export const Button = styled(Link)`
  padding: 8px 20px;
  max-width: 156px;
  width: 100%;
  background-color: ${colors.black};
  color: ${colors.moreWhite};
  border: none;
  margin-bottom: 14px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    transition: ease 0.3s;
    background-color: ${colors.red};
  }
`

export const Star = styled.img`
  height: 18px;
  width: 16px;
`
export const SmallContaier = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`

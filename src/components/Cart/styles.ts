import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import garbage from '../../assets/images/lixo.svg'
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  overflow-y: auto;

  &.is-open {
    display: flex;
  }
`
export const Sidebar = styled.aside`
  background-color: ${colors.white};
  z-index: 1;
  padding: 16px 0 16px;
  max-width: 400px;
  width: 100%;

  .empty-text {
    font-size: 14px;
    line-height: 22px;
    font-weight: bold;
    text-align: center;
  }
  @media (max-width: ${breakpoints.tablet}) {
    max-width: 320px;
  }
`
export const ProductContainer = styled.div`
  margin: 8px 8px;
  max-height: calc(100vh - 100px);
  overflow-y: auto;
`
export const Prices = styled.p`
  font-weight: bold;
  font-size: 20px;
  color: ${colors.black};
  margin-bottom: 24px;

  span {
    display: block;
    font-size: 12px;
  }
`

export const ButtonCheckout = styled.button`
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  background-color: ${colors.black};
  color: ${colors.moreWhite};
  border: none;
  cursor: pointer;
  padding: 12px;
`

export const Quantity = styled.p`
  font-weight: bold;
  font-size: 24px;
  color: ${colors.black};
  margin-top: 32px;
  margin-bottom: 16px;
`
export const CartItem = styled.li`
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  position: relative;
  margin-bottom: 8px;
  img {
    height: 120px;
    width: 120px;
    object-fit: cover;
    margin-right: 16px;
  }

  button {
    position: absolute;
    right: 0;
    background: url(${garbage}) no-repeat center center;
    background-size: cover;
    height: 18px;
    width: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
  }

  div {
    span {
      position: absolute;
      right: 0;
      bottom: 0;
      font-size: 18px;
      font-weight: bold;
    }
    h3 {
      font-weight: bold;
      font-size: 24px;
    }
  }
`
export const Title = styled.h2`
  font-size: 28px;
  font-weight: 900;
  padding-bottom: 8px;
  padding-left: 8px;
  border-bottom: 1px solid;
  display: flex;
  justify-content: space-between;
  position: relative;
  button {
    position: absolute;
    background-color: ${colors.red};
    border: none;
    font-weight: bold;
    color: ${colors.moreWhite};
    font-size: 16px;
    padding: 4px 16px;
    cursor: pointer;
    right: 0;
    // transform: rotate(deg);
  }
`

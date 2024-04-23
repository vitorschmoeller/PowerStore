import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

type PropsButton = {
  color?: string
}

type ButtonProps = {
  isActive: boolean
}

export const Container = styled.div`
  display: flex;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  background-color: ${colors.checkoutBack};
  background: linear-gradient(
    to right,
    ${colors.checkoutBack} 51%,
    ${colors.moreWhite} 50%
  );

  width: 100%;
  height: 100%;
  justify-content: space-between;

  @media (max-width: ${breakpoints.desktop}) {
    background-color: ${colors.moreWhite};
    background: none;
  }
`
export const divCont = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${breakpoints.desktop}) {
    display: flex;
    flex-direction: column-reverse;
  }
`
export const CartItem = styled.li`
  display: flex;
  flex: auto;
  position: relative;
  margin-bottom: 8px;
  max-width: 444px;
  align-items: center;

  img {
    width: 64px;
    height: 64px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 6px;
    margin-right: 8px;
  }
  span {
    position: absolute;
    right: 0;
    font-weight: bold;
  }
`
export const Aside = styled.aside`
  width: 100%;
  border-left: 1px solid rgba(0, 0, 0, 0.3);
  div {
    margin-left: 38px;
    margin-top: 38px;
  }
`
export const FormContainer = styled.form`
  max-width: 100%;
  width: 100%;
  margin-right: 38px;
`
export const ButtonContainer = styled.div`
  display: flex;
  gap: 11px;
  width: 100%;
  margin-top: 38px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  padding-bottom: 8px;

  @media (max-width: ${breakpoints.tablet}) {
    flex-wrap: wrap;
  }
`

export const PaymentOptions = styled.button<PropsButton>`
  flex: 1;
  padding: 12px 18px;
  border-radius: 6px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => {
    switch (props.color) {
      case 'purple':
        return '#592ff4'
      case 'yellow':
        return '#fad416'
      case 'darkYellow':
        return '#FFC439'
      case 'green':
        return '#10AC84'
      default:
        return colors.moreBlack
    }
  }};
`
export const ContactContainer = styled.div`
  display: block;

  h4 {
    font-size: 26px;
    color: ${colors.moreBlack};
    margin-bottom: 14px;
  }
  input {
    width: 100%;
    padding: 16px 10px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 6px;
    font-size: 14px;
    margin-bottom: 14px;

    &.error {
      border: 1px solid red;
    }
  }
`
export const City = styled.div`
  display: flex;
  gap: 14px;
`
export const CheckContainer = styled.div`
  display: flex;

  input {
    width: 16px;
    height: 16px;
    margin-right: 6px;
  }
`

export const DiscountContainer = styled.div`
  display: flex;
  justify-content: space-between;

  input {
    width: 100%;
    padding: 16px 10px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 6px;
    font-size: 14px;
    margin-bottom: 14px;
  }

  button {
    width: 65px;
    height: 50px;
    font-size: 14px;
    background-color: #ccc;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 6px;
    cursor: pointer;
    color: #707070;
  }
`
export const PaymentContainer = styled.div`
  background-color: #dedede;
  padding: 18px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  display: none;
  margin-top: 12px;
  &.is-visible {
    display: block;
  }

  select {
    border-radius: 6px;
  }
`
export const ExpirationContainer = styled.div`
  display: flex;
  gap: 11px;
`
export const OptionButton = styled(PaymentOptions)<ButtonProps>`
  cursor: pointer;
  font-size: 18px;
  color: ${colors.moreWhite};
  font-weight: bold;
  background-color: ${(props) =>
    props.isActive === true ? '#10AC84' : colors.moreBlack};
`
export const PaymentOptionContainer = styled.div`
  display: flex;
  gap: 11px;
`
export const PaymentButton = styled.button`
  max-width: 100%;
  width: 100%;

  margin-top: 24px;
  color: ${colors.moreBlack};
  background-color: #6be3ed;
  font-size: 18px;
  padding: 16px 0;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`
export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    font-weight: bold;
  }
`

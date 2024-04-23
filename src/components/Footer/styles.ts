import styled from 'styled-components'
import { colors } from '../../styles'
export const Container = styled.footer`
  padding: 64px 0 64px 0;
  background-color: ${colors.red};
  color: ${colors.moreWhite};
`
export const Align = styled.div`
  display: flex;
`
export const LinkContainer = styled.div`
  .flex {
    display: flex;
  }
  margin-right: 60px;
  a {
    display: block;
    text-decoration: none;
    color: ${colors.moreWhite};
  }
  h3 {
    font-size: 36px;
    font-weight: 900;
  }

  h4 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  p {
    font-weight: bold;
    font-size: 16px;
    margin: 16px 0;
    line-height: 24px;
  }

  input {
    width: 100%;
    border: none;
    background-color: transparent;
    border-bottom: 1px solid ${colors.moreWhite};
    font-size: 14px;
    color: ${colors.moreWhite};
  }

  button {
    border: none;
    background-color: ${colors.moreWhite};
    color: ${colors.red};
    font-weight: bold;
    font-size: 12px;
    padding: 8px 20px;
    margin-bottom: 6px;
    cursor: pointer;
  }

  a {
    margin-bottom: 8px;
  }
`

export const SocialMedia = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 6px;
  cursor: pointer;
`

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CheckContainer = styled.div`
  display: flex;
  margin-top: 8px;
  input {
    margin-right: 6px;
    height: 14px;
    width: 14px;
    background-color: #0075ff;
  }

  label {
    font-size: 12px;
  }
`

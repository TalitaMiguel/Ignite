import styled from 'styled-components'
import MaskedInput from 'react-text-mask'
import { PaymentMethodType } from '.'

export const Card = styled.section`
  width: 100%;
  padding: 2rem;
  margin: 1rem 0;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-card']};
`
export const CartTitle = styled.div`
  display: flex;
  gap: 0.5rem;
  padding-bottom: 2rem;

  h3 {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.25rem;
  }

  p {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.15rem;
    color: ${(props) => props.theme['base-text']};
  }
`

export const AddresInputCEP = styled(MaskedInput)`
  border: 0;
  height: 2.5rem;
  padding: 0 0.75rem;
  font-weight: 400;
  font-size: 0.875;
  border-radius: 4px;
  color: ${(props) => props.theme['base-text']};
  border-bottom: ${(props) => props.theme['base-button']};
  background-color: ${(props) => props.theme['base-input']};

  &:focus {
    border: 1px solid ${(props) => props.theme['yellow-dark']};
  }

  &:focus-visible {
    outline: 1px solid ${(props) => props.theme['yellow-dark']};
  }
`

export const AddresInputs = styled.input`
  border: 0;
  height: 2.5rem;
  padding: 0 0.75rem;
  font-weight: 400;
  font-size: 0.875;
  border-radius: 4px;
  margin: 0.5rem 0.3rem 0.5rem 0;
  color: ${(props) => props.theme['base-text']};
  border-bottom: ${(props) => props.theme['base-button']};
  background-color: ${(props) => props.theme['base-input']};

  &:focus {
    border: 1px solid ${(props) => props.theme['yellow-dark']};
  }

  &:focus-visible {
    outline: 1px solid ${(props) => props.theme['yellow-dark']};
  }
`

export const MessageErrors = styled.p`
  font-size: 0.75rem;
  font-weight: 700;
  color: tomato;
  padding-left: 0.375rem;
`

export const TypePaymentContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const TypePaymentDiv = styled.div<PaymentMethodType>`
  display: flex;
  align-items: center;
  width: 9rem;
  height: 2.5rem;
  font-size: 0.75rem;
  padding: 0 0.75rem;
  cursor: pointer;
  border-radius: 4px;
  color: ${(props) => props.theme['base-text']};

  border: ${(props) =>
    props.isActive
      ? `2px solid ${props.theme.purple}`
      : `2px solid ${props.theme['base-button']}`};

  background-color: ${(props) =>
    props.isActive ? props.theme['purple-light'] : props.theme['base-button']};

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  input {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  label {
    width: 100%;
    height: 100%;
    span {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  svg {
    color: ${(props) => props.theme.purple};
    margin-right: 0.5rem;
  }
`

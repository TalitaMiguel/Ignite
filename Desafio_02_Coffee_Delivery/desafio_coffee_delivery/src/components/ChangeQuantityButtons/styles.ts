import styled from 'styled-components'

export const QuantityButtons = styled.div`
  button {
    display: flex;
    width: 100%;
    height: 100%;
    border: none;
    cursor: pointer;
    border-radius: 6px;
    align-items: center;
    color: ${(props) => props.theme.purple};
    background-color: ${(props) => props.theme['base-button']};

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }

    &:disabled {
      cursor: not-allowed;
    }
  }
`

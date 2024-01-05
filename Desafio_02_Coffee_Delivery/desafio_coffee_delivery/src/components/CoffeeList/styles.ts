import styled from 'styled-components'

export const Card = styled.div`
  width: 15rem;
  height: 19.375rem;
  margin: 3.375rem 0;
  border-radius: 6px 36px;
  background: ${(props) => props.theme['base-card']};
`

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  padding: 1.25rem;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -40px;
  }

  span {
    display: flex;
    padding: 4px 8px;
    font-size: 0.625rem;
    font-weight: 700;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    color: ${(props) => props.theme['yellow-dark']};
    background-color: ${(props) => props.theme['yellow-light']};
  }

  p {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.125rem;
    text-align: center;
    color: ${(props) => props.theme['base-label']};
  }
`

export const CardDetails = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem;

  p {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
    color: ${(props) => props.theme['base-text']};
  }

  small {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
  }

  section {
    display: inline-flex;
    gap: 0.5rem;

    div {
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 0 0.5rem;
      gap: 0.25rem;
      border-radius: 6px;
      background-color: ${(props) => props.theme['base-button']};

      span {
        font-size: 16px;
        font-weight: 400;
        line-height: 1.25rem;
        font-family: 'Roboto' sans-serif;
        color: ${(props) => props.theme['base-title']};
      }
    }
  }
`

export const AddCartButton = styled.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['purple-dark']};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme.purple};
  }
`

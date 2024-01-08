import styled from 'styled-components'

export const CartContainer = styled.main`
  display: grid;
  grid-template-columns: 56.5% 40%;
  gap: 2rem;

  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
`

export const Order = styled.div`
  h2 {
    font-family: 'Baloo 2' sans-serif;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.468rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const FormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

export const SelectedCoffeesContainer = styled.aside`
  h2 {
    font-family: 'Baloo 2' sans-serif;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.468rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const SelectedCoffeesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2rem;
  margin: 1rem 0;
  border-radius: 6px 44px;
  background-color: ${(props) => props.theme['base-card']};
`

export const CoffeeItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`

export const CoffeeAddedCart = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  img {
    width: 4rem;
    height: 4rem;
  }
`

export const InfoCoffeeAddedCart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h3 {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const ButtonsCoffeeAddedCart = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.5rem;
    gap: 0.25rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme['base-button']};

    p {
      font-size: 1.5rem;
      cursor: pointer;
      color: ${(props) => props.theme.purple};
    }

    span {
      font-size: 16px;
      font-weight: 400;
      line-height: 1.25rem;
      font-family: 'Roboto', sans-serif;
      color: ${(props) => props.theme['base-title']};
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border: none;
    padding: 0 0.5rem;
    border-radius: 6px;
    font-size: 0.75rem;
    cursor: pointer;
    color: ${(props) => props.theme['base-text']};
    background-color: ${(props) => props.theme['base-button']};

    svg {
      color: ${(props) => props.theme.purple};
    }

    &:hover {
      background: ${(props) => props.theme['base-hover']};
    }
  }
`

export const PriceCoffeeAddedCart = styled.div`
  span {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1rem;
    font-weight: 800;
    color: ${(props) => props.theme['base-text']};
  }
`

export const DefaulOrder = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 400;
  line-height: 1.25rem;
  font-family: 'Roboto', sans-serif;
  color: ${(props) => props.theme['base-text']};

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

export const FinalizeOrder = styled(DefaulOrder)`
  gap: 0.75rem;
  span {
    font-size: 0.875rem;
  }

  p {
    font-size: 1rem;
  }

  button {
    display: flex;
    gap: 0.25rem;
    border-radius: 6px;
    margin-top: 1.5rem;
    padding: 0.75rem 0.5rem;
    border: none;
    cursor: pointer;
    align-items: center;
    align-self: stretch;
    justify-content: center;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme.yellow};

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }

    &:not(:disabled):hover {
      background-color: ${(props) => props.theme['yellow-dark']};
    }
  }
`

export const TotalOrder = styled(DefaulOrder)`
  color: ${(props) => props.theme['base-subtitle']};

  span {
    font-size: 1.25rem;
    font-weight: 700;
  }

  p {
    font-size: 1.25rem;
    font-weight: 700;
  }
`

import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto 4rem;
  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;
  margin-top: 4.375rem;
`

export const HomeContent = styled.div`
  display: flex;
  width: 54rem;
  margin: 0 auto;

  align-items: center;
  justify-content: space-between;

  h1 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.8rem;
  }

  span {
    color: ${(props) => props.theme['base-span']};
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.4rem;
  }
`

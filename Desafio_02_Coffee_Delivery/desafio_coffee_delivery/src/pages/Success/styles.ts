import styled from 'styled-components'

export const SuccessContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
`

export const SuccessWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  margin: 2rem 0;
  align-items: flex-start;
  justify-content: left;
`

export const Title = styled.div`
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    line-height: 2.5rem;
    color: ${(props) => props.theme['yellow-dark']};
  }

  p {
    font-size: 1.25;
    line-height: 2rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const ListBackground = styled.div`
  width: 32.5rem;
  border-radius: 6px 36px;
  background: linear-gradient(to right, #dbac2c, #4b2995);
`

export const ListContainer = styled.div`
  display: flex;
  margin: 0.0625rem;
  padding: 2.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  border-radius: 5px 35px;
  background: ${(props) => props.theme.background};
`
export const BackgroundIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;

  border-radius: 999px;
  background-color: ${(props) => props.theme[`${props.color}`]};
  color: ${(props) => props.theme.white};
`

export const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  span {
    font-family: Roboto;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
    color: ${(props) => props.theme['base-text']};
  }
`

export const ListText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.3rem;
`

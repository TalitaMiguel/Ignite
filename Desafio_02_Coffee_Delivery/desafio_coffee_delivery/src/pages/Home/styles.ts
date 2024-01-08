import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const BannerImg = styled.div`
  width: 100%;
  height: 450px;
  background: url('../../src/assets/background.svg') no-repeat right top fixed;
  background-size: 100%;
  position: relative;

  filter: blur(8px);
  -webkit-filter: blur(8px);
`

export const BannerContainer = styled.div`
  width: 100%;
  max-width: 1120px;

  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  justify-content: center;

  gap: 3rem;
  padding: 5rem 0;
  position: absolute;
  top: 7rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2.5rem;
    font-weight: 800;
    line-height: 3rem;
    margin-bottom: 1rem;
    color: ${(props) => props.theme['base-title']};
  }

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.625rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const ListBannerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 8px;
  margin-top: 4rem;
`

export const ListBanner = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-text']};
  }
`

export const BackgroundBannerIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;

  border-radius: 999px;
  background-color: ${(props) => props.theme[`${props.color}`]};
  color: ${(props) => props.theme.white};
`

export const BannerImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 24rem;
  }
`

export const CoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1120px;

  h2 {
    margin: 4rem 0 0;
  }
`

export const Cards = styled.div`
  display: flex;
  gap: 0 3rem;
  flex-wrap: wrap;
`

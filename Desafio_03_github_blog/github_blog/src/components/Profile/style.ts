import styled from 'styled-components'

export const ProfileContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  margin-top: -5rem;

  position: sticky;
`
export const ProfileCard = styled.div`
  width: 54rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 12rem 1fr;
  background: ${(props) => props.theme['base-profile']};
  border-radius: 6px;
  padding: 2rem;

  img {
    width: 9.25rem;
    height: 9.25rem;
    object-fit: cover;
    border-radius: 8px;
  }
`

export const ProfileContent = styled.div`
  section {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      color: ${(props) => props.theme['base-title']};
      font-size: 1.5rem;
      font-weight: 700;
      padding: 1rem 0;
    }

    a {
      text-decoration: none;
      font-size: 0.75rem;
      font-weight: 700;
      color: ${(props) => props.theme.blue};
    }

    svg {
      width: 0.75rem;
      height: 0.75rem;
      padding-left: 8px;
    }
  }

  span {
    color: ${(props) => props.theme['base-text']};
    font-size: 1rem;
    font-weight: 400;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1.5rem;
    padding: 1rem 0 0;

    p {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 1rem;
      font-weight: 400;
    }

    svg {
      width: 1.125rem;
      height: 1.125rem;
      padding-right: 8px;
      color: ${(props) => props.theme['base-label']};
    }
  }
`

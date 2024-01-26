import styled from 'styled-components'

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 49.5% 49.5%;
  gap: 0.75rem;

  width: 54rem;
  margin: 0 auto;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: ${(props) => props.theme['base-post']};
  padding: 2rem;
  cursor: pointer;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.25rem;

    h3 {
      max-width: 17rem;
      color: ${(props) => props.theme['base-title']};
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 2rem;
    }

    span {
      color: ${(props) => props.theme['base-span']};
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.375rem;
    }
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;

    color: ${(props) => props.theme['base-text']};
    font-size: 1rem;
    font-weight: 400;
  }
`

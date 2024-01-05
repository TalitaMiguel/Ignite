import { HTMLAttributes } from 'react'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0%;
  background-color: ${(props) => props.theme.background};
  padding: 2rem 0;

  nav {
    display: flex;
    gap: 0.75rem;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 6px;
      padding: 0.5rem;
      text-decoration: none;
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
    }

    a:first-child {
      color: ${(props) => props.theme.purple};
      background-color: ${(props) => props.theme['purple-light']};

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme.purple};
      }
    }

    a:last-child {
      color: ${(props) => props.theme['yellow-dark']};
      background-color: ${(props) => props.theme['yellow-light']};

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme.yellow};
      }
    }
  }
`
interface CountTotalItensProps extends HTMLAttributes<HTMLDivElement> {
  'data-count'?: string
}

export const CountTotalItens = styled.div<CountTotalItensProps>`
  &::before {
    content: ${(props) =>
      props['data-count'] !== '0' ? `attr(data-count)` : "''"};
    background: ${(props) => props.theme['yellow-dark']};
    font-size: 0.75rem;
    font-weight: 700;
    color: ${(props) => props.theme.white};
    display: ${(props) => (props['data-count'] !== '0' ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
    min-height: 1.5rem;
    min-width: 1.5rem;
    position: absolute;
    top: 25px;
    right: -9px;
    border-radius: 50%;
  }
`

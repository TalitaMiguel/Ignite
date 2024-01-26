import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  width: 100%;
  max-width: 1120px;
  margin-bottom: 3rem;

  input {
    width: 54rem;
    margin: 0.75rem auto;
    border-radius: 6px;
    padding: 0.75rem 1rem;
    border: 1px solid ${(props) => props.theme['base-border']};
    background: ${(props) => props.theme['base-input']};
  }
`

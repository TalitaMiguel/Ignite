import Markdown from 'react-markdown'
import styled from 'styled-components'

export const IssueDetailsContainer = styled.div`
  width: 100%;
  max-width: 54rem;
  margin: 0 auto 4rem;
  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`
export const StyledMarkdown = styled(Markdown)`
  h1,
  h2 {
    margin: 1.5rem 0;
  }

  p {
    color: ${(props) => props.theme['base-span']};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.4rem;
  }

  pre {
    background-color: #161b22;

    padding: 10px;
    border-radius: 5px;
    overflow-x: auto;
    margin: 2rem 0;
  }

  code {
    color: ${(props) => props.theme['base-text']};
  }
`

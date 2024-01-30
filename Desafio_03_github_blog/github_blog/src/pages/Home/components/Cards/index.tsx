/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from 'react'
import { Card, CardsContainer, StyledMarkdown } from './style'
import { useNavigate } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { IssuesContext } from '../../../../contexts/IssuesContext'

export function Cards() {
  const { issues, errorSearch } = useContext(IssuesContext)
  const navigate = useNavigate()

  function goToDetails(id: number) {
    navigate(`/details/${id}`)
  }

  return (
    <CardsContainer>
      {errorSearch ? (
        <h1>Conteúdo não encontrado!</h1>
      ) : (
        issues.map((issue) => {
          return (
            <Card key={issue.id} onClick={() => goToDetails(issue.number)}>
              <header>
                <h3>{issue.title}</h3>
                <span>
                  {formatDistanceToNow(new Date(issue.created_at), {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </span>
              </header>

              <StyledMarkdown>{issue.body}</StyledMarkdown>
            </Card>
          )
        })
      )}
    </CardsContainer>
  )
}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useIssues } from '../../hooks/useIssues'
import { useContext } from 'react'
import { IssuesContext } from '../../contexts/IssuesContext'
import {
  DetailsInfoCard,
  DetailsInfoContainer,
  DetailsInfoContent,
  DetailsWrapper,
} from './style'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'

export function DetailsInfoBox() {
  const issueFiltered = useIssues()
  const { user } = useContext(IssuesContext)

  console.log(issueFiltered)

  return (
    <DetailsInfoContainer>
      <DetailsInfoCard>
        {issueFiltered.map((item) => {
          return (
            <div key={item.id}>
              <DetailsWrapper>
                <div>
                  <a href="/">
                    <FontAwesomeIcon icon={faChevronLeft} />
                    <span>VOLTAR</span>
                  </a>
                </div>
                <div>
                  <a href={item.html_url} target="_blank" rel="noreferrer">
                    VER NO GITHUB
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </a>
                </div>
              </DetailsWrapper>

              <DetailsInfoContent>
                <section>
                  <h3>{item.title}</h3>
                </section>
                <div>
                  <p>
                    <FontAwesomeIcon icon={faGithub} />
                    {user?.login}
                  </p>

                  <p>
                    <FontAwesomeIcon icon={faCalendarDay} />
                    {formatDistanceToNow(new Date(item.created_at), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </p>

                  <p>
                    <FontAwesomeIcon icon={faComment} />
                    {item.comments} comentários
                  </p>
                </div>
              </DetailsInfoContent>
            </div>
          )
        })}
      </DetailsInfoCard>
    </DetailsInfoContainer>
  )
}

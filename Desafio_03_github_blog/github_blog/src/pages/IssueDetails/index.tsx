import { IssueDetailsContainer, StyledMarkdown } from './style'
import { DetailsInfoBox } from '../../components/DetailsInfoBox'
import { useIssues } from '../../hooks/useIssues'

export function IssueDetails() {
  const issueFiltered = useIssues()

  return (
    <>
      <DetailsInfoBox />
      <IssueDetailsContainer>
        {issueFiltered.map((item) => {
          return (
            <div key={item.id}>
              <StyledMarkdown>{item.body}</StyledMarkdown>
            </div>
          )
        })}
      </IssueDetailsContainer>
    </>
  )
}

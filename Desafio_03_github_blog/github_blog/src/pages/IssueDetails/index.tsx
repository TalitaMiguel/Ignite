import { useContext } from 'react'
import { IssuesContext } from '../../contexts/IssuesContext'
import { useParams } from 'react-router-dom'

export function IssueDetails() {
  const { issues } = useContext(IssuesContext)
  const params = useParams()

  console.log('issues', issues)
  console.log('params', params.issueId)

  const issueFiltered = issues.filter(
    (issue) => issue.number === Number(params.issueId),
  )

  console.log('result', issueFiltered)
  return (
    <div>
      {issueFiltered.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.body}</p>
          </div>
        )
      })}
    </div>
  )
}

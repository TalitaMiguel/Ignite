import { useContext } from 'react'
import { IssuesContext } from '../contexts/IssuesContext'
import { useParams } from 'react-router-dom'

export function useIssues() {
  const { issues } = useContext(IssuesContext)
  const params = useParams()

  const issueFiltered = issues.filter(
    (issue) => issue.number === Number(params.issueId),
  )

  return issueFiltered
}

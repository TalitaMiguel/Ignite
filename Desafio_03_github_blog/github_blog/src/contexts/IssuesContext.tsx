import { ReactNode, createContext, useEffect, useState } from 'react'

interface Issues {
  id: number
  created_at: string
  title: string
  url: string
  body: string
  number: number
  comments: number
  html_url: string
}

interface User {
  id: number
  login: string
  name: string
  bio: string
  avatar_url: string
  followers: number
  html_url: string
}

interface SearchIssuesType {
  query: string
}

interface IssuesContextType {
  issues: Issues[]
  user: User | null
  SearchIssues: (data: SearchIssuesType) => void
  errorSearch: boolean
}

interface IssuesProviderProps {
  children: ReactNode
}

export const IssuesContext = createContext({} as IssuesContextType)

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<Issues[]>([])
  const [user, setUser] = useState<User | null>(null)
  const [errorSearch, setErrorSearch] = useState<boolean>(false)

  async function LoadIssues() {
    const response = await fetch(
      'https://api.github.com/repos/TalitaMiguel/ignite/issues',
    )
    const data = await response.json()

    setIssues(data)
  }

  async function LoadUser() {
    const response = await fetch('https://api.github.com/users/TalitaMiguel')
    const data = await response.json()

    setUser(data)
  }

  async function SearchIssues(data: SearchIssuesType) {
    console.log('data', data.query)
    const response = await fetch(
      `https://api.github.com/search/issues?q=${data.query}%20repo:TalitaMiguel/ignite`,
    )
    const issuesFiltered = await response.json()

    if (issuesFiltered.total_count !== 0) {
      setIssues(issuesFiltered.items)
      setErrorSearch(false)
    } else {
      setErrorSearch(true)
    }
  }

  useEffect(() => {
    LoadIssues()
    LoadUser()
  }, [])

  return (
    <IssuesContext.Provider value={{ issues, user, SearchIssues, errorSearch }}>
      {children}
    </IssuesContext.Provider>
  )
}

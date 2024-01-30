import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

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
    const response = await api.get('/repos/TalitaMiguel/ignite/issues')

    setIssues(response.data)
  }

  async function LoadUser() {
    const response = await api.get('/users/TalitaMiguel')

    setUser(response.data)
  }

  async function SearchIssues(data: SearchIssuesType) {
    const response = await api.get(
      `/search/issues?q=${data.query}%20repo:TalitaMiguel/ignite`,
    )

    if (response.data?.total_count > 0) {
      setIssues(response.data?.items)
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

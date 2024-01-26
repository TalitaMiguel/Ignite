import { ReactNode, createContext, useEffect, useState } from 'react'

interface Issues {
  id: number
  created_at: string
  title: string
  url: string
  body: string
  number: number
}

interface IssuesContextType {
  issues: Issues[]
}

interface IssuesProviderProps {
  children: ReactNode
}
export const IssuesContext = createContext({} as IssuesContextType)

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<Issues[]>([])

  async function LoadIssues() {
    const response = await fetch(
      'https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues',
    )
    const data = await response.json()

    console.log('data----', data)

    setIssues(data)
  }

  useEffect(() => {
    LoadIssues()
  }, [])

  return (
    <IssuesContext.Provider value={{ issues }}>
      {children}
    </IssuesContext.Provider>
  )
}

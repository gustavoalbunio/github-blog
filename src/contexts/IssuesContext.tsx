import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

export interface Issue {
  id: number
  issueUrl: string
  title: string
  totalComments: number
  createdAt: string
  author: string
  content: string
}

interface IssueContextType {
  issues: Issue[]
  issue: Issue
  selectIssueToView: (issue: Issue) => void
  searchIssues: (param: string) => void
}

interface IssueProviderProps {
  children: ReactNode
}

export const IssueContext = createContext<IssueContextType>(
  {} as IssueContextType,
)

export function IssueProvider({ children }: IssueProviderProps) {
  const [issues, setIssues] = useState<Issue[]>([])
  const [issue, setIssue] = useState<Issue>({} as Issue)

  async function searchIssues(param?: string) {
    const { data } = await api.get('/search/issues', {
      params: {
        q: `${param || ''} repo:gustavoalbunio/github-blog`,
      },
    })

    if (data) {
      const issuesList = data.items.map((item: any) => ({
        id: item.id,
        issueUrl: item.html_url,
        title: item.title,
        totalComments: item.comments,
        createdAt: item.created_at,
        author: item.user.login,
        content: item.body,
      }))

      setIssues(issuesList)
      setIssue({} as Issue)
    }
  }

  function selectIssueToView(issue?: Issue) {
    setIssue(issue || ({} as Issue))
  }

  useEffect(() => {
    searchIssues()
  }, [])

  return (
    <IssueContext.Provider
      value={{ issues, issue, selectIssueToView, searchIssues }}
    >
      {children}
    </IssueContext.Provider>
  )
}

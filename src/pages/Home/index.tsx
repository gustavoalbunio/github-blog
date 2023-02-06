import { useContext } from 'react'

import { Profile } from '../../components/Profile'
import { SearchForm } from '../../components/SearchForm'
import { IssueContext } from '../../contexts/IssuesContext'
import { ProfileProvider } from '../../contexts/ProfileContext'
import { dateDistanceFormat } from '../../utils/formatter'

import { CardContainer, HomeContainer } from './styles'

export function Home() {
  const { issues, selectIssueToView } = useContext(IssueContext)

  return (
    <HomeContainer>
      <ProfileProvider>
        <Profile />
      </ProfileProvider>

      <h3>
        Publicações
        <span>{issues.length} publicações</span>
      </h3>

      <SearchForm />

      <section>
        {issues.map((issue) => (
          <CardContainer
            to={`/issue/${issue.id}`}
            key={issue.id}
            onClick={() => selectIssueToView(issue)}
          >
            <header>
              <h2>{issue.title}</h2>
              <span>{dateDistanceFormat(issue.createdAt)}</span>
            </header>
            <p>{issue.content}</p>
          </CardContainer>
        ))}
      </section>
    </HomeContainer>
  )
}

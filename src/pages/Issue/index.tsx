/* eslint-disable react/no-children-prop */
import { useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  FaAngleLeft,
  FaCalendarDay,
  FaComment,
  FaExternalLinkAlt,
  FaGithub,
} from 'react-icons/fa'
import { useTheme } from 'styled-components'

import { Issue as IssueProps, IssueContext } from '../../contexts/IssuesContext'

import { HeaderIssue, IssueContainer } from './styles'
import { dateDistanceFormat } from '../../utils/formatter'
import { IssueContent } from './components/IssueContent'

export function Issue() {
  const theme = useTheme()
  const params = useParams()

  const { issues } = useContext(IssueContext)

  const issueSeleted =
    issues.find((issue) => issue.id === Number(params.id)) || ({} as IssueProps)

  return (
    <IssueContainer>
      <HeaderIssue>
        <section>
          <header>
            <Link to="/">
              <FaAngleLeft size={18} /> VOLTAR
            </Link>
            <Link to={issueSeleted.issueUrl} target="_blank">
              VER NO GITHUB <FaExternalLinkAlt />
            </Link>
          </header>
          <h1>{issueSeleted.title}</h1>
          <div>
            <span>
              <FaGithub size={18} color={theme['base-label']} />{' '}
              {issueSeleted.author}
            </span>
            <span>
              <FaCalendarDay size={18} color={theme['base-label']} />{' '}
              {dateDistanceFormat(issueSeleted.createdAt)}
            </span>
            <span>
              <FaComment size={18} color={theme['base-label']} />{' '}
              {issueSeleted.totalComments > 1
                ? `${issueSeleted.totalComments} comentários`
                : `${issueSeleted.totalComments} comentário`}
            </span>
          </div>
        </section>
      </HeaderIssue>

      <IssueContent content={issueSeleted.content} />
    </IssueContainer>
  )
}

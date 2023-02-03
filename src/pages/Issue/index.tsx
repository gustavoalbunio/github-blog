import {
  FaAngleLeft,
  FaCalendarDay,
  FaComment,
  FaExternalLinkAlt,
  FaGithub,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useTheme } from 'styled-components'
import { HeaderIssue, IssueContainer } from './styles'

export function Issue() {
  const theme = useTheme()

  return (
    <IssueContainer>
      <HeaderIssue>
        <section>
          <header>
            <Link to="/">
              <FaAngleLeft size={18} /> VOLTAR
            </Link>
            <Link to="https://github.com/gustavoalbunio" target="_blank">
              VER NO GITHUB <FaExternalLinkAlt />
            </Link>
          </header>
          <h1>JavaScript data types and data structures</h1>
          <div>
            <span>
              <FaGithub size={18} color={theme['base-label']} /> gustavoalbunio
            </span>
            <span>
              <FaCalendarDay size={18} color={theme['base-label']} /> Há 1 dia
            </span>
            <span>
              <FaComment size={18} color={theme['base-label']} /> 5 comentários
            </span>
          </div>
        </section>
      </HeaderIssue>
    </IssueContainer>
  )
}

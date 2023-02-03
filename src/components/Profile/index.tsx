import {
  FaBuilding,
  FaExternalLinkAlt,
  FaGithub,
  FaUserFriends,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useTheme } from 'styled-components'

import { ProfileContainer } from './styles'

export function Profile() {
  const theme = useTheme()

  return (
    <ProfileContainer>
      <img src="https://github.com/gustavoalbunio.png" alt="" />
      <section>
        <h1>
          Gustavo Albunio
          <Link to="https://github.com/gustavoalbunio" target="_blank">
            GITHUB <FaExternalLinkAlt />
          </Link>
        </h1>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <div>
          <span>
            <FaGithub size={18} color={theme['base-label']} /> gustavoalbunio
          </span>
          <span>
            <FaBuilding size={18} color={theme['base-label']} /> Grupo Acert
          </span>
          <span>
            <FaUserFriends size={18} color={theme['base-label']} /> 7 seguidores
          </span>
        </div>
      </section>
    </ProfileContainer>
  )
}

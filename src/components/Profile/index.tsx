import { useContext } from 'react'
import {
  FaBuilding,
  FaExternalLinkAlt,
  FaGithub,
  FaUserFriends,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useTheme } from 'styled-components'
import { ProfileContext } from '../../contexts/ProfileContext'

import { ProfileContainer } from './styles'

export function Profile() {
  const theme = useTheme()
  const { profile } = useContext(ProfileContext)

  return (
    <ProfileContainer>
      <img src={profile.avatarUrl} alt="" />
      <section>
        <h1>
          Gustavo Albunio
          <Link to={`https://github.com/${profile.username}`} target="_blank">
            GITHUB <FaExternalLinkAlt />
          </Link>
        </h1>
        <p>{profile.description}</p>
        <div>
          <span>
            <FaGithub size={18} color={theme['base-label']} />{' '}
            {profile.username}
          </span>
          <span>
            <FaBuilding size={18} color={theme['base-label']} />{' '}
            {profile.company}
          </span>
          <span>
            <FaUserFriends size={18} color={theme['base-label']} />{' '}
            {profile.followers > 1
              ? `${profile.followers} seguidores`
              : `${profile.followers} seguidor`}
          </span>
        </div>
      </section>
    </ProfileContainer>
  )
}

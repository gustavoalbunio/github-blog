import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface Profile {
  avatarUrl: string
  name: string
  username: string
  company: string
  description: string
  followers: number
}

interface ProfileContextType {
  profile: Profile
}

interface ProfileProviderProps {
  children: ReactNode
}

export const ProfileContext = createContext({} as ProfileContextType)

export function ProfileProvider({ children }: ProfileProviderProps) {
  const [profile, setProfile] = useState<Profile>({} as Profile)

  async function getProfileUser() {
    const { data } = await api.get('users/gustavoalbunio')

    const profileData = {
      avatarUrl: data.avatar_url,
      name: data.name,
      username: data.login,
      company: data.company,
      description: data.bio,
      followers: data.followers,
    }

    setProfile(profileData)
  }

  useEffect(() => {
    getProfileUser()
  }, [])

  return (
    <ProfileContext.Provider value={{ profile }}>
      {children}
    </ProfileContext.Provider>
  )
}

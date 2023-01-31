import { HeaderContainer, LogoContainer } from './styles'

import logoImage from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <img src={logoImage} alt="Logo Github Blog" />
      </LogoContainer>
    </HeaderContainer>
  )
}

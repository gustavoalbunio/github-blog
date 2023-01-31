import styled from 'styled-components'

import bannerImage from '../../assets/banner.svg'

export const HeaderContainer = styled.div`
  background: url(${bannerImage}) no-repeat center/cover;
  height: 18.5rem;
`

export const LogoContainer = styled.div`
  max-width: 864px;
  width: 100%;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin-top: 4rem;
  }
`

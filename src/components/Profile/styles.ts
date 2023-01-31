import styled from 'styled-components'

export const ProfileContainer = styled.div`
  background: ${(props) => props.theme['base-profile']};
  padding: 2rem;
  border-radius: 8px;
  margin-top: -5.5rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  gap: 2rem;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }

  section {
    display: flex;
    flex-direction: column;

    h1 {
      color: ${(props) => props.theme['base-title']};
      line-height: 1.3;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      span {
        color: ${(props) => props.theme.blue};
        font-size: 0.75rem;

        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
    }

    p {
      color: ${(props) => props.theme['base-text']};
      margin: 0.5rem 0 1.5rem;
    }

    div {
      color: ${(props) => props.theme['base-subtitle']};

      display: flex;
      align-items: center;
      gap: 1.5rem;

      span {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
    }
  }
`

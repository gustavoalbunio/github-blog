import styled from 'styled-components'

export const IssueContainer = styled.div`
  max-width: 864px;
  width: 100%;
  margin: 0 auto 2rem;
  padding: 0 1rem;
`

export const HeaderIssue = styled.div`
  background: ${(props) => props.theme['base-profile']};
  padding: 2rem;
  border-radius: 8px;
  margin-top: -5.5rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      color: ${(props) => props.theme.blue};
      font-size: 0.75rem;
      text-decoration: none;
      border-bottom: 1px solid ${(props) => props.theme['base-profile']};
      font-weight: bold;

      display: flex;
      align-items: center;
      gap: 0.5rem;

      &:hover {
        border-bottom: 1px solid ${(props) => props.theme.blue};
      }
    }
  }

  h1 {
    color: ${(props) => props.theme['base-title']};
    line-height: 1.3;
    margin-top: 1.25rem;
  }

  div {
    color: ${(props) => props.theme['base-span']};
    margin-top: 0.5rem;

    display: flex;
    align-items: center;
    gap: 1.5rem;

    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`

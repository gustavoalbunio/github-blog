import styled from 'styled-components'

export const HomeContainer = styled.div`
  max-width: 864px;
  width: 100%;
  margin: 0 auto 2rem;
  padding: 0 1rem;

  h3 {
    margin-top: 4.5rem;
    font-size: 1.125rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-size: 0.875rem;
      font-weight: normal;
      color: ${(props) => props.theme['base-span']};
    }
  }

  form {
    margin-top: 0.875rem;

    input {
      background: ${(props) => props.theme['base-input']};
      border: 0;
      padding: 0.75rem 1rem;
      border: 1px solid ${(props) => props.theme['base-border']};
      border-radius: 6px;
      width: 100%;

      &::placeholder {
        color: ${(props) => props.theme['base-label']};
      }
    }
  }

  & > section {
    margin-top: 3rem;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
`

export const CardContainer = styled.div`
  background: ${(props) => props.theme['base-post']};
  padding: 2rem;
  border-radius: 10px;

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;

    h2 {
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-title']};
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
      min-width: 5.5rem;
      text-align: right;
    }
  }

  p {
    margin-top: 1.25rem;

    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
`

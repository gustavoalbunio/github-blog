import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

export const IssueContentContainer = styled(ReactMarkdown)`
  padding: 2.5rem 2rem;

  white-space: pre-wrap;
  line-height: 1.6;
  hyphens: auto;

  img {
    max-width: 100%;
  }

  ul {
    list-style-position: inside;
  }

  a {
    color: ${(props) => props.theme['base-text']};
  }

  table {
    border-spacing: 0;

    td,
    th {
      border: 1px solid #fff;
      padding: 0 1rem;
    }

    td {
      text-align: left !important;
    }
    th {
      text-align: center !important;
    }
  }
`

/* eslint-disable react/no-children-prop */
import { useTheme } from 'styled-components'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import rangeParser from 'parse-numeric-range'
import remarkGfm from 'remark-gfm'

import { IssueContentContainer } from './styles'

interface IssueProps {
  content: string
}

export function IssueContent({ content }: IssueProps) {
  const theme = useTheme()

  return (
    <IssueContentContainer
      remarkPlugins={[remarkGfm]}
      children={content}
      components={{
        code({ node, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '')

          if (!match) {
            return <code className={className} {...props} />
          }

          const meta = node?.data?.meta as string | undefined

          const applyHighlights: any = (highlights: any) => {
            if (!meta) {
              return {}
            }

            const regex = /{([\d,-]+)}/
            const metadata = meta.replace(/\s/g, '')
            const strlineNumbers = regex.test(metadata)
              ? regex.exec(metadata)![1]
              : '0'

            const highlightLines = rangeParser(strlineNumbers)
            const data = highlightLines.includes(highlights)
              ? 'highlight'
              : undefined

            return { data }
          }

          return (
            <SyntaxHighlighter
              language={match[1]}
              PreTag="div"
              className="codeStyle"
              showLineNumbers
              wrapLines={!!meta}
              useInlineStyles
              lineProps={applyHighlights}
              children={String(children).replace(/\s$/g, '')}
              style={
                {
                  ...oneDark,
                  'code[class*="language-"]': {
                    ...oneDark['code[class*="language-"]'],
                    backgroundColor: theme['base-post'],
                    color: theme['base-text'],
                  },
                  'pre[class*="language-"]': {
                    ...oneDark['pre[class*="language-"]'],
                    backgroundColor: theme['base-post'],
                    color: theme['base-text'],
                  },
                } as any
              }
              {...props}
            />
          )
        },
      }}
    />
  )
}

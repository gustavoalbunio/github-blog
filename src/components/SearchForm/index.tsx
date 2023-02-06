import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { IssueContext } from '../../contexts/IssuesContext'

import { FormContainer } from './styles'

const issueFormValidationSchema = zod.object({
  issue: zod.string(),
})

type IssueFormData = zod.infer<typeof issueFormValidationSchema>

export function SearchForm() {
  const { searchIssues } = useContext(IssueContext)

  const { register, handleSubmit } = useForm<IssueFormData>({
    resolver: zodResolver(issueFormValidationSchema),
  })

  function handleSearch(data: IssueFormData) {
    searchIssues(`${data.issue}`)
  }

  return (
    <FormContainer onSubmit={handleSubmit(handleSearch)}>
      <input type="text" placeholder="Buscar conteúdo" {...register('issue')} />
    </FormContainer>
  )
}

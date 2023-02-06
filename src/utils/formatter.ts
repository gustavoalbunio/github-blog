import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function dateDistanceFormat(date: string) {
  return formatDistanceToNow(new Date(date), {
    locale: ptBR,
    addSuffix: true,
  })
}

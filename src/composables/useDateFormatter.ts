export const useDateFormatter = () => {
  const formatter = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  const formatDate = (date: string): string => {
    return formatter.format(new Date(date)).replace(',', ' - ')
  }
  return {
    formatDate,
  }
}

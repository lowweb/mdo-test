export function formatDate(date, options) {
  if (options === 'DDMMYY') {
    options = {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric'
    }
  }
  if (options === 'DDMMYYTT') {
    options = {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    }
  }

  if (options === 'YYMMDD') {
    const d = new Date(date)
    const year = d.getFullYear()
    const month = String(d.getMonth() + 1).padStart(2, '0')
    const day = String(d.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  var date = new Date(date)
  return date.toLocaleString('ru', options)
}

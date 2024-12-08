export function formatDate(date, options) {
  if (options === 'yymmdd') {
    options = {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric'
    }
  } else {
    options = {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    }
  }
  var date = new Date(date)
  return date.toLocaleString('ru', options)
}

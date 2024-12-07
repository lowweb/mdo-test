export function getNestedValue(obj, key) {
  return key.split('.').reduce((o, i) => (o ? o[i] : null), obj)
}

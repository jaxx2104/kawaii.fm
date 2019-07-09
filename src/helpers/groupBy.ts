export const groupBy = (items: object[], key: string) => {
  return items.reduce((r, a) => {
    r[a[key]] = r[a[key]] || []
    r[a[key]].push(a)
    return r
  }, {})
}

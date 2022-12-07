export const formatToGBP = (amount, minimumFractionDigits = 0) => {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: minimumFractionDigits,
  }).format(amount)
}

export const convertTypography = (obj) => {
  const newObj = {}
  Object.entries(obj).forEach(([key, value]) => {
    const newKey = key.replace(/([a-z]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()
    newObj[newKey] = `${value};`
  })
  return newObj
}

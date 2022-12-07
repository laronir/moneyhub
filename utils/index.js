export const formatToGBP = (amount, minimumFractionDigits = 0) => {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: minimumFractionDigits,
  }).format(amount)
}
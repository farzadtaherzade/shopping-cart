const numberFormatter = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "USD",
});

export default function formatCurrency(number) {
  return numberFormatter.format(number);
}

const numberFormatter = new Intl.NumberFormat("en-us", {
  style: "currency",
  currency: "USD",
});

export default function formatCurrency(number) {
  return numberFormatter.format(number);
}

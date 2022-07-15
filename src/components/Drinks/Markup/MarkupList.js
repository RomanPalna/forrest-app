export default function MarkupList({ props }) {
  const price = props.sizePrices.map((price) => {
    return price.price.currentPrice;
  });

  return (
    <tr>
      <td className="forrest__coffee--name">{props.name}</td>
      <td className="forrest__coffee--cost">{price}</td>
    </tr>
  );
}

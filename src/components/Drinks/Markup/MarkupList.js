export default function MarkupList({ props, value }) {
  const price = props.sizePrices.map((price) => {
    return price.price.currentPrice;
  });

  if (value === "single") {
    return (
      <tr>
        <td className="forrest__coffee--name">{props.name}</td>
        <td className="forrest__coffee--cost">{price}</td>
      </tr>
    );
  }

  if (value === "fifty") {
    return (
      <tr>
        <td className="forrest__coffee--name">{props.name}</td>
        <td className="forrest__coffee--cost">{price / 20}</td>
      </tr>
    );
  }

  if (value === "wine") {
    return (
      <tr>
        <td className="forrest__coffee--name">{props.name}</td>
        <td className="forrest__coffee--cost">{Math.round(price * 0.75)}</td>
      </tr>
    );
  }
}

// single - штучний продукт
// wine - літраж 0.75
// fifty - літраж 0.05

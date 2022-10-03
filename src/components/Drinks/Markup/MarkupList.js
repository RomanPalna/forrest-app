import { Link } from "react-router-dom";

export default function MarkupList({ props, format }) {
  const price = props.sizePrices.map((price) => {
    return price.price.currentPrice;
  });

  if (format === "single") {
    return (
      <tr>
        <td className="forrest__coffee--name">
          <Link className="forrest__coffee--link" to={`/cocktails/${props.id}`}>
            {props.name}
          </Link>
        </td>
        <td className="forrest__coffee--cost">{price} грн</td>
      </tr>
    );
  }

  if (format === "fifty") {
    return (
      <tr>
        <td className="forrest__coffee--name">{props.name}</td>
        <td className="forrest__coffee--cost">{price / 20} грн</td>
      </tr>
    );
  }

  if (format === "wine") {
    return (
      <tr>
        <td className="forrest__coffee--name">{props.name}</td>
        <td className="forrest__coffee--cost">
          {Math.round(price * 0.75)} грн
        </td>
      </tr>
    );
  }

  if (format === "glass") {
    return (
      <tr>
        <td className="forrest__coffee--name">{props.name}</td>
        <td className="forrest__coffee--cost">
          {Math.round(price * 0.75) / 5} грн
        </td>
      </tr>
    );
  }
}

// single - штучний продукт
// wine - літраж 0.75
// fifty - літраж 0.05
// glass - бокал 150мл

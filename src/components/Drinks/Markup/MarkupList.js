import { Link } from "react-router-dom";

export default function MarkupList({ props, format, path }) {
  const price = props.sizePrices.map((price) => {
    return price.price.currentPrice;
  });

  console.log(props.id);

  const ComponentPath = path ? (
    <td className="forrest__coffee--name toucheble">
      <span>
        <Link className="forrest__coffee--link" to={`/${path}/${props.id}`}>
          {props.name}
        </Link>
      </span>
    </td>
  ) : (
    <td className="forrest__coffee--name">{props.name}</td>
  );

  if (format === "single") {
    return (
      <tr>
        {ComponentPath}

        <td className="forrest__coffee--cost">{price} грн</td>
      </tr>
    );
  }

  if (format === "fifty") {
    return (
      <tr>
        {ComponentPath}
        <td className="forrest__coffee--cost">{price / 20} грн</td>
      </tr>
    );
  }

  if (format === "wine") {
    return (
      <tr>
        {ComponentPath}
        <td className="forrest__coffee--cost">
          {Math.round(price * 0.75)} грн
        </td>
      </tr>
    );
  }

  if (format === "glass") {
    return (
      <tr>
        {ComponentPath}
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

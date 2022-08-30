export default function PriceChanger({ value }) {
  if (value === "single") {
    return (
      <tr>
        <th scope="col">Назва</th>
        <th scope="col">Ціна, шт</th>
      </tr>
    );
  }

  if (value === "fifty") {
    return (
      <tr>
        <th scope="col">Назва</th>
        <th scope="col">Ціна, 50 грам</th>
      </tr>
    );
  }

  if (value === "wine") {
    return (
      <tr>
        <th scope="col">Назва</th>
        <th scope="col">Ціна, пляшка</th>
      </tr>
    );
  }
}

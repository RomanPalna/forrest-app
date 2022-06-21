export default function HotDrinksList({ props }) {
  const { name, litres, cost } = props;
  return (
    <tr>
      <td className="forrest__coffee--name">{name}</td>
      <td>{litres} мл.</td>
      <td>{cost} грн.</td>
    </tr>
  );
}

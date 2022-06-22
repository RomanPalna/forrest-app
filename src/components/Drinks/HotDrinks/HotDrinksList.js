export default function HotDrinksList({ props }) {
  const { name, litres, cost } = props;
  return (
    <tr>
      <td className="forrest__coffee--name">{name}</td>
      <td className="forrest__coffee--litres">{litres}</td>
      <td className="forrest__coffee--cost">{cost}</td>
    </tr>
  );
}

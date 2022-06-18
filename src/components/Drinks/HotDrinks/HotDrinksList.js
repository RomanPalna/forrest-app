export default function HotDrinksList({ props }) {
  const { name, litres, cost } = props;
  return (
    <li>
      <span>{name}</span>
      <span>{litres}</span>
      <span>{cost}</span>
    </li>
  );
}

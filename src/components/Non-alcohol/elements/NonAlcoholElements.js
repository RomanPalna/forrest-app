import Coffeetea from "./CoffeeTea";
import ColdDrinks from "./ColdDrinks";
import CraftLemonades from "./CraftLemonades";

export default function NonAlcoholElements() {
  return (
    <ul className="forrest__hotdrinks">
      <ColdDrinks />
      <Coffeetea />
      <CraftLemonades />
    </ul>
  );
}

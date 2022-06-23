import coldDrinks from "../../../JSON/coldDrinks.json";
import Markup from "../Markup/Markup";

export default function ColdDrinksList() {
  return <Markup drinks={coldDrinks} caption={"холодні напої"} />;
}

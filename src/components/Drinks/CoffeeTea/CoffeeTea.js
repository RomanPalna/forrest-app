import coffee from "../../../JSON/coffee.json";
import Markup from "../Markup/Markup";

export default function CoffeeTea() {
  return <Markup drinks={coffee} caption={"кава чай"} />;
}

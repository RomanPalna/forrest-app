import Markup from "../Markup/Markup";
import beer from "../../../JSON/beer.json";

export default function BeerList() {
  return <Markup drinks={beer} caption={"пиво"} />;
}

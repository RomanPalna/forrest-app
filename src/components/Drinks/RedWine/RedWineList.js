import redWine from "../../../JSON/redwine.json";
import Markup from "../Markup/Markup";

export default function RedWineList() {
  return <Markup drinks={redWine} caption={"Червоні та кріплені вина"} />;
}

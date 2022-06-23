import whiteWine from "../../../JSON/whiteWine.json";
import Markup from "../Markup/Markup";

export default function WhiteWineList() {
  return <Markup drinks={whiteWine} caption={"білі вина"} />;
}

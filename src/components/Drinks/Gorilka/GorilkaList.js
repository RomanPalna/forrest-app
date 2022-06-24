import Markup from "../Markup/Markup";
import gorilka from "../../../JSON/gorilka.json";

export default function GorilkaList() {
  return <Markup drinks={gorilka} caption={"горілка"} />;
}

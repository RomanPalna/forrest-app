import Markup from "../Markup/Markup";
import lemonades from "../../../JSON/lemonades.json";

export default function Lemonades() {
  return <Markup drinks={lemonades} caption={"лимонади та моктейлі"} />;
}

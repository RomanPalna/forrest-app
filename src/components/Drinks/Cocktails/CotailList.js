import Markup from "../Markup/Markup";
import cocktails from "../../../JSON/cocktails.json";

export default function CocktailList() {
  return <Markup drinks={cocktails} caption={"коктейлі"} />;
}

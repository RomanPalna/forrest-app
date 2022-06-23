import Markup from "../Markup/Markup";
import whisky from "../../../JSON/whisky.json";

export default function WhiskyList() {
  return <Markup drinks={whisky} caption={"віскі"} />;
}

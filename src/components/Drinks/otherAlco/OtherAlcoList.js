import Markup from "../Markup/Markup";
import otherAlco from "../../../JSON/otherAlco.json";

export default function OtherAlcoList() {
  return (
    <Markup drinks={otherAlco} caption={"ром джин текіла вермути настоянки"} />
  );
}

import Markup from "../Markup/Markup";
import sparkling from "../../../JSON/sparkling.json";

export default function SparklingWineList() {
  return <Markup drinks={sparkling} caption={"шампанське, ігристі вина"} />;
}

import Beer from "./Beer";
import BrandyCognac from "./BrandyCognac";
import Cocktails from "./Cocktails";
import Gorilka from "./Gorilka";
import OtherAlco from "./OtherAlco";
import RedWine from "./RedWine";
import SparklingWine from "./SparklingWine";
import Whisky from "./Whisky";
import WhiteWine from "./WhiteWine";

export default function AlcoholElements() {
  return (
    <ul className="forrest__hotdrinks">
      <Beer />
      <Cocktails />

      <Whisky />
      <BrandyCognac />
      <Gorilka />
      <OtherAlco />
      <SparklingWine />
      <WhiteWine />
      <RedWine />
    </ul>
  );
}

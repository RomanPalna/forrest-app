import Beer from "./Beer";
import Cocktails from "./Cocktails";
import OtherAlco from "./OtherAlco";
import RedWine from "./RedWine";
import SparklingWine from "./SparklingWine";
import Whisky from "./Whisky";
import WhiteWine from "./WhiteWine";

export default function AlcoholElements() {
  return (
    <>
      <Beer />
      <Cocktails />
      <Whisky />
      <OtherAlco />
      <SparklingWine />
      <WhiteWine />
      <RedWine />
    </>
  );
}

import ImageSlider from "../ImageSlider/ImageSlider";
import NonAlcoholElements from "../Non-alcohol/elements/NonAlcoholElements";
import AlcoholElements from "./elements/AlcoholElements";

export default function Alcohol() {
  return (
    <>
      <ImageSlider />
      <ul className="forrest__hotdrinks">
        <NonAlcoholElements />
        <AlcoholElements />
      </ul>
    </>
  );
}

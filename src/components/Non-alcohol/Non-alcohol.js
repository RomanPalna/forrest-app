import ImageSlider from "../ImageSlider/ImageSlider";
import NonAlcoholElements from "./elements/NonAlcoholElements";

export default function NonAlcohol() {
  return (
    <>
      <ImageSlider />
      <ul className="forrest__hotdrinks">
        <NonAlcoholElements />
      </ul>
    </>
  );
}

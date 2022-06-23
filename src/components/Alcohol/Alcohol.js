import Container from "../Container/Continer";
import ImageSlider from "../ImageSlider/ImageSlider";
import NonAlcoholElements from "../Non-alcohol/elements/NonAlcoholElements";
import AlcoholElements from "./elements/AlcoholElements";

export default function Alcohol() {
  return (
    <Container>
      <ImageSlider />
      <ul className="forrest__hotdrinks">
        <NonAlcoholElements />
        <AlcoholElements />
      </ul>
    </Container>
  );
}

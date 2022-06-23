import Container from "../Container/Continer";
import ImageSlider from "../ImageSlider/ImageSlider";
import NonAlcoholElements from "./elements/NonAlcoholElements";

export default function NonAlcohol() {
  return (
    <Container>
      <ImageSlider />

      <ul className="forrest__hotdrinks">
        <NonAlcoholElements />
      </ul>
    </Container>
  );
}

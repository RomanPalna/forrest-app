import Container from "../Container/Container";
import Header from "../Header/Header";
import ImageSlider from "../ImageSlider/ImageSlider";
import Social from "../Social/Social";
import NonAlcoholElements from "./elements/NonAlcoholElements";

export default function NonAlcohol() {
  return (
    <Container>
      <Header />
      <ImageSlider />
      <NonAlcoholElements />
      <Social />
    </Container>
  );
}

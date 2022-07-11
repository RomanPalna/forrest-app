import Container from "../Container/Container";
import Header from "../Header/Header";
import ImageSlider from "../ImageSlider/ImageSlider";
import NonAlcoholElements from "../Non-alcohol/elements/NonAlcoholElements";
import Social from "../Social/Social";
import AlcoholElements from "./elements/AlcoholElements";

export default function Alcohol() {
  return (
    <Container>
      <Header />
      <ImageSlider />
      <NonAlcoholElements />
      <AlcoholElements />
      <Social />
    </Container>
  );
}

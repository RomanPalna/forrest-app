import Container from "../Container/Container";
import Header from "../Header/Header";
import SlickSlider from "../ImageSlider/SlickSlider";
import Social from "../Social/Social";
import NonAlcohol from "./elements/NonAlcohol";

export default function NonAlcoholList() {
  return (
    <Container>
      <Header />
      <SlickSlider />
      <NonAlcohol />
      <Social />
    </Container>
  );
}

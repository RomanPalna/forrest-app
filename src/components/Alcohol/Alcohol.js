import Container from "../Container/Container";
import Header from "../Header/Header";
import SlickSlider from "../ImageSlider/SlickSlider";
import NonAlcohol from "../Non-alcohol/elements/NonAlcohol";
import Social from "../Social/Social";
import Alcohol from "./elements/Alcohol";

export default function AlcoholPage() {
  return (
    <Container>
      <Header />
      <SlickSlider />
      <NonAlcohol />
      <Alcohol />
      <Social />
    </Container>
  );
}

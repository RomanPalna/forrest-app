import Container from "../Container/Container";
import Header from "../Header/Header";
import SlickSlider from "../ImageSlider/SlickSlider";
import NonAlcRoutes from "../Non-alcohol/elements/NonAlcRoutes";
import Social from "../Social/Social";
import AlcoholRoutes from "./elements/AlcoRoutes";

export default function Alcohol() {
  return (
    <Container>
      <Header />
      <SlickSlider />
      <NonAlcRoutes />
      <AlcoholRoutes />
      <Social />
    </Container>
  );
}

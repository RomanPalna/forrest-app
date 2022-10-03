import Container from "../Container/Container";
import Header from "../Header/Header";
import SlickSlider from "../ImageSlider/SlickSlider";
import Social from "../Social/Social";
import NonAlcRoutes from "./elements/NonAlcRoutes";

export default function NonAlcohol() {
  return (
    <Container>
      <Header />
      <SlickSlider />
      <NonAlcRoutes />
      <Social />
    </Container>
  );
}

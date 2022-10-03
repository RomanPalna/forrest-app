import Container from "../Container/Container";
import Header from "../Header/Header";
import ImageSlider from "../ImageSlider/ImageSlider";
import NonAlcoholElements from "../Non-alcohol/elements/NonAlcoholElements";
import Social from "../Social/Social";
import AlcoholRoutes from "./elements/Routes";

export default function Alcohol() {
  return (
    <Container>
      <Header />
      <ImageSlider />
      <NonAlcoholElements />
      <AlcoholRoutes />
      <Social />
    </Container>
  );
}

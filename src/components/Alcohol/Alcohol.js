import Container from "../Container/Container";
import Header from "../Header/Header";
import ImageSlider from "../ImageSlider/ImageSlider";
import NonAlcRoutes from "../Non-alcohol/elements/NonAlcRoutes";
import Social from "../Social/Social";
import AlcoholRoutes from "./elements/AlcoRoutes";

export default function Alcohol() {
  return (
    <Container>
      <Header />
      <ImageSlider />
      <NonAlcRoutes />
      <AlcoholRoutes />
      <Social />
    </Container>
  );
}

import Container from "../Container/Container";
import Header from "../Header/Header";
import ImageSlider from "../ImageSlider/ImageSlider";
import Social from "../Social/Social";
import NonAlcRoutes from "./elements/NonAlcRoutes";

export default function NonAlcohol() {
  return (
    <Container>
      <Header />
      <ImageSlider />
      <NonAlcRoutes />
      <Social />
    </Container>
  );
}

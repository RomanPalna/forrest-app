import Container from "../Container/Continer";
import ImageSlider from "../ImageSlider/ImageSlider";
import Coffeetea from "./elements/CoffeeTea";
import ColdDrinks from "./elements/ColdDrinks";
import CraftLemonades from "./elements/CraftLemonades";

export default function NonAlcohol() {
  return (
    <Container>
      <ImageSlider />
      <ul className="forrest__hotdrinks">
        <ColdDrinks />
        <Coffeetea />
        <CraftLemonades />
      </ul>
    </Container>
  );
}

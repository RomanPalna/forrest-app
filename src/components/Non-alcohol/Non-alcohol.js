import Container from "../Container/Continer";
import ImageSlider from "../ImageSlider/ImageSlider";
import CoffeeTea from "./elements/CoffeeTea";
import ColdDrinks from "./elements/ColdDrinks";
import CraftLemonades from "./elements/CraftLemonades";

export default function NonAlcohol() {
  return (
    <Container>
      <ImageSlider />
      <ul className="forrest__hotdrinks">
        <ColdDrinks />
        <CoffeeTea />
        <CraftLemonades />
      </ul>
    </Container>
  );
}

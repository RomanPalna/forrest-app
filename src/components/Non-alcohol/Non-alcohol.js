import { Link } from "react-router-dom";
import Container from "../Container/Continer";
import Lemonade from "../../images/drinks/Cocktail.svg";
import ColdDrink from "../../images/drinks/Glass.svg";
import ImageSlider from "../ImageSlider/ImageSlider";

import CoffeeTea from "../../styles/non-alcohol/elements/CoffeeTea";

export default function NonAlcohol() {
  return (
    <Container>
      <ImageSlider />
      <ul className="forrest__hotdrinks">
        <li className="forrest__hotdrinks--item">
          <Link className="forrest__hotdrinks--link" to="/hot-drinks">
            <img src={ColdDrink} alt="hot drinks" width="35" height="30" />
            <span className="forrest__hotdrinks--text">Холодні напої</span>
          </Link>
        </li>

        <CoffeeTea />

        <li className="forrest__hotdrinks--item">
          <Link className="forrest__hotdrinks--link" to="/hot-drinks">
            <img src={Lemonade} alt="hot drinks" width="35" height="30" />
            <span className="forrest__hotdrinks--text">Крафтові лимонади</span>
          </Link>
        </li>
      </ul>
    </Container>
  );
}

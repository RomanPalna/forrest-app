import { Link } from "react-router-dom";
import coffee from "../../../images/drinks/coffee.svg";
import coldDrink from "../../../images/drinks/Glass.svg";
import lemonade from "../../../images/drinks/Cocktail.svg";

const ROUTES = [
  ["/coffee-tea", coffee, "Кава Чай"],
  ["/cold-drinks", coldDrink, "Холодні напої"],
  ["/lemonades", lemonade, "Лимонади Фреші"],
];

export default function NonAlcohol() {
  return (
    <ul className="forrest__hotdrinks">
      {ROUTES.map(([route, img, name]) => (
        <Link to={route} key={route} className="forrest__hotdrinks--item">
          <div className="forrest__hotdrinks--link">
            <img src={img} alt="hot drinks" width="35" height="30" />
            <span className="forrest__hotdrinks--text">{name}</span>
          </div>
        </Link>
      ))}
    </ul>
  );
}

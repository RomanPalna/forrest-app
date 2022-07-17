import { Link } from "react-router-dom";
import Lemonade from "../../../images/drinks/Cocktail.svg";

export default function CraftLemonades() {
  return (
    <>
      <Link to="/lemonades" className="forrest__hotdrinks--item">
        <div className="forrest__hotdrinks--link">
          <img src={Lemonade} alt="hot drinks" width="35" height="30" />
          <span className="forrest__hotdrinks--text">Лимонади Фреші</span>
        </div>
      </Link>
    </>
  );
}

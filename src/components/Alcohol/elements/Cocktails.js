import { Link } from "react-router-dom";
import cocktail from "../../../images/drinks/Cocktail.svg";

export default function Cocktails() {
  return (
    <>
      <Link to="/cocktails" className="forrest__hotdrinks--item">
        <div className="forrest__hotdrinks--link">
          <img src={cocktail} alt="hot drinks" width="35" height="30" />
          <span className="forrest__hotdrinks--text">Фірмові Коктейлі</span>
        </div>
      </Link>
    </>
  );
}

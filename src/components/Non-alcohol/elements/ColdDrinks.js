import { Link } from "react-router-dom";
import ColdDrink from "../../../images/drinks/Glass.svg";

export default function ColdDrinks() {
  return (
    <>
      <Link to="/cold-drinks" className="forrest__hotdrinks--item">
        <div className="forrest__hotdrinks--link">
          <img src={ColdDrink} alt="hot drinks" width="35" height="30" />
          <span className="forrest__hotdrinks--text">Холодні напої</span>
        </div>
      </Link>
    </>
  );
}

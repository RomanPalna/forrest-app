import { Link } from "react-router-dom";
import glassWine from "../../../images/drinks/glassWine.svg";

export default function WineInGlass() {
  return (
    <>
      <Link to="/glass-wine" className="forrest__hotdrinks--item">
        <div className="forrest__hotdrinks--link">
          <img src={glassWine} alt="hot drinks" width="35" height="30" />
          <span className="forrest__hotdrinks--text">Вино розлив</span>
        </div>
      </Link>
    </>
  );
}

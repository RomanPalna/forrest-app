import { Link } from "react-router-dom";
import whiteWine from "../../../images/drinks/whiteWine.svg";

export default function WineInGlass() {
  return (
    <>
      <Link to="/glass-wine" className="forrest__hotdrinks--item">
        <div className="forrest__hotdrinks--link">
          <img src={whiteWine} alt="hot drinks" width="35" height="30" />
          <span className="forrest__hotdrinks--text">Вино розлив</span>
        </div>
      </Link>
    </>
  );
}

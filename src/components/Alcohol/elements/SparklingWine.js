import { Link } from "react-router-dom";
import сhampagne from "../../../images/drinks/Champagne.svg";

export default function SparklingWine() {
  return (
    <>
      <Link to="/sparkling-wine" className="forrest__hotdrinks--item">
        <div className="forrest__hotdrinks--link">
          <img src={сhampagne} alt="hot drinks" width="35" height="30" />
          <span className="forrest__hotdrinks--text">Ігристі Вина</span>
        </div>
      </Link>
    </>
  );
}

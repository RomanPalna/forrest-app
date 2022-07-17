import { Link } from "react-router-dom";
import Coffee from "../../../images/drinks/coffee.svg";

export default function Coffeetea() {
  return (
    <>
      <Link to="/coffee-tea" className="forrest__hotdrinks--item">
        <div className="forrest__hotdrinks--link">
          <img src={Coffee} alt="hot drinks" width="35" height="30" />
          <span className="forrest__hotdrinks--text">Кава Чай</span>
        </div>
      </Link>
    </>
  );
}

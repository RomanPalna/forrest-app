import { Link } from "react-router-dom";
import glass from "../../../images/drinks/Glass.svg";

export default function Beer() {
  return (
    <>
      <Link to="/beer" className="forrest__hotdrinks--item">
        <div className="forrest__hotdrinks--link">
          <img src={glass} alt="hot drinks" width="35" height="30" />
          <span className="forrest__hotdrinks--text">Пиво</span>
        </div>
      </Link>
    </>
  );
}

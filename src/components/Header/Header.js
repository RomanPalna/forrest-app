import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src={logo}
          width="320"
          alt="ForRest Logo"
        />
      </Link>
    </div>
  );
}

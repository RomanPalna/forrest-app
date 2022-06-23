import instagram from "../../images/social/instagram.svg";
import facebook from "../../images/social/Facebook.svg";
import phone from "../../images/social/phone.svg";
// import Container from "../Container/Continer";

export default function Social() {
  return (
    <ul className="forrest__social">
      <li className="forrest__social--item">
        <a href="https://www.instagram.com/forrest_restaurant_/">
          <img src={instagram} alt="Instagram" width="30" height="30" />
        </a>
      </li>
      <li className="forrest__social--item">
        <a href="https://m.facebook.com/forrest.khm/">
          <img src={facebook} alt="Facebook" width="30" height="30" />
        </a>
      </li>
      <li className="forrest__social--item">
        <a href="tel: +380980488488">
          <img src={phone} alt="Phone" width="30" height="30" />
        </a>
      </li>
    </ul>
  );
}

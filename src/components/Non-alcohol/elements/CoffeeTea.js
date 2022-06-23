import { useState } from "react";
import CoffeeTea from "../../Drinks/CoffeeTea/CoffeeTea";
import Modal from "../../Modal/Modal";
import Coffee from "../../../images/drinks/coffee.svg";

export default function Coffeetea() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      <li className="forrest__hotdrinks--item">
        <div
          className="forrest__hotdrinks--link"
          onClick={() => setModalActive(true)}
        >
          <img src={Coffee} alt="hot drinks" width="35" height="30" />
          <span className="forrest__hotdrinks--text">Кава Чай</span>
        </div>
      </li>
      <Modal active={modalActive} setActive={setModalActive}>
        <CoffeeTea />
      </Modal>
    </>
  );
}

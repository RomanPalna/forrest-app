import { useState } from "react";
import Modal from "../../Modal/Modal";
import Lemonades from "../../Drinks/Lemonades/Lemonades";
import Lemonade from "../../../images/drinks/Cocktail.svg";

export default function CraftLemonades() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <li className="forrest__hotdrinks--item">
        <div
          className="forrest__hotdrinks--link"
          onClick={() => setModalActive(true)}
        >
          <img src={Lemonade} alt="hot drinks" width="35" height="30" />
          <span className="forrest__hotdrinks--text">Лимонади Моктейлі</span>
        </div>
      </li>
      <Modal active={modalActive} setActive={setModalActive}>
        <Lemonades />
      </Modal>
    </>
  );
}

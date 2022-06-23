import { useState } from "react";
import BeerList from "../../Drinks/BeerList";
import Modal from "../../Modal/Modal";
import glass from "../../../images/drinks/Glass.svg";

export default function Coffeetea() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      <li className="forrest__hotdrinks--item">
        <div
          className="forrest__hotdrinks--link"
          onClick={() => setModalActive(true)}
        >
          <img src={glass} alt="hot drinks" width="35" height="30" />
          <span className="forrest__hotdrinks--text">Пиво</span>
        </div>
      </li>
      <Modal active={modalActive} setActive={setModalActive}>
        <BeerList />
      </Modal>
    </>
  );
}

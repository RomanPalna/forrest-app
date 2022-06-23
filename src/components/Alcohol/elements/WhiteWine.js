import { useState } from "react";
import WhiteWineList from "../../Drinks/WhiteWine/WhiteWineList";
import Modal from "../../Modal/Modal";
import whiteWine from "../../../images/drinks/whiteWine.svg";

export default function WhiteWine() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      <li className="forrest__hotdrinks--item">
        <div
          className="forrest__hotdrinks--link"
          onClick={() => setModalActive(true)}
        >
          <img src={whiteWine} alt="hot drinks" width="35" height="30" />
          <span className="forrest__hotdrinks--text">Білі Вина</span>
        </div>
      </li>
      <Modal active={modalActive} setActive={setModalActive}>
        <WhiteWineList />
      </Modal>
    </>
  );
}

import { useState } from "react";
import WhiskyList from "../../Drinks/Whisky/WhiskyList";
import Modal from "../../Modal/Modal";
import whiskey from "../../../images/drinks/whiskey.svg";

export default function Whisky() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      <li className="forrest__hotdrinks--item">
        <div
          className="forrest__hotdrinks--link"
          onClick={() => setModalActive(true)}
        >
          <img src={whiskey} alt="hot drinks" width="35" height="30" />
          <span className="forrest__hotdrinks--text">Віскі</span>
        </div>
      </li>
      <Modal active={modalActive} setActive={setModalActive}>
        <WhiskyList />
      </Modal>
    </>
  );
}

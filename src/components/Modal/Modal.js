import { Component } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      return this.props.onClose();
    }
  };

  hanleBackdropClick = (e) => {
    if (e.target === e.currentTarget) this.props.onClose();
  };

  render() {
    return createPortal(
      <div className="Modal__backdrop" onClick={this.hanleBackdropClick}>
        <div className="Modal__content">{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}

import { useEffect } from "react";

function Modal({ closeModal }) {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 6000);
  });
  return (
    <article className="modal">
      <div className="check" style={{ marginBottom: 30 }}>
        <img src="Group 243.png" alt="#" />
      </div>
      <h3 style={{ fontSize: 25, color: "white", margin: "20px auto" }}>
        Congratulations
      </h3>
      <p style={{ fontSize: 16, width: "unset" }}>
        Great move! You're one step closer to getting your hands on the product.
        Please check your mail for more information.
      </p>
    </article>
  );
}

export default Modal;

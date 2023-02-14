import { useEffect } from "react";

const modalStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "#1E1E1E",
  width: "30%",
  padding: "80px 40px",
  textAlign: "center",
  borderRadius: 20,
};

function Modal({ closeModal }) {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 6000);
  });
  return (
    <article style={modalStyles}>
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

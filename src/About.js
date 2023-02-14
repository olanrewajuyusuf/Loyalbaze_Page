import Modal from "./Modal";
import { useState } from "react";

const data = [
  { id: 1, name: "G" },
  { id: 2, name: "O" },
  { id: 3, name: "U" },
  { id: 4, name: "M" },
];

function About() {
  const [modal, setModal] = useState(false);
  const [person, setPerson] = useState({ name: "", email: "" });
  const [people, setPeople] = useState(data);
  const [peopleNUm, setPeopleNum] = useState(57);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = { ...person, id: new Date().getTime().toString() };
    const newPeople = [...people, newPerson];
    console.log(newPeople);
    setPeople(newPeople.slice(-4));
    setPeopleNum((prev) => prev + 1);
    setModal(true);
    setPerson({ name: "", email: "" });
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <section className="about">
      <h1>
        Turn your best customers into <span>Loyal fans</span>
      </h1>
      <p>
        Loyalbase, empowers businesses to offer digitals, mobile first loyality
        programes to their customers. With our AI Powered platform you can
        easily create and manage custom loyality and rewards program, customer
        engagement and gain valuable insight to improve you businesses. Signup
        now to get early access.
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <img src="profilecircle.png" alt="#" />
          <input
            type="text"
            name="name"
            id="name"
            value={person.name}
            onChange={handleChange}
            placeholder="Tell us your name"
            required
          />
        </div>
        <div>
          <img src="Icon.png" alt="#" className="icon" />
          <input
            type="email"
            name="email"
            id="email"
            value={person.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
          />
        </div>
        <button className="access-btn">Get early access</button>
        <div className="data">
          <div className="people">
            {people.map((person) => {
              const { name, id } = person;
              return (
                <div key={id} className="people-data">
                  {name[0]}
                </div>
              );
            })}
          </div>
          <span>+{peopleNUm} joined</span>
        </div>
      </form>
      <div className="ball ball-1"></div>
      <div className="ball ball-2"></div>
      <div className="ball ball-3"></div>
      <div className="ball ball-4"></div>
      <div className="star star-1">
        <img src="star 2.png" alt="#" />
      </div>
      <div className="star star-2">
        <img src="star 2.png" alt="#" />
      </div>
      <div className="star star-3">
        <img src="star 1.png" alt="#" />
      </div>
      <div className="star star-4">
        <img src="star 1.png" alt="#" />
      </div>
      <div className="vector">
        <img src="Vector.png" alt="" />
      </div>
      {modal && <Modal closeModal={closeModal} />}
    </section>
  );
}
export default About;

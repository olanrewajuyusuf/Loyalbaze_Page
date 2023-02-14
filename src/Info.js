import { useState } from "react";
import { countries } from "./Country";

function Info() {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
    company: "",
    select: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInfo({ ...info, [name]: value });
  };
  return (
    <section className="info">
      <div className="detail">
        <h2>Priority Access</h2>
        <div className="line">
          <img src="Line 6.png" alt="#" />
        </div>
        <p>
          Get ready to revolutionize the way you interact with our customers and
          drive sales with loyalbaze. Skip the waitlist and get exclusive
          priority access to loyalbaze. Limited slot available. Please tell us a
          bit about your business and needs and of our consultants will be in
          touch Immediately!
        </p>
      </div>
      <div className="form-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setInfo({
              ...info,
              name: "",
              email: "",
              number: "",
              message: "",
              company: "",
              select: "Select Country",
            });
          }}
        >
          <h3>Book a Consultation with us</h3>
          <input
            type="text"
            name="name"
            id="name"
            value={info.name}
            onChange={handleChange}
            placeholder="Enter your full name"
          />
          <input
            type="email"
            name="email"
            id="email"
            value={info.email}
            onChange={handleChange}
            placeholder="Enter your work email"
          />
          <input
            type="number"
            name="phone"
            id="phone"
            value={info.phone}
            onChange={handleChange}
            placeholder="Mobile number"
          />
          <input
            type="text"
            name="company"
            id="company"
            value={info.company}
            onChange={handleChange}
            placeholder="Company name"
          />
          <div className="select-div">
            <select name="country" id="country">
              {countries.map((country) => (
                <option value={country.value} key={country.text}>
                  {country.text}
                </option>
              ))}
            </select>
          </div>
          <textarea
            value={info.message}
            onChange={handleChange}
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Drop a message....."
          ></textarea>
          <button type="submit" className="send">
            Send Request
          </button>
        </form>
      </div>
      <div className="ball ball-5"></div>
      <div className="ball ball-6"></div>
      <div className="star star-5">
        <img src="star 2.png" alt="#" />
      </div>
      <div className="star star-6">
        <img src="star 1.png" alt="#" />
      </div>
      <div className="star star-7">
        <img src="star 1.png" alt="#" />
      </div>
      <div className="star star-8">
        <img src="Highlight 1.png" alt="#" />
      </div>
      <div className="star star-9">
        <img src="Highlight 1.png" alt="#" />
      </div>
    </section>
  );
}
export default Info;

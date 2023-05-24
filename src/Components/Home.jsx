import React, { useState } from "react";
import { firestore } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

function Home() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [errors, setErrors] = useState({});

  const ref = collection(firestore, "messages");

  //errors
  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate name
    if (!name.trim() || name.length < 3) {
      newErrors.name =
        "Invalid name field: Name should be have atleast 3 characters";
      isValid = false;
    }

    // Validate phone numberer
    if (!number.trim()) {
      newErrors.number = "number is required";
      isValid = false;
    } else if (number.length < 10) {
      newErrors.number = "Invalid phone number";
      isValid = false;
    }

    // Validate email 
    if (!email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }
    //validate city
    if (!city.trim()) {
      newErrors.city = "City is required";
      isValid = false;
    }
    //validate checkbox
    if (!isChecked) {
      newErrors.isChecked = "Please check the condition";
      isValid = false;
    }
    //Captcha validate
   //Captcha validation I have not done because for captcha validation to be done domain name is required
   //captcha is not getting checked for localhost
   
    setErrors(newErrors);
    return isValid;
  };

  const formSubmit = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      // Perform form submission
      const userData = {
        name,
        number,
        email,
        city,
      };

      try {
        addDoc(ref, userData);
      } catch (error) {
        console.error("Error saving form data: ", error);
      }

      console.log("Form submitted");

      console.log(userData);
      setName("");
      setNumber("");
      setEmail("");
      setCity("");
      setIsChecked(false);
    }

    // console.log(userData);

    //console.log(name);
  };
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const numberChangeHandler = (event) => {
    setNumber(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const cityChangeHandler = (event) => {
    setCity(event.target.value);
  };

  const checkChangeHandler = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div className="mainDiv">
        <div className="imgClass">
          <p className="img-class"></p>
        </div>

        <div className="listClass">
          <h2 className="headingClass">
            <span>We Offer</span> ISO certification Professional Courses:
          </h2>
          <ul className="ulClass">
            <li>Cyber Security</li>
            <li>Cloud Security</li>
            <li>Ethical Hacking</li>
            <li>Information Security Management System</li>
            <li>Quality Management System (ISO 9001)</li>
            <li>Risk Management System</li>
          </ul>
        </div>

        <div className="formClass">
          <div className="formBgClass">
            <h3>Enquire Now</h3>
            <form onSubmit={formSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={nameChangeHandler}
              />
              {errors.name && <span className="error">{errors.name}</span>}
              <br />
              <input
                type="tel"
                placeholder="Phone Number"
                value={number}
                onChange={numberChangeHandler}
              />
              {errors.number && <span className="error">{errors.number}</span>}
              <br />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={emailChangeHandler}
              />
              {errors.email && <span className="error">{errors.email}</span>}
              <br />
              <input
                type="text"
                placeholder="City"
                value={city}
                onChange={cityChangeHandler}
              />
              {errors.city && <span className="error">{errors.city}</span>}
              <br />
              <input
                type="checkbox"
                className="checkBox"
                onChange={checkChangeHandler}
                checked={isChecked}
              />
              <label>
                By clicking this you consent for using this information to
                establish a connection with you to understand your requirement
              </label>
              <br />
              {errors.isChecked && <p className="error">{errors.isChecked}</p>}
              <div
                className="h-captcha"
                data-sitekey="45f2df4b-a8f2-4326-9a2a-cad7d44455db"
              ></div>

              <div>
                <button type="submit" className="btnClass">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

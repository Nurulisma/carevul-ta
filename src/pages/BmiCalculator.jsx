import React from "react";
import { ReactDOM } from "react";
import { useState } from "react";
import underImage from "../assets/under.jpg";
import normalImage from "../assets/normal.jpg";
import overImage from "../assets/over.jpg";
import obsesImage from "../assets/obses.jpg";
import "./../styles/bmi-calculator.css";

function BmiCalculator() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calculatebmi = (event) => {
    event.preventDefault();
    if (weight === 0 || height === 0) {
      alert("invalid input");
    } else {
      let bmi = weight / (height / 100) ** 2;
      setBmi(bmi.toFixed(2));

      if (bmi < 18.5) {
        setMessage("Berat badanmu masih dibawah rata-rata");
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        setMessage("Berat badanmu normal!");
      } else if (bmi >= 25 && bmi <= 29.9) {
        setMessage("Kamu kelebihan berat badan");
      } else {
        setMessage("Berat badan obesitas");
      }
    }
  };
  let imgsrc;
  if (bmi < 1) {
    imgsrc = null;
  } else if (bmi < 18.5) {
    imgsrc = underImage;
  } else if (bmi >= 18.5 && bmi <= 24.5) {
    imgsrc = normalImage;
  } else if (bmi >= 25 && bmi <= 29.9) {
    imgsrc = overImage;
  } else {
    imgsrc = obsesImage;
  }

  let reload=() => {
    window.location.reload();
  }
  return (
    <div className="app">
      <div className="container-bmi">
        <h2></h2>
        <form onSubmit={calculatebmi}>
          <div>
            <label>Berat Badan (Kg)</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Tinggi Badan (Cm)</label>
            <input value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <button className="btn-bmi" type="submit">
            Hitung BMI
          </button>
          <button className="btn-bmi btn-outline" type="submit" onClick={reload}>
            Muat Ulang
          </button>
        </form>
        <div className="center">
          <h3 className="center">
            BMI Kamu : {bmi}
            <p className="center">{message}</p>
          </h3>
        </div>
        <div className="img-container-bmi">
          <img src={imgsrc} alt="" />
        </div>
      </div>
    </div>
  );
}

export default BmiCalculator;

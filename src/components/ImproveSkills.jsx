import { Link } from "react-router-dom";
import "../styles/index.scss";

export default function ImproveSkills() {
  const list = [
    "Age Appropriate Education",
    "Reading",
    "Math",
    "Numbers",
    "Care and Love",
    "Become Part of the KinderCare Family",
  ];

  return (
    <div className="section improve-skills">
      <div className=" col img">
        <img src="/images/gallery/img_13.jpg" alt="chef" />
      </div>
      <div className="col typography">
        <h1 className="title"> My Services</h1>
        {list.map((item, index) => (
          <p className="skill-item" key={index}>
            {item}
          </p>
        ))}

        <button className="btn">
          <Link to="/form">Signup</Link>
        </button>
      </div>
    </div>
  );
}

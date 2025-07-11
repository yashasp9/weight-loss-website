import { Link } from "react-router";

const mainSectionContainerStyles = {
  display: "flex",
  "flex-direction": "column",
  "align-items": "center",
  padding: "20px 50px"
};

const mainSectionTextStyles = {
  display: "flex",
  "flex-direction": "column",
  "align-items": "center",

  gap: "15px",
  width: "40vw",
  mainHeading: {
    "font-size": "48px",
    "text-align": "center"
  },
  bookingStyle: {
    display: "flex"
  }
};

const weightLossStyle = {
  color: "#D4779F",
  "font-family": "Playfair Display, serif"
};

const bookMedicalConsultationStyle = {
  color: "white",
  background: "black",
  padding: "15px 15px",
  "border-radius": "30px",
  cursor: "pointer"
};

const subHeadingStyle = {
  "text-align": "center",
  width: "80%",
  "margin-bottom": "20px"
};

const MainSection = () => {
  return (
    <div style={mainSectionContainerStyles} className="main-section-container">
      <div style={mainSectionTextStyles} className="main-section-text">
        <p style={mainSectionTextStyles.mainHeading}>
          Medically Supervised <span style={weightLossStyle}>Weight Loss,</span>{" "}
          Tailored to You.
        </p>
        <p style={subHeadingStyle}>
          Lose weight safely and sustainably with the support of board-certified
          clinicians,{" "}
          <strong>
            <u>personalized treatment plans</u>
          </strong>
          , and proven medical protocols.
        </p>
        <p style={bookMedicalConsultationStyle}>
          <Link to="/patient-sign-up">
            Book Your Free Medical Consultation →
          </Link>
        </p>
      </div>
    </div>
  );
};

export default MainSection;

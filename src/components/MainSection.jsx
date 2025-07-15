import { Link } from 'react-router';

const mainSectionContainerStyles = {
  display: 'flex',
  'flex-direction': 'column',
  'align-items': 'center',
  padding: '20px 50px',
};

const mainSectionTextStyles = {
  display: 'flex',
  'flex-direction': 'column',
  'align-items': 'center',

  gap: '15px',
  width: '40vw',
  mainHeading: {
    'font-size': '48px',
    'text-align': 'center',
  },
  bookingStyle: {
    display: 'flex',
  },
};

const weightLossStyle = {
  color: '#D4779F',
  'font-family': 'Playfair Display, serif',
};

const bookMedicalConsultationStyle = {
  color: 'white',
  background: 'black',
  padding: '15px 15px',
  'border-radius': '30px',
  cursor: 'pointer',
};

const subHeadingStyle = {
  'text-align': 'center',
  width: '80%',
  'margin-bottom': '20px',
};

const MainSection = () => {
  return (
    <div style={mainSectionContainerStyles} className="main-section-container">
      <div style={mainSectionTextStyles} className="main-section-text">
        <p style={mainSectionTextStyles.mainHeading}>
          Expert-Led <span style={weightLossStyle}>Weight Loss,</span>{' '}
          Customized for Your Needs
        </p>
        <p style={subHeadingStyle}>
          Reach your weight loss goals safely and sustainably, supported by
          expert clinicians,{' '}
          <strong>
            <u>individualized treatment</u>
          </strong>
          , and trusted medical protocols.
        </p>
        <p style={bookMedicalConsultationStyle}>
          <Link to="/patient-sign-up">Book A Free Medical Consultation →</Link>
        </p>
      </div>
    </div>
  );
};

export default MainSection;

import { useNavigate } from 'react-router';

const cardContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
};

const PatientSignUp = () => {
  return (
    <div className="cardContainer" style={cardContainerStyle}>
      <LoginCard />
    </div>
  );
};

const loginCardStyle = {
  position: 'relative', // To position the title
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  height: '400px',
  width: '400px',

  border: '1px solid grey',
  borderRadius: '5px',
};

const LoginCard = () => {
  return (
    <div style={loginCardStyle}>
      <LoginCardContent />
    </div>
  );
};

const loginCardContentStyle = {
  title: {
    position: 'absolute',
    top: '10px',
    left: '30px',
  },
  loginFormStyle: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',

    inputStyles: {
      border: '1px solid grey',
      padding: '4px',
      borderRadius: '8px',
    },
  },
};

const LoginCardContent = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="cardContentContainer" style={loginCardContentStyle}>
      <h1 style={loginCardContentStyle.title}>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div
          className="loginFormContainer"
          style={loginCardContentStyle.loginFormStyle}
        >
          <input
            placeholder="Name"
            style={loginCardContentStyle.loginFormStyle.inputStyles}
          />
          <input
            placeholder="Phone"
            type="tel"
            style={loginCardContentStyle.loginFormStyle.inputStyles}
          />
          <input
            placeholder="E-mail"
            type="email"
            style={loginCardContentStyle.loginFormStyle.inputStyles}
          />

          <input
            placeholder="Password"
            type="password"
            style={loginCardContentStyle.loginFormStyle.inputStyles}
          />

          <label
            htmlFor="appointment-time"
            style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: 'normal',
              fontSize: '14px',
            }}
          >
            Select Appointment Date & Time
          </label>

          <input id="appointment-time" type="datetime-local" />

          <LoginButton />
        </div>
      </form>
    </div>
  );
};

const loginButtonStyle = {
  color: 'white',
  background: 'black',
  padding: '15px 15px',
  borderRadius: '30px',
  display: 'flex',
  justifyContent: 'center',
  cursor: 'pointer',
};

const LoginButton = () => (
  <button className="loginButton" style={loginButtonStyle}>
    Sign Up
  </button>
);

export default PatientSignUp;

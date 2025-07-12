import { useNavigate } from 'react-router';
import { useSignUpStore } from '../store/store';

const cardContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
};

const SignUpSuccesfulCardStyles = {
  container: {
    border: '1px solid black',
    width: '550px',
    height: '200px',
    padding: '16px',
    borderRadius: '4px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  title: {
    fontSize: '',
  },
};
const SignUpSuccesfulCard = () => {
  return (
    <div
      style={SignUpSuccesfulCardStyles.container}
      className="Sign Up Succesful Container"
    >
      <h1>Sign Up Successful</h1>
      <div>
        Please check your email, for further details regarding your appointment
      </div>
    </div>
  );
};

const PatientSignUp = () => {
  const signUpSubmitted = useSignUpStore((state) => state.signUpSubmitted);

  return (
    <div className="cardContainer" style={cardContainerStyle}>
      {signUpSubmitted ? <SignUpSuccesfulCard /> : <LoginCard />}
    </div>
  );
};

const loginCardStyle = {
  position: 'relative', // To position the title
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  height: '420px',
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
    width: '250px',

    inputStyles: {
      border: '1px solid grey',
      padding: '4px',
      borderRadius: '8px',
    },
  },
};

const LoginCardContent = () => {
  const navigate = useNavigate();

  const name = useSignUpStore((state) => state.name);
  const phone = useSignUpStore((state) => state.phone);
  const email = useSignUpStore((state) => state.email);
  const password = useSignUpStore((state) => state.password);
  const appointmentDateTime = useSignUpStore(
    (state) => state.appointmentDateTime
  );
  const errorText = useSignUpStore((state) => state.errorText);

  const setSignUpSubmitted = useSignUpStore(
    (state) => state.setSignUpSubmitted
  );
  const signUpSubmitted = useSignUpStore((state) => state.signUpSubmitted);
  const setErrorText = useSignUpStore((state) => state.setErrorText);
  const setEmail = useSignUpStore((state) => state.setEmail);
  const setName = useSignUpStore((state) => state.setName);
  const setPhone = useSignUpStore((state) => state.setPhone);
  const setPassword = useSignUpStore((state) => state.setPassword);
  const setAppointmentDateTime = useSignUpStore(
    (state) => state.setAppointmentDateTime
  );

  console.log(signUpSubmitted, 'Sign Up Submitted');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign Up Clicked');

    if (name || phone || email || password || appointmentDateTime) {
      setErrorText('');
      setSignUpSubmitted(true);
    } else {
      setErrorText('Please Fill in Valid inputs');
    }
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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Phone"
            type="tel"
            pattern="^[1-9]\d{9}$"
            style={loginCardContentStyle.loginFormStyle.inputStyles}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            placeholder="E-mail"
            type="email"
            style={loginCardContentStyle.loginFormStyle.inputStyles}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            placeholder="Password"
            type="password"
            style={loginCardContentStyle.loginFormStyle.inputStyles}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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

          <input
            id="appointment-time"
            type="datetime-local"
            value={appointmentDateTime}
            onChange={(e) => setAppointmentDateTime(e.target.value)}
          />

          {errorText && <span>{errorText}</span>}

          <SignUpButton />
        </div>
      </form>
    </div>
  );
};

const signUpButtonStyle = {
  color: 'white',
  background: 'black',
  padding: '15px 15px',
  borderRadius: '30px',
  display: 'flex',
  justifyContent: 'center',
  cursor: 'pointer',
};

const SignUpButton = () => (
  <button type="submit" className="signupButton" style={signUpButtonStyle}>
    Sign Up
  </button>
);

export default PatientSignUp;

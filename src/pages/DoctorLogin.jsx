import { useLoginStore } from '../store/store';
import { useNavigate } from 'react-router';

const cardContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
};

const DoctorLogin = () => {
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

  height: '350px',
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
    top: '20px',
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      setErrorText('');
      navigate('/dashboard');
    } else {
      setErrorText('Please Enter a Valid Username and Password');
    }
  };

  const email = useLoginStore((state) => state.email);
  const setEmail = useLoginStore((state) => state.setEmail);

  const password = useLoginStore((state) => state.password);
  const setPassword = useLoginStore((state) => state.setPassword);

  const errorText = useLoginStore((state) => state.errorText);
  const setErrorText = useLoginStore((state) => state.setErrorText);

  return (
    <div className="cardContentContainer" style={loginCardContentStyle}>
      <h1 style={loginCardContentStyle.title}>Doctor Login</h1>
      <form onSubmit={handleSubmit}>
        <div
          className="loginFormContainer"
          style={loginCardContentStyle.loginFormStyle}
        >
          <input
            placeholder="E-mail"
            type="email"
            style={loginCardContentStyle.loginFormStyle.inputStyles}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>

          <input
            placeholder="Password"
            type="password"
            style={loginCardContentStyle.loginFormStyle.inputStyles}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>

          {errorText && <span>{errorText}</span>}

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
    Login
  </button>
);

export default DoctorLogin;

import { Snowflake } from 'lucide-react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router';

const navContainerStyles = {
  display: 'flex',
  'justify-content': 'space-between',

  margin: '20px 30px',
};

const NavSection = () => {
  return (
    <div style={navContainerStyles}>
      <LogoSection />
      <MainNavSection />

      <GetStartedSection />
    </div>
  );
};

const logoSectionStyles = {
  display: 'flex',
  gap: '10px',
  'align-items': 'center',

  title: {
    'font-weight': '500',
    'font-size': '30px',
  },
};

const LogoSection = () => {
  return (
    <div style={logoSectionStyles}>
      <Snowflake size={24} color="#D64584" />
      <div style={logoSectionStyles.title}>React Portfolio</div>
    </div>
  );
};

const mainNavContainerStyles = {
  display: 'flex',
  gap: '20px',
  'align-items': 'center',
};

const menuOptionStyles = {
  cursor: 'pointer',
};

const scrollToElement = (id) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: 'smooth' });
};

const MainNavSection = () => {
  return (
    <div style={mainNavContainerStyles}>
      <div onClick={() => scrollToElement('home')} style={menuOptionStyles}>
        Home
      </div>
      <div
        onClick={() => scrollToElement('comparison')}
        style={menuOptionStyles}
      >
        Comparison
      </div>
      <div onClick={() => scrollToElement('reviews')} style={menuOptionStyles}>
        Reviews
      </div>
    </div>
  );
};

const loginContainerStyles = {
  display: 'flex',
  'background-color': '#DD6096',
  padding: '10px',
  'border-radius': '30px',
  'align-items': 'center',
  gap: '10px',
  color: '#fff',
};

const getStartedContainerStyles = {
  display: 'flex',
  'align-items': 'center',
  gap: '8px',
};

const getStartedIconStyles = {
  'background-color': '#fff',
  padding: '5px',
  'border-radius': '100%',
  display: 'flex',
  'align-items': 'center',
};

const getStartedImageStyles = {
  height: '20px',
};
const GetStartedSection = () => {
  return (
    <div style={getStartedContainerStyles}>
      <div style={loginContainerStyles} className="login-container">
        <div>
          <Link to="/login">Login</Link>
        </div>
        <div style={getStartedIconStyles}>
          <img style={getStartedImageStyles} src="/external-link.svg"></img>
        </div>
      </div>
    </div>
  );
};

export default NavSection;

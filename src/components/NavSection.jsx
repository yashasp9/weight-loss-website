import { Snowflake } from "lucide-react";
import { Menu } from "lucide-react";
import { Link } from "react-router";

const navContainerStyles = {
  display: "flex",
  "justify-content": "space-between",

  margin: "20px 30px"
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
  display: "flex",
  gap: "10px",
  "align-items": "center",

  title: {
    "font-weight": "500",
    "font-size": "30px"
  }
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
  display: "flex",
  gap: "20px",
  "align-items": "center"
};

const menuOptionStyles = {
  display: "flex",
  gap: "8px",
  border: "1px solid black",
  "border-radius": "50px",
  padding: "10px",
  "align-items": "center"
};

const MainNavSection = () => {
  return (
    <div style={mainNavContainerStyles}>
      <div style={menuOptionStyles}>
        <p>Menu</p>

        <Menu size={20} />
      </div>
      <div>Home</div>
      <div>Product</div>
      <div>Benefits</div>
      <div>Consultations</div>
      <div>Reviews</div>
    </div>
  );
};

const searchIconContainerStyles = {
  border: "1px solid black",
  "border-radius": "100%",
  height: "50px",
  width: "50px",
  display: "flex",
  "justify-content": "center"
};

const searchIconStyles = {
  width: "26px"
};

const loginContainerStyles = {
  display: "flex",
  "background-color": "#DD6096",
  padding: "10px",
  "border-radius": "30px",
  "align-items": "center",
  gap: "10px",
  color: "#fff"
};

const getStartedContainerStyles = {
  display: "flex",
  "align-items": "center",
  gap: "8px"
};

const getStartedIconStyles = {
  "background-color": "#fff",
  padding: "5px",
  "border-radius": "100%",
  display: "flex",
  "align-items": "center"
};

const getStartedImageStyles = {
  height: "20px"
};
const GetStartedSection = () => {
  return (
    <div style={getStartedContainerStyles}>
      <div style={searchIconContainerStyles} className="search-icon-container">
        <img style={searchIconStyles} src="/search-icon.svg"></img>
      </div>
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

import React from "react";
import "../styles/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar(props) {
  return <nav className="navbar-header">{props.children}</nav>;
}
function NavItem(props) {
  return (
    <a className="nav-item" href="#top">
      {props.children}
    </a>
  );
}
function NavMenuItem(props) {
  return (
    <a className={"menu-item " + props.extraClass} href="#top">
      {props.children}
    </a>
  );
}
function NavIcon(props) {
  return (
    <div className="nav-menu-icon">
      <a className="nav-menu" onClick={props.onClick} href="#top">
        <FontAwesomeIcon icon={faBars} />
      </a>
      {props.children}
    </div>
  );
}
function Menu(props) {
  function MiniArrow() {
    return <div className="mini-arrow"></div>;
  }
  return (
    <div className="menu">
      <NavMenuItem>About</NavMenuItem>
      <NavMenuItem>Services</NavMenuItem>
      <NavMenuItem>Projects</NavMenuItem>
      <NavMenuItem extraClass="contact">CONTACT</NavMenuItem>
      <MiniArrow />
    </div>
  );
}
export default function Header() {
  const [menu, setMenu] = React.useState(false);
  function handleClickMenu(event) {
    setMenu(!menu);
  }
  return (
    <header>
      <h1 className="title">sunnyside</h1>
      <Navbar>
        <NavItem>About</NavItem>
        <NavItem>Services</NavItem>
        <NavItem>Projects</NavItem>
        <NavItem>Contact</NavItem>
        <NavIcon onClick={handleClickMenu}>{menu ? <Menu /> : ""}</NavIcon>
      </Navbar>
    </header>
  );
}

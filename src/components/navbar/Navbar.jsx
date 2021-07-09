import "./navbar.scss";
import {Person, Mail} from '@material-ui/icons';

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#About" className="logo">About.Rebecca.Lacer.</a>
          <div className="itemContainer">
          <Person className="icon"/>
          <span>720 217 7983</span>
          </div>
          <div className="itemContainer">
          <Mail className="icon"/>
          <span>r.a.lacer@hotmail.com</span>
          </div>
          
         
          
        </div>

      <div className="right">
        <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
      </div>
    </div>
    </div>
  );
}

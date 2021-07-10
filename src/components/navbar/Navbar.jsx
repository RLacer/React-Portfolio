import "./navbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <h1>Rebecca Lacer</h1>
          <div className="itemContainer">
            <Person className="icon" />
            <span>720 217 7983</span>
          </div>
          <div className="itemContainer">
          <a class="mail" href="mailto:r.a.lacer@hotmail.com">
            <Mail className="icon" />
          
           </a>
          </div>
          <div>
          <a class="itemContainer"
                href="https://www.linkedin.com/in/rebecca-lacer/"rel="noreferrer" target="_blank"
               >Linkedin</a>
          </div>
          <div>
          <a class="itemContainer"
                href="https://github.com/RLacer"rel="noreferrer"
                target="_blank">github</a>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

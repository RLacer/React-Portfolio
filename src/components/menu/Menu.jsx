import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen}) {
  return (
    <div className={"menu " +(menuOpen && "active")}>
      <ul>
      <li onClick={()=>setMenuOpen(false)}>
          <a href="#about">Home</a>
        </li>
       <li onClick={()=>setMenuOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
       <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
       <li onClick={()=>setMenuOpen(false)}>
          <a href="assets/resume/resume.pdf" download target="_blank">Resume</a>
        </li>
      </ul>
    </div>
  );
}

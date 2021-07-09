import "./about.scss";

export default function about() {
  return (
    <div className="about" id="about">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/images/bwoutdoorhead.png" alt="headshot" />
        </div>
      </div>
      <div className="right">
          <div className="wrapper">
              <h1>Welcome!</h1>
              <h2>I'm Rebecca Lacer</h2>
              <p>As an aspiring web developer
              I enjoy developing my skills in full stack web dev.
             I have a background in manufacturing quality assurance,
            with a variety of skills.</p>
          
            <div className="portLink"><a href="#portfolio">Visit My Portfolio for Work Samples</a></div>
          </div>
      </div>
    </div>
  );
}

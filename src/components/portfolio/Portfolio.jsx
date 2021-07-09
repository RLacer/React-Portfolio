import "./portfolio.scss";

export default function portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Work Samples</h1>
      <div className="wrapper">
        <div className="itemContainer">
          <div className="item">
              <a href="https://rlacer.github.io/Git-Music-Now-Project/" target="_blank">
              <h2>FEATURED COLLABORATIVE PROJECT</h2>
            <img src="assets/images/gitpic.png" alt="project pic" />
            <h3>git.Music</h3>
            </a>
            <a href="https://github.com/RLacer/Git-Music-Now-Project" target="_blank" >
                
                <h3>Link to Repository</h3>
            </a>
          </div>

          <div className="item" id="item2">
            <a href="https://francophone-parliament-80725.herokuapp.com/" target="_blank">
              
            <img src="assets/images/hw19.png" alt="project pic"  />
            <h3>Budget Tracker on Heroku</h3>
            </a>
            <a href="https://github.com/RLacer/19-Online-and-Offline-Budget-Tracker" target="_blank">
              <h3>Link to Repository</h3>
            </a>
          </div>

          <div className="item">
          <a href="https://damp-lake-21717.herokuapp.com/" target="_blank">
            <img src="assets/images/notetaker.png" alt="project pic" />
            <h3>Note Taker on Heroku</h3>
            </a>
            <a href="https://github.com/RLacer/11-Express.js-Note-Taker" target="_blank">
              <h3>Link to Repository</h3>
            </a>
          </div>
        </div>
        <div className="itemContainer">
          <div className="item">
            <img src="" alt="" />
            <h3>Item4</h3>
          </div>
          <div className="item">
            <img src="" alt="" />
            <h3>Item5</h3>
          </div>
          <div className="item">
            <img src="" alt="" />
            <h3>Item6</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

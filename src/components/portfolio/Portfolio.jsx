import "./portfolio.scss";

export default function portfolio() {
  return (
    <div className="portfolio" id="portfolio">
       <div className="container">
   
     
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
          <a href="https://rlacer.github.io/06-Server-Side-APIs-Weather-Dashboard/" target="_blank">
            <img src="assets/images/weather.png" alt="project pic" />
            <h3>Weather Dashboard</h3>
            </a>
            <a href="https://github.com/RLacer/06-Server-Side-APIs-Weather-Dashboard" target="_blank">
              <h3>Link to Repository</h3>
            </a>
          </div>
          <div className="item">
          <a href="https://rlacer.github.io/05-Third-Party-APIs-Work-Day-Scheduler/" target="_blank">
            <img src="assets/images/dayplanner.png" alt="project pic" />
            <h3>Work Day Planner</h3>
            </a>
            <a href="https://github.com/RLacer/05-Third-Party-APIs-Work-Day-Scheduler" target="_blank">
      
              <h3>Link to Repository</h3>
            </a>
          </div>
          <div className="item">
          <a href="https://rlacer.github.io/04-Web-API-CODE-QUIZ/" target="_blank">
            <img src="assets/images/coding.png" alt="project pic" />
            <h3>Take a Coding Quiz</h3>
            </a>
            <a href="https://github.com/RLacer/04-Web-API-CODE-QUIZ" target="_blank">
      
              <h3>Link to Repository</h3>
            </a>
          
          </div>
        </div>
      </div>
    </div>
  );
}

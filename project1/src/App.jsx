import downloadImg from "./images/download.jpg";
import "./style.css";

export default function App() {
  return (
    <>
      <div className="content">
        <nav>
          <div className="right-nav">
            <img src={downloadImg} alt="react" width="40px" height="40px" />
            <h3>ReactFacts</h3>
          </div>
          <h4>React Course - Project 1</h4>
        </nav>
        <main>
          <h1>Fun Fact about React</h1>
          <ul>
            <li className="marker">Was first realsed in 2013</li>
            <li className="marker">Was originaly created by jordan Walke</li>
            <li className="marker">Has well over 100K stars on GitHub</li>
            <li className="marker">Is maintained by Facebook</li>
            <li className="marker">
              Powers thousands of enterprise apps, including mobile apps
            </li>
          </ul>
        </main>
      </div>
    </>
  );
}

1.25;

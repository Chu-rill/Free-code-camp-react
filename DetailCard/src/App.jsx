import About from "./About";
import Button from "./Button";
import Name from "./Name";
import Photo from "./Photo";
import Interests from "./Interests";
import "./styles.css";
import Footer from "./Footer";
export default function App() {
  return (
    <>
      <div className="main">
        <div className="img">
          <Photo />
        </div>
        <div className="content">
          <Name />
          <div className="buttons">
            <Button />
          </div>
          <div className="about">
            <About />
          </div>
          <div className="interests">
            <Interests />
          </div>
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    </>
  );
}

import './App.css';
import gitPic from './icons/GitHub-Mark-Light-32px.png';
import linkedinPic from './icons/linkedin.png'

function App() {
  return (
    <div className="container">
      <div className="nav">
        <span className="left-span">SM</span>
        <span className="mid-span">SANGO MATYILA MINI PORTFOLIO</span>
        <span className="rigth-span">
          <a href="https://github.com/MatyilaSango"><img src={gitPic} alt="pic" /></a>
          <a href="https://www.linkedin.com/in/sango-matyila-b1584a237/"><img src={linkedinPic} alt="pic" /></a>
        </span>
      </div>


    </div>
  );
}

export default App;

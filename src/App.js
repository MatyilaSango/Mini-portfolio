import './App.css';
import gitPic from './icons/GitHub-Mark-Light-32px.png';
import linkedinPic from './icons/linkedin.png'
import myPic from './icons/my-pic.png'

function App() {
  return (
    <div className="container">
      <div className="nav">
        <span className="left-span">SM</span>
        <span className="mid-span">PORTFOLIO</span>
        <span className="rigth-span">
          <a href="https://github.com/MatyilaSango"><img src={gitPic} alt="pic" /></a>
          <a href="https://www.linkedin.com/in/sango-matyila-b1584a237/"><img src={linkedinPic} alt="pic" /></a>
        </span>
      </div>
      <div className="main-body-container">
        <div className="my-pic-container">
          <img src={myPic} alt="pic" />
        </div>
        <div className="my-email-container">
          <span >Matyila2sango@gmail.com</span>
        </div>
        <div className="about-container">
          <h4>About me 😊 --------------------</h4>
          <p>
            My name is Sango Matyila. I am a computer science graduate from university of the western cape.
            I have a passion for programming. I like to code whether it be creating applications or websites.
            <br/><br/>
            My interest in the computing industry started long time ago before I even possesed an electronic device.
            I was always interested about how these devices that people uses work and how are they enables them to do what they want
             just with the strokes of their finders. So, when I grew up I told myself thats what want to do, create applications
             that will benefit the lives of everyone in a good way.
            <br/><br/>
            To be a developer at SovTec would be a dream come true. Working with world-class expert team of developers would be a 
            greate opportunity for me to learn new skills and to learn from my senior how this industry works and how to create beautiful, functional software.
            <br/><br/>
            
          </p>
        </div>
      </div>

    </div>
  );
}

export default App;

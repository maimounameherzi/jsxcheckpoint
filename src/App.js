import './App.css';
import './Style.css' ;

function App() {
  return (
    <div className="App">
      <div>
        <>
          <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
            <h1 className="title red">Your name here</h1>
            <br />
            <img className='Image1' src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" />
            <br />
            <img className='Image2'src="https://watermarkly.com/images/crop-photos/crop-images-sample1.webp" />
          </div>
          <video width={320} height={240} controls="">
            <source src="myVideo.mp4" type="video/mp4" />
          </video>
        </>

      </div>
    </div>
  );
}

export default App;

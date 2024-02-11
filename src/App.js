import './App.css';
import Header from './Header';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <main>
        <Main/>
      </main>
      <footer>
        <div className='container'>
          <div className='row'>
            <div className='col-7'>
              <p>Web site created using React, open-source on <a href='https://github.com/sorim492/portafolio-evyi.git' target='_blank' rel="noreferrer">github</a>, hosted on Netlify</p>
            </div>
            <div className='col-5'>
              <a href='https://www.linkedin.com/in/evyeniamm/' target='_blank' rel="noreferrer">LN</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

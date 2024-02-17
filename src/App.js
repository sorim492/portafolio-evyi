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
            <div className='col-8'>
              <p>Web site created using React
                <br/> 
                open-source on 
              <a href='https://github.com/sorim492/portafolio-evyi.git' target='_blank' rel="noreferrer" className='App-link'> github <i class="fa-brands fa-github"></i></a>, hosted on Netlify</p>
            </div>
            <div className='col-2'>
              <a href='https://www.linkedin.com/in/evyeniamm/' target='_blank' rel="noreferrer" className='App-link'><i class="fa-brands fa-linkedin"></i></a>
            </div>
            <div className='col-2'>
              <a href='mailto:evyeniamm@hotmail.com' target='_blank' rel="noreferrer" className='App-link'><i class="fa-regular fa-envelope"></i></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

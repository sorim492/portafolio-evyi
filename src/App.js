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
        <div className='col-3'>
              <p>Web site created using React
                <br/> 
                open-source on 
              <a href='https://github.com/sorim492/portafolio-evyi.git' target='_blank' rel="noreferrer" className='App-link'> github <i class="fa-brands fa-github"></i></a>, hosted on Netlify</p>
            </div>
          <div className='col-6'>
          <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#work">Work</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#skills">Skills</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#projects">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#cer">Certificates</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
                </div>
                </div>
            </nav>
            </div>
            <div className='col-3'>
              <div class="card text-bg-dark mb-3">
              <div class="card-header">Contact</div>
                <div class="card-body">
                  <a href='https://www.linkedin.com/in/evyeniamm/' target='_blank' rel="noreferrer" className='App-link'><i class="fa-brands fa-linkedin"></i></a>
                  <a href='mailto:evyeniamm@hotmail.com' target='_blank' rel="noreferrer" className='App-link'><i class="fa-regular fa-envelope"></i></a>
                </div>
            </div>
        </div>
            </div>
           
          </div>
          
      </footer>
    </div>
  );
}

export default App;

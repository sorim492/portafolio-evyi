import './App.css';
import Header from './Header';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <main>
        <Main/>
      </main>
      <footer className='App-footer'>
        <p>Web site created using React, open-source, hosted on Netlify</p>
        <a href='https://www.linkedin.com/in/evyeniamm/'>LN</a>
      </footer>
    </div>
  );
}

export default App;

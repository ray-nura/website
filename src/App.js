import './App.css';
import './App-media-query.css';
import About from './pages/About';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './component/Header';
import Values from './pages/Values';
import Team from './pages/Team';
import Jobs from './pages/Jobs';

function App() {
  return (
    <div>
      {/* <Header /> */}
      <About />
      <Values />
      <Team />
      <Jobs />
    </div>
  );
}

export default App;

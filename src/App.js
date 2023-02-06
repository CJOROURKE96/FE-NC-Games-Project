import './App.css';
import Header from './components/Header';
import Reviews from './components/Reviews';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
        <Reviews />
    </div>
  );
}

export default App;

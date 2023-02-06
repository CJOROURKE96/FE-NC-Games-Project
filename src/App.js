import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Reviews from './components/Reviews';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Routes>
        <Route path='/' element={<Reviews />}></Route>
        <Route path='/reviews/:review_id' element={<Reviews />}></Route>
        </Routes>
    </div>
  );
}

export default App;

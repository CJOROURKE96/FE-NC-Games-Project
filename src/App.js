import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Reviews from './components/Reviews';
import SingleReview from './components/SingleReview';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Routes>
        <Route path='/' element={<Reviews />}></Route>
        <Route path='/reviews/:review_id' element={<SingleReview />}></Route>
        </Routes>
    </div>
  );
}

export default App;

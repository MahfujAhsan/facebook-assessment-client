import './App.css';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Pages from './components/Pages';
import Groups from './components/Groups';
import Watch from './components/Watch';
import Gaming from './components/Gaming';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/pages' element={<Pages/>}/>
          <Route path='/watch' element={<Watch/>}/>
          <Route path='/groups' element={<Groups/>}/>
          <Route path='/gaming' element={<Gaming/>}/>
      </Routes>
    </div>
  );
}

export default App;

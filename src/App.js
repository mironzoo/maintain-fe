import './App.css';

//Dependencies
import {BrowserRouter as Router, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import MainPage from './components/MainPage';
//

function App() {

  return (
    <div className="App">
      <Router>
        <Route exact path='/'> <LoginForm /> </Route>
        <Route path='/home'> <MainPage /> </Route>
      </Router>
    </div>
  );
}

export default App;

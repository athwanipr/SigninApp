import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Profile from './components/Profile';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
      </Routes>

      <Routes>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;

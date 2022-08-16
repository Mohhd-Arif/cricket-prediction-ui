import Login from './components/login'
import Registration from './components/registration'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
// import ToastContainer from './service/toaster'

function App() {
  return (
    <main className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Registration/>}/>
        </Routes>
      </Router>
      <ToastContainer/>
    </main>
  );
}

export default App;

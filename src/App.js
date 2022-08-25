import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter as Router} from "react-router-dom";
// import ToastContainer from './service/toaster'

import Routes from './router'
import Navbar from './components/Navbar'


function App() {

  return (
    <main className='App'>
      <Router>
      <Navbar/>
        <Routes/>
      </Router>
      <ToastContainer />
    </main>
  );
}

export default App;

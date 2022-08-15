import Login from './components/login'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
// import ToastContainer from './service/toaster'

function App() {
  return (
    <main className='App'>
      <Login/>
      <ToastContainer/>
    </main>
  );
}

export default App;

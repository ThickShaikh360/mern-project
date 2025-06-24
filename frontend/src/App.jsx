import Navbar from './Components/Navbar';
import Homepage from './Pages/Homepage';
import { Route,Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
  <div>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Homepage/>}/>
    </Routes>
    <ToastContainer />
       
 </div>
  )
}

export default App

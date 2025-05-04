import { useState } from 'react'
import { Box } from '@chakra-ui/react';
import Navbar from './Components/Navbar';
import Homepage from './Pages/Homepage';
import CreatePage from './Pages/CreatePage';
import { Route,Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
  const [count, setCount] = useState(0)

  const handleclick = () => {
    setCount(count+1);
  }
 
  return (
  <Box minH={"100vh"}>
   <Navbar/>
    
          <Routes>
              <Route path='/' element={<Homepage/>}/>
              <Route path='/create' element={<CreatePage/>}/>
          </Routes>
          <ToastContainer />
  </Box>
  )
}

export default App

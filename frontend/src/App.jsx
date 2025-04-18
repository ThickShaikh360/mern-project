import { useState } from 'react'
import { Button } from '@chakra-ui/react';



function App() {
  const [count, setCount] = useState(0)

  const handleclick = () => {
    setCount(count+1);
  }
 
  return (
    <>
   <Button onClick= {handleclick}>
      Click me!
   </Button>

   <p>{count}</p>
    </>
  )
}

export default App

import { useState } from 'react';
import ShoeButton from './components/ShoeButton';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
        <ShoeButton />
      </div>
      
  )
}
export default App

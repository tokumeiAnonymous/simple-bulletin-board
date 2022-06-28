import Header from './Components/Header';
import Main from './Components/Main';
import { useState } from 'react';
import './temp.css';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <Header openForm={setIsOpen}/>
      <Main 
        isOpen={isOpen}
        openForm={setIsOpen}
        />
    </div>
  );
}

export default App;

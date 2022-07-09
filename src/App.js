import { useState } from 'react';
import './App.css'
// import bg  from './images/bg.jpg';
import mountain1 from './images/mountain1.png';
import mountain2 from './images/mountain2.png';
function App() {
  const [offset,setoffset]=useState()
  const handleScroll = () => setoffset(window.pageYOffset);
  window.addEventListener('scroll',handleScroll);
  return (
   <div className="App">
    <div className='zoom'>
       <img src={mountain1}  id = "img1" alt=''
       style={{width:(100 + offset*0.3) + '%'}}/>
       <img src={mountain2} id = "img2" alt=''
       style={{width:(100 + offset*0.3) + '%'}}/>
    </div>
    <div className= "content"></div>
   </div>
  );
}

export default App;

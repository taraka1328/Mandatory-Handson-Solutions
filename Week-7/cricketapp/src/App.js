import React ,{useState}from 'react';
import ListofPlayers from './ListofPlayers';
import IndianPlayers from './IndianPlayers';

function App() {
  const[flag, setflag] =useState(true);
  return(
    <div className='App'>
        <h1>Cricket App</h1>
        <button onClick={()=>setflag(!flag)}>
          Show {flag ? "Indian Players" : "All Players"}
        </button>
        {flag ? <ListofPlayers/> : <IndianPlayers/>}
    </div>
  )
}
export default App;
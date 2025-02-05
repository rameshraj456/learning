
import './App.css';
import ArrayComp from './components/ArrayComp';
import ArrayObjects from './components/ArrayObjects';
import ObjectComp from './components/ObjectComp';

function App() {
  // array mapping
  // objects in js
  // useState , useEffect,

  return (
    <div className="App"> 
    <p>array rendering</p>
    <ArrayComp/>
    <p>Objects in React</p>
    <ObjectComp/>

    <p>Mapping complex arrays</p>
    <ArrayObjects/>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import DndTest from './DndTest'

function App() {
  function handleMouseUp(event){
    console.log(event)
    event.preventDefault();
  }

  function onContainerOver(ev){
    console.log('over')
   ev.preventDefault();
   ev.dataTransfer.dropEffect = "move"
  }
  function onDrag(ev){
    var el = ev.srcElement;
   console.log("Drag: " + ev.srcElement)
    ev.dataTransfer.setData('text/html', ev.target);
  }

function onContainerDrop(ev){
  ev.preventDefault();
  console.log("Drop: " + ev.dataTransfer.getData("text/html"))
  ev.currentTarget.innerHTML = 	 ev.dataTransfer.getData("text/html");
}

  return (

    /*<div className="App">
    <input 
      key={'butond'} 
      type="button" draggable="true" value="butttton" 
      //onDrag={(event) => console.log('drag', event)} 
      
      
      />
      <Button 
      onDrag={(event) => onDrag(event)}
      draggable="true" 
      //onDrag={(event) => console.log(event)} 
      //onMouseUp={(event) => handleMouseUp(event)} 
      variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button 
     
      variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
      <div style={{
          backgroundColor: 'red',
        height: '100px'}
        }
        onDrop={(event) => onContainerDrop(event) }
        onDragOver={(event) => onContainerOver(event)}
        >My DIV</div>
    </div>*/
    <DndTest/>
  );
}

export default App;

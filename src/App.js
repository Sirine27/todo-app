import './App.css';
import AddTask from './Component/AddTask';
import ListTask from './Component/ListTask';



function App() {

  return (

    <div className="App">
      <header className="App-header">

       <AddTask />
       <ListTask /> 

      </header>
    </div>
  );
}

export default App;

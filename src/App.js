import {Average, Header, LowerNav, Month, Percentage, Priority, ResponseTime, SideBar, UpperNav} from './components' 
import {GraphContainer, Graph, MainApp} from './container'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App__sideBar">
        <SideBar/>
      </div>
      <div className="App__mainApp">
        {/* <MainApp/> */}
        <UpperNav/>
      </div>
    </div>
  );
}

export default App;

import {LowerNav, SideBar, UpperNav} from './components' 
import {MainApp} from './container'
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
        <LowerNav/>
        <MainApp/>
      </div>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import { MainPage } from "./MainPage";
import { Route, Routes} from "react-router-dom";



function App() {
  return (
    <>
      {/* <div className="App">
        <MainPage />
      </div> */}
    

      <Routes>
        <Route path="/" element={ <MainPage/> }></Route>
        <Route path=":categ/:cn" element={ <MainPage/> }></Route>
      </Routes>
      
    </>
  );
}

export default App;

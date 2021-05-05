import './App.css';
import { BrowserRouter, Route} from "react-router-dom";
import Home from './Components/Home'
import Contact from './Components/Contact';
import Menu from './Components/Navbar';

function App() {
  return (
    <BrowserRouter>
         
         <Menu/>
         <Route exact path="/" component={Home} />
         <Route path="/Contact" component={Contact}/>

    </BrowserRouter>
  );
}

export default App;
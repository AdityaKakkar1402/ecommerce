
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Homescreen from './screens/Homescreen';
import {
  Routes,
  Route,
} from "react-router-dom";
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <div className="App">
      <Header/>
     
      <Routes>
     
        

        <Route path="/" element={<Homescreen/>}/>
        <Route path="/product/:id" element={<ProductScreen/>}/>


        
 
      </Routes>
     
      <Footer/>
     
     
    </div>
  );
}

export default App;

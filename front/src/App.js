
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Homescreen from './screens/Homescreen';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="main">
        <Homescreen/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

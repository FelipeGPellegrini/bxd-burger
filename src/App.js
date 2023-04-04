import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
import Info from './components/Info';

function App() {
  return (
    <div className="App">
     <Header/>
     <Banner/>
     <Info/>
     <Footer />
    </div>
  );
}

export default App;

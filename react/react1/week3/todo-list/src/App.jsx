import Navbar from './Components/PageComponets/Header/Navbar/Navbar';
import Footer from './Components/PageComponets/Footer/Footer';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Navbar />

      
      <div className='content'>
      <Home />
      </div>


      <Footer />
    </div>
  );
}

export default App;

// Trial - Pushing to check, how to push from detached head!.
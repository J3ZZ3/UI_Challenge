
import './App.css';
import Navbar from '../src/assets/navbar.js';  // Import the Navbar component
import Footer from '../src/assets/footer.js'; 
import Hero from '../src/assets/hero.js'; 
import Cards from '../src/assets/cards.js'; 

function App() {
  return (
    <div className="App">
         <Navbar />
         <Hero />
         <Cards />
         <Footer />
    </div>
  );
}

export default App;


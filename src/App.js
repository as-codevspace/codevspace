import './App.css';
import Home from './components/Home';
import MyNavbar from './components/Navbar';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import MyFooter from './components/Footer';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Home />
      <Services />
      <AboutUs />
      <ContactUs />
      <MyFooter />
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CookieConsent from 'react-cookie-consent';
import Home from './Pages/Home';
import Aktuelnosti from './Pages/Aktuelnosti';
import { ONama } from './Pages/Onama';
import { OCrnojGori } from './Pages/OCrnojGori';
import { Usluge } from './Pages/Usluge';
import { Contact } from './Pages/Contact';
import ContactUs from './Pages/ContactUs';
import { Venues } from './Pages/Venues';
import { Mts } from './Pages/Mts';
import { LocationFounder } from './Pages/LocationFounder';
import NavBar from './components/Navbar/Navbar';
import NavBar2 from './components/Navbar2/Navbar2';
import Hamburger from './components/Hamburger/Hamburger';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <NavBar2 />
        <Hamburger />
        <CookieConsent
          location="bottom"
          buttonText="Accept!!"
          cookieName="myAwesomeCookieName2"
          style={{ background: '#2B373B' }}
          buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
          expires={150}
        >
          This website uses cookies to enhance the user experience.
          {' '}
          <span style={{ fontSize: '10px' }}>
            This bit of text is smaller :O
          </span>
        </CookieConsent>

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/mts" component={Mts} />
            <Route path="/aktuelnosti" component={Aktuelnosti} />
            <Route path="/info" component={ONama} />
            <Route path="/crnagora" component={OCrnojGori} />
            <Route path="/location" component={LocationFounder} />
            <Route path="/usluge" component={Usluge} />
            <Route path="/contact" component={Contact} />
            <Route path="/contactus" component={ContactUs} />
            <Route path="/venues" component={Venues} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

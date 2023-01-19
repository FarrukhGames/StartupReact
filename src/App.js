import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import Background from './components/Background';
import Company from './components/Company';
import Team from './components/Team';
import Prices from './components/Prices';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Menu/>
      <Background/>
      <Company/>
      <Team/>
      <Prices/>
      <Contacts/> 
      <Footer/> 
    </>
  );
}

export default App;

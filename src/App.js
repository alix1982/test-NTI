import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/header/Header';
import BestProducts from './components/bestProducts/BestProducts';
import Catalog from './components/catalog/Catalog';
import Advantages from './components/advantages/Advantages';
import News from './components/news/News';
import ContactsAndRequest from './components/contactsAndRequest/ContactsAndRequest';
import Footer from './components/footer/Footer';
import { advantages, advantagesMobile, products, events, eventsMobile } from './constants';
import phone from './images/contactsAndRequest/phone.png';
import phoneMobile from './images/contactsAndRequest/phoneMobile.png';


function App() {
  const [isNav, setIsNav] = useState(false);
  const handleMenu = () => {
    setIsNav(!isNav);
  }
  function onCloseOverlay (evt) {
    // console.log(evt.target.localName);
      (evt.target.localName === 'header') && closeMenu()
  }
  function closeMenu () {
      setIsNav(false)
  }
  useEffect(()=> {
    function onCloseEsc (evt) {evt.key === 'Escape' && closeMenu()}
    document.addEventListener('keydown', onCloseEsc);
    return () => {!isNav && document.removeEventListener('keydown', onCloseEsc)}
  })

  //resize
  const productsMobile = [products[1], products[4], products[0], products[2], products[3]];
 
  const [isSizeWindow, setIsSizeWindow] = useState('desctop');

  const [advantagesRender, setAdvantagesRender] = useState([]);
  const [productsRender, setProductsRender] = useState([]);
  const [eventsRender, setEventsRender] = useState([]);
  const [phoneRender, setPhoneRender] = useState([]);

  const setSize = () => {
      window.innerWidth <= 1400 ? setIsSizeWindow('mobile') : setIsSizeWindow('desctop');
      window.innerWidth <= 1400 ? setAdvantagesRender(advantagesMobile) : setAdvantagesRender(advantages);
      window.innerWidth <= 1000 ? setProductsRender(productsMobile) : setProductsRender(products);
      window.innerWidth <= 739 ? setEventsRender(eventsMobile) : setEventsRender(events);
      window.innerWidth <= 1400 ? setPhoneRender(phoneMobile) : setPhoneRender(phone);
  }
  useEffect(()=>{
      setSize();
  },[]);

  useEffect(()=>{
      const onSizeWindow = () => { 
          setSize();
      };
      window.onresize = onSizeWindow;
  })

  return (
    <div className="App" onClick = {onCloseOverlay}>
      <Header isNav={isNav} handleMenu={handleMenu}/>
      <main>
        <BestProducts/>
        <Catalog/>
        <Advantages advantagesRender={advantagesRender}/>
        <News eventsRender={eventsRender} isSizeWindow={isSizeWindow}/>
        <ContactsAndRequest phoneRender={phoneRender}/>
      </main>
      <Footer productsRender={productsRender}/>
    </div>
  );
}

export default App;

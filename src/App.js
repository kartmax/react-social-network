import './App.css';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App(props) {

   let store = props.store;

   return (
      <BrowserRouter>
         <div className='app-wrapper'>
            <Header />
            <Navbar />
            <main className="main">
               <Routes>
                  <Route path='/profile' element = {<Profile />} />
                  <Route path='/dialogs/*' element = {<DialogsContainer />} />
                  <Route path='/news' element = {<News />} />
                  <Route path='/music' element = {<Music />} />
                  <Route path='/settings' element = {<Settings />} />
               </Routes>
            </main>
            <Footer />
         </div>
      </BrowserRouter>
   );
}

export default App;

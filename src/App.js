import './App.css';

import HeaderContainer from './components/Header/HeaderContainer'
import Navbar from './components/Navbar/Nav';
import Footer from './components/Footer/Footer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProfileConstainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';

function App(props) {

   let store = props.store;

   return (
      <BrowserRouter>
         <div className='app-wrapper'>
            <HeaderContainer />
            <Navbar />
            <main className="main">
               <Routes>
                  <Route path='/profile/' element = {<ProfileConstainer />} />
                  <Route path='/profile/:userId' element = {<ProfileConstainer />} />
                  <Route path='/dialogs/*' element = {<DialogsContainer />} />
                  <Route path='users' element = {<UsersContainer />} />
                  <Route path='/news' element = {<News />} />
                  <Route path='/music' element = {<Music />} />
                  <Route path='/settings' element = {<Settings />} />
                  <Route path='/login' element = {<Login />} />
               </Routes>
            </main>
            <Footer />
         </div>
      </BrowserRouter>
   );
}

export default App;

import './App.css';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App(props) {
   return (
      <BrowserRouter>
         <div className='app-wrapper'>
            <Header />
            {/* <Navbar state={props.store.getState().sidebar} /> */}
            <Navbar state={props.store.getState().SIDEBAR_REDUSER} />
            <main className="main">
               <Routes>
                  <Route path='/profile' element={
                     <Profile 
                        // state={props.store.getState().profilePage} 
                        state={props.store.getState().ADD_NEW_POST_REDUSER} 
                        dispatch={props.store.dispatch.bind(props.store)} 
                     />} />
                  <Route path='/dialogs/*' element={
                     <Dialogs 
                        // state={props.store.getState().messagesPage} 
                        state={props.store.getState().ADD_NEW_MESSAGE_REDUSER} 
                        dispatch={props.store.dispatch.bind(props.store)}
                     />} />
                  <Route path='/news' element={<News />} />
                  <Route path='/music' element={<Music />} />
                  <Route path='/settings' element={<Settings />} />
               </Routes>
            </main>
            <Footer />
         </div>
      </BrowserRouter>
   );
}

export default App;

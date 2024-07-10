import './App.css';
import {Routes, Route} from 'react-router-dom';
import Landing from './Pages/LandingPage/Landing';
import Albums from './Pages/AlbumsPage/Albums';
import Videos from './Pages/VideosPage/Videos';
import Contact from './Pages/Contact/Contact';
import Blogs from './Pages/Blogs/Blog';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/albums' element={<Albums/>} />
      <Route path='/blogs' element={<Blogs/>} />
      <Route path='/videos' element={<Videos/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
  );
}

export default App;

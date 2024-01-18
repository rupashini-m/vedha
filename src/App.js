
import './App.css';
import { BrowserRouter as Routers ,Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Blog from './Blog';
import Service from './Service';
function App() {
  return (
    <Routers>    <div className='wrapper'>
<Menu/>

<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/About' element={<About/>}></Route>
  <Route path='/Contact' element={<Contact/>}></Route>
  <Route path='/Blog' element={<Blog/>}></Route>
  <Route path='/Service'element={<Service/>}></Route>

</Routes>
     
    </div>
    </Routers>

  );
}

export default App;

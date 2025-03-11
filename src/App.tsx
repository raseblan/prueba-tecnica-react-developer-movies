
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Inicio } from './components/Inicio';
import { Navbar } from './components/Navbar';
import { Series } from './components/Series';
import { Peliculas } from './components/Peliculas';
import { Page404 } from './components/Page404';
import { Footer } from './components/Footer';


export const App  =  () => {
  return (
<>
<Navbar/>

<Routes>
<Route path={"*"} element={<Page404/>}/>
<Route path={"/"} element={<Inicio/>}/>
  <Route path={"/series"} element={<Series/>}/>
  <Route path={"/peliculas"} element={<Peliculas/>}/>
</Routes>
<Footer/>

</>

  );
}


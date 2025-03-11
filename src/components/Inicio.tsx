import { NavLink } from 'react-router-dom';
import descarga from '.././img/imgSeries.jpg';
import descarga1 from '.././img/peliculas.jpg';
export const Inicio = () => {
    return (
        <div className='div-global__inicio'>
            <div className="contenedor">
                <div className="imagen-peliculas">    <img src={descarga} alt="Películas" className="imagen-peliculas" /></div>
                <div className="div-peliculas__inicio">
                    <NavLink style={{ textDecoration: 'none', color: 'black' }} to={"/series"}>Series</NavLink>
                </div>
            </div>

            <div className="contenedor">
                <div className="imagen-peliculas">    <img src={descarga1} alt="Películas" className="imagen-peliculas" /></div>
                <div className="div-peliculas__inicio">
                    <NavLink style={{ textDecoration: 'none', color: 'black' }} to={"/peliculas"}>Películas</NavLink>
                </div>
            </div>
        </div>
          
    );
}


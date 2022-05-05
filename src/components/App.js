import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import getApiData from '../services/wowApi';
import localStorage from '../services/localStorage';
import MovieSceneList from './MovieSceneList';
import MovieSceneDetail from './MovieSceneDetail';
import InputSearch from './InputSearch';

import '../styles/App.scss';
import '../styles/Reset.scss';

const App = () => {
  const [dataScene, setDataScene] = useState([]);
  const [filterMovie, setFilterMovie] = useState('');
  const [filterYear, setFilterYear] = useState('');
  
  // Me traigo los datos de la API
  useEffect(() => {
    if (dataScene.length === 0) {
      getApiData().then((dataFromApi) => {
        setDataScene(dataFromApi);
      });
    }
  });
  
  const handleFilterMovie = (value) => {
    setFilterMovie(value);
  };
  const handleFilterYear = (value) => {
    setFilterYear(value);
  };

  const wowData = dataScene
    //Filtro por el texto de busqueda
    .filter(movie => {
      return movie.title.toLowerCase().includes(filterMovie.toLowerCase()); 
    })
    //Filtro por el año
    .filter (movie => {
      return filterYear === '' ? true : movie.year === filterYear;
    })
    //Filtro de duplicados
    /*.filter (movie => {
      return movie.title === ?
    });*/

  // Recorremos los años de las peliculas en la lista, lo pasamos a Set para quitar duplicados y copiamos los datos del Set a una array
  const renderYears = [...new Set(
    wowData.map(data => {
        return data.year;
    })
  )].sort();

  return (
    <>
      <h1 className="owen__title">Owen Wilson's Wow</h1>
      <InputSearch handleFilterMovie={handleFilterMovie} handleFilterYear={handleFilterYear} years={renderYears}/>
    
      <MovieSceneList movies={wowData} />
    </>
  );
};

export default App;
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import React , { useState , useEffect } from 'react'
import './App.css';
import Details from './component/details/Details';
import Favourite from './component/favourite/Favourite';
import MainNav from './component/Nav/MainNav';

function App() {
  const [search, setSearch] = useState("New york");
    const [query, setQuery] = useState('');
    const [weather, setweather] = useState([]);

    const baseURL= `${process.env.REACT_APP_URL}/current?access_key=${process.env.REACT_APP_APIKEY}&query=${query}`

    useEffect(()=>{
        GetWeather()
    }, [query]);
    
      const GetWeather = async () => {
        const response = await fetch(baseURL);
        let data = await response.json();
        // data.current 
        // data.location
        // data.request
        setweather(data);
      };

      console.log(weather);

    const updateSearch = e =>{
        setSearch(e.target.value);
        console.log(search);
    };
    
    const getSearch = e =>{
        e.preventDefault();
        setQuery(search);
        setSearch('');
    };

  return (
    <BrowserRouter>
      <div className="App">
        <MainNav search={search} getSearch={getSearch} updateSearch={updateSearch}/>
        <Switch>
          <Route exact path='/'>
            <Favourite weather={weather} />
          </Route>
          <Route path='/details/:name'>
            <Details weather={weather} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Switch } from "react-router-dom";
import React , { useState , useEffect } from 'react'
import './App.css';
import Details from './component/details/Details';
import Favourite from './component/favourite/Favourite';
import MainNav from './component/Nav/MainNav';
import Result from "./component/result/Result";

function App() {
  const [search, setSearch] = useState("");
    const [query, setQuery] = useState('');
    const [weather, setweather] = useState([]);

    useEffect(() => {
      const GetWeather = async () => {
        const response = await fetch(`${process.env.REACT_APP_URL}/weather?q=${query}&appid=${process.env.REACT_APP_APIKEY}&units=metric`);

        let data = await response.json();
        setweather(data);
      };
      GetWeather();
    }, [query]);

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
          <Route path='/favourite'>
            <Favourite weather={weather} />
          </Route>
          <Route exact path='/'>
            <Result weather={weather}/>
          </Route>
          <Route path='/details/:name'>
            <Details />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

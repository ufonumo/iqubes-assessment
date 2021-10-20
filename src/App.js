import './App.css';
import Details from './component/details/Details';
import Favourite from './component/favourite/Favourite';
import MainNav from './component/Nav/MainNav';

function App() {
  return (
    <div className="App">
      <MainNav />
      {/* <Favourite/> */}
      <Details/>
    </div>
  );
}

export default App;

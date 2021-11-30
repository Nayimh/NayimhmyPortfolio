
import { BrowserRouter, Switch , Route } from 'react-router-dom';
import './App.css';
import './index.css';
import Details from './Pages/Details/Details/Details';
import Footer from './Pages/Home/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import Navigation from './Pages/Home/Navigation/Navigation';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation/>
        <Switch>
          <Route path="/home">
          <Home/>
          </Route>
          <Route path="/details/:projectId">
          <Details></Details>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

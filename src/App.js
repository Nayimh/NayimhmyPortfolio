
import { BrowserRouter, Switch , Route } from 'react-router-dom';
import './App.css';
import './index.css';
import Footer from './Pages/Home/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import Navigation from './Pages/Home/Navigation/Navigation';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation/>
        <Switch>
          <Route>
          <Home/>
          </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './views/HomeView'
import SearchPage from './views/SearchPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//rsf
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>

          
        
        <Route path="/search">
        <SearchPage/>
        </Route>

        <Route path="/">
          <Home />
          </Route>
         

        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;

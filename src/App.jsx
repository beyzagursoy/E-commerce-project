import { Switch, Route } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import PageContent from './layout/PageContent'; 
import HomePage from './pages/HomePage';
import Shop from './pages/Shop'; 

function App() {
  return (
    <div className="min-h-screen flex flex-col font-montserrat">

      <Header />

      <PageContent>
        <Switch> 
          <Route exact path="/">
            <HomePage />
          </Route>
          
          <Route path="/shop">
             <Shop />
          </Route>
        </Switch>
      </PageContent>
      <Footer />
    </div>
  );
}

export default App;
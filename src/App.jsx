import { Switch, Route } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import PageContent from './layout/PageContent'; // Yeni import
import HomePage from './pages/HomePage';

function App() {
  return (
    // Mobile First yaklaşımı için flex-col ve min-h-screen önemli
    <div className="min-h-screen flex flex-col font-montserrat">
      
      <Header />

      <PageContent>
        <Switch> 
          {/* Ana Sayfa */}
          <Route exact path="/">
            <HomePage />
          </Route>
          
          {/* İleride eklenecek sayfalar buraya gelecek */}
          {/* <Route path="/shop">
               <ShopPage />
          </Route> */}
        </Switch>
      </PageContent>

      <Footer />
    </div>
  );
}

export default App;
import { Switch, Route } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import PageContent from './layout/PageContent'; 
import HomePage from './pages/HomePage';
import Shop from './pages/ShopPage'; 
import ProductDetail from './pages/ProductDetailPage'; 
import ContactPage from './pages/ContactPage';
import TeamPage from './pages/TeamPage';
import AboutPage from './pages/AboutPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-montserrat">
      <Header />

      <PageContent>
        <Switch> 
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/shop/:productId">
             <ProductDetail />
          </Route>

          <Route path="/shop">
             <Shop />
          </Route>

          <Route path="/contact">
             <ContactPage />
          </Route>

          <Route path="/about">
             <AboutPage />
          </Route>

          <Route path="/team">
             <TeamPage />
          </Route>

          <Route path="/signup">
             <SignUpPage />
          </Route>
        </Switch>
      </PageContent>

      <Footer />
    </div>
  );
}

export default App;
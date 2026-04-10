import { Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { verifyToken } from './store/actions/clientActions';

import Header from './layout/Header';
import Footer from './layout/Footer';
import PageContent from './layout/PageContent';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetail from './pages/ProductDetailPage';
import ContactPage from './pages/ContactPage';
import TeamPage from './pages/TeamPage';
import AboutPage from './pages/AboutPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import PricingPage from './pages/PricingPage';
import BlogPage from './pages/BlogPage';
import ShoppingCartPage from './pages/ShoppingCartPage';

import ProtectedRoute from './components/ProtectedRoute'; 
import OrderPage from './pages/OrderPage'; 
import PreviousOrders from './components/PreviousOrders';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(verifyToken());
  }, [dispatch]);

  return (
    <div className="min-h-screen flex flex-col font-montserrat">
      <Header />

      <PageContent>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId" component={ProductDetail} />
          <Route path="/shop/:gender/:categoryName/:categoryId" component={ShopPage} />
          <Route path="/shop/:productId" component={ProductDetail} />
          <Route path="/shop" component={ShopPage} />

          <Route path="/contact" component={ContactPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/team" component={TeamPage} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/pricing" component={PricingPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/cart" component={ShoppingCartPage} />

          <ProtectedRoute path="/order" component={OrderPage} />
          <Route path="/previous-orders">
            {localStorage.getItem("token") ? <PreviousOrders /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </PageContent>

      <Footer />

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        theme="colored"
      />
    </div>
  );
}

export default App;
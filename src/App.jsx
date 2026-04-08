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
import PricingPage from './pages/PricingPage';
import BlogPage from './pages/BlogPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginPage from './pages/LoginPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API } from './api/api';
import { setUser } from './store/actions/clientActions';
import { toast } from 'react-toastify';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    
    if (token) {
      API.get('/verify', {
        headers: {
          Authorization: token
        }
      })
      .then(res => {
        dispatch(setUser(res.data));
        localStorage.setItem("token", res.data.token);
      })
      .catch(err => {
        console.error("Verify error:", err);
        localStorage.removeItem("token"); 
        toast.error("Session expired, please login again.");
      });
    }
  }, [dispatch]);

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

          <Route path="/blog">
             <BlogPage />
          </Route>

          <Route path="/pricing">
             <PricingPage />
          </Route>

          <Route path="/signup">
             <SignUpPage />
          </Route>

          <Route path="/login">
             <LoginPage />
          </Route>
        </Switch>
      </PageContent>

      <Footer />
      <ToastContainer 
        position="bottom-right" 
        autoClose={5000} 
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
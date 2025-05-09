import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeMain from "./features/home/HomeMain";
import SignUp from "./features/signup/SignUp";
import Login from "./features/login/LoginMain";
import TermsAndConditions from "./features/terms-and-conditions/TermsAndConditions";
import CookiePolicy from "./features/cookie-policy/CookiePolicy";
import PrivacyPolicy from "./features/privacy-policy/PrivacyPolicy";
import ContactUs from "./features/contact-us/ContactUs";
import Faqs from "./features/faqs/Faqs";
import AboutUs from "./features/about-us/AboutUs";
import ResetPassword from "./features/resetpassword/ResetPassword";
import ForgotPassword from "./features/forgotpassword/ForgotPassword";
import PricingPage from "./features/pricing/Pricing";
import ScrollToTop from "./apputils/ScrollToTop";
import ProductList from "./features/home/ProductList";
import Product from "./features/home/Product";

function App() {
  const queryClient = new QueryClient();
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ScrollToTop />

          <Routes>
            <Route index={true} element={<HomeMain />} />
            <Route path={"/"} element={<HomeMain />} />
            <Route path={"/home"} element={<HomeMain />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/faq" element={<Faqs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
            <Route path="/productlist" element={<ProductList />} />
            <Route path="/product" element={<Product />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;

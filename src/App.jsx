// Routing
import { Route, Routes } from 'react-router-dom'

// Pages
import Layout from './components/Layout'
import Landing from './pages/Landing/Landing'

// Auth pages
import Register from './pages/Register'
import Login from './pages/Login'
import VerificationPage from './pages/Verification'
import PasswordRecovery from './pages/PasswordRecovery'
import CodeVerificationPage from './pages/CodeVerification'

// Product pages
import ProductPage from './pages/Product/Product'
import ComparisonView from './pages/ComparisonView'
import Publish from './pages/Publish'
import ExposureInfo from './pages/ExposureInfo'
import ExposurePage from './components/Exposure/ExpositionPage'
import OffersPage from './pages/Offers'
import ExpositionPage from './components/Exposure/ExpositionPage'
import ComponentFinderPage from './pages/Search/Component'
import BicycleFinderPage from './pages/Search/Bicycle'
import ProductRating from './pages/ProductRating'

// User pages
import Profile from './pages/Profile'
import SellerPage from './pages/Seller'
import Purchases from './pages/Purchases'

// About us pages
import TermsAndCondition from './pages/TermsAndConditions'
import DataPrivacy from './pages/DataPrivacy'
import AboutUsPage from './pages/AboutUs'

// Services
import RequestResult from './pages/RequestResult'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />

        {/* Authentication pages */}
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="verification" element={<VerificationPage />} />
        <Route
          path="verificationCode/:token?"
          element={<CodeVerificationPage />}
        />
        <Route path="passwordRecovery/:token" element={<PasswordRecovery />} />
        <Route
          path="verificationCode/:token"
          element={<CodeVerificationPage />}
        />

        {/* Product pages */}
        <Route path="product/:id" element={<ProductPage />} />
        <Route path="comparison/:id1/:id2" element={<ComparisonView />} />
        <Route path="productRating" element={<ProductRating />} />
        <Route path="publish" element={<Publish />} />
        <Route path="exposureInfo" element={<ExposureInfo />} />
        <Route path="exposurePayment" element={<ExposurePage />} />
        <Route path="offers" element={<OffersPage />} />
        <Route path="exposure/:ProductId" element={<ExpositionPage />} />
        <Route path="search/component" element={<ComponentFinderPage />} />
        <Route path="search/bycicle" element={<BicycleFinderPage />} />

        {/* User pages */}
        <Route path="profile" element={<Profile />} />
        <Route path="seller/:id" element={<SellerPage />} />
        <Route path="purchases/:BuyerId" element={<Purchases />} />

        {/* About us pages */}
        <Route path="terms" element={<TermsAndCondition />} />
        <Route path="privacy" element={<DataPrivacy />} />
        <Route path="aboutUs" element={<AboutUsPage />} />

        {/* Services pages */}
        <Route path="requestResult/:type" element={<RequestResult />} />
      </Route>
    </Routes>
  )
}

export default App

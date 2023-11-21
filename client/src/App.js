// App.js
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page404 from './components/404/Page404';
import './App.css';

const Navbar = lazy(() => import('./components/Navbar/Navbar'));
const Home = lazy(() => import('./pages/Home/Home'));
const Login = lazy(() => import('./pages/Login/Login'));
const Reserve = lazy(() => import('./pages/Reserve/Reserve'));
const User = lazy(() => import('./pages/User/User'));
const CheckReservation = lazy(() => import('./pages/reserved/CheckReservation'));


const App = () => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Navbar />
                <Routes>
                    <Route path='/' index element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/reserve' element={<Reserve />} />
                    <Route path='/user' element={<User />} />
                    <Route path='/check-reservation' element={<CheckReservation />} />
                    <Route path='*' element={<Page404 />} />
                </Routes>
            </Suspense>
        </Router>
    );
};

export default App;

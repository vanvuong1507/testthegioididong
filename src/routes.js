



import React from 'react';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import PhonePage from './pages/PhonePage/PhonePage';




const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage/>
    },
    {
        path: '/dtdd',
        exact: false,
        main: () => <PhonePage />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage/>
    }
];

export default routes;
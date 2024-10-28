import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './pages/login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import { Provider } from 'react-redux'
import { store } from './store/store'
import theme from './theme'
import Test from './pages/Test'
import './index.css'
import Landing from './pages/landing'
import Component2 from './components/component2'
import Explore from './pages/explore'
import Signup from './pages/signup'
import HousingDetails from './pages/housingDetails'
import SmartPriceFinder from './pages/smartPriceFinder'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />
    },
    {
        path: "login",
        element: <Login />,
    },
    {
        path: "signup",
        element: <Signup />,
    },
    {
        path: "test",
        element: <Test />,
    },
    {
        path: "component2",
        element: <Component2 />
    },
    {
        path: "explore",
        element: <Explore />
    },
    {
        path: "housing/:id",
        element: <HousingDetails />
    },
    {
        path: "smart-price-finder",
        element: <SmartPriceFinder />
    },
])


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)
root.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <React.StrictMode>
                <RouterProvider router={router} />
            </React.StrictMode>
        </ThemeProvider>
    </Provider>
)

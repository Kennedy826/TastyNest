import { createBrowserRouter } from 'react-router'
import Main from '../layout/Main'
import Home from '../pages/home/Home'
import Signup from '../components/Signup'
import PrivateRouter from '../PrivateRouter/PrivateRouter'
import UpdateProfile from '../pages/dashboard/UpdateProfile'
import Menu from '../pages/shop/menu'

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children : [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/menu',
                element: <Menu/>
            },
            {
                path: '/profile',
                element: <UpdateProfile/>
            },

        ],
    },
    {
        path: '/signup',
        element: <Signup/>
    },
])

export default Router
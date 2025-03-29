import { createBrowserRouter } from 'react-router'
import Main from '../layout/Main'
import Home from '../pages/home/Home'
import Menu from '../pages/shop/Menu'
import Signup from '../components/Signup'
import PrivateRouter from '../PrivateRouter/PrivateRouter'
import UpdateProfile from '../pages/dashboard/UpdateProfile'

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
import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import Home from '../Pages/Home';
import LoginForm from '../Pages/Login/LoginForm';
import SignUp from '../Pages/Login/SignUp';
import NotFound from '../Pages/Login/NotFound';
import CheckOut from '../Pages/Checkout/CheckOut';
import Blog from '../Pages/Blog/Blog';
import AllBooks from '../Pages/Home/AllBooks';
import AddNewBook from '../Pages/AddNewBook/AddNewBook';
import MyBooks from '../Pages/MyBooks/MyBooks';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/login',
        element: <LoginForm />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: "/chekcout",
        element: <CheckOut />
      },
      {
        path: "/Blog",
        element: <Blog />
      },
      {
        path: "/allbooks",
        element: <AllBooks />
      },
      {
        path: "/addNewBook",
        element: <AddNewBook />
      },
      {
        path: "/myBooks",
        element: <MyBooks />
      }
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
export default routes;

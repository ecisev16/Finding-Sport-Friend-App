import {
  createBrowserRouter, 
  RouterProvider, 

} from 'react-router-dom';
import ErrorPage from './pages/Error';
import ExplorePage from './pages/Explore';
import ProfilePage from './pages/Profile';
import RootLayout from './pages/Root';
import OwnerActivitiesPage from './pages/OwnerActivities';
import LogInPage from './pages/LogIn/LogIn';
import { Auth } from 'firebase/auth';

const router = createBrowserRouter([
 /*    {
    path: '/',
    element: <LogInPage/>,
    errorElement: <ErrorPage/>,
  }, */  

  {
    path: '/', 
    element: <RootLayout/>,

    children: [
      {index:true, element: <ExplorePage/>}, 
      {path:'profil', element: <ProfilePage/>},

      
    ]
  }
  
  
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>;
      
    </>
  )
  
}

export default App;

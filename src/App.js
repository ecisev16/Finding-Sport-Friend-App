import {
  createBrowserRouter, 
  RouterProvider, 

} from 'react-router-dom';
import ErrorPage from './pages/Error';
import ExplorePage from './pages/Explore';
import ProfilePage from './pages/Profile';
import RootLayout from './pages/Root';
import {OwnerActivitiesPage} from './pages/OwnerActivities';
import LogInPage from './pages/LogIn/LogIn';
import { Auth } from 'firebase/auth';
import Activity from './components/Activity';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LogInPage/>,
    
  },
  {
    path: '/root', 
    element: <RootLayout/>,

    children: [
      {index:true, element: <ExplorePage/>}, 
      {path:'profil', element: <ProfilePage/>},
      {path:'profil/duzenlenen-aktiviteler', element: <OwnerActivitiesPage/>}, 
      {path:'profil/katilinan-aktiviteler', }, 
      
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

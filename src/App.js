import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ExplorePage from './pages/Explore';
import ProfilePage from './pages/Profile';
import RootLayout from './pages/Root';
import {OwnerActivitiesPage} from './pages/OwnerActivities';
import LogInPage from './pages/LogIn/LogIn';
import  ProtectedRoute  from './pages/LogIn/ProtectedRoute';
import { Auth } from 'firebase/auth';
import Activity from './components/ActivityComponents/Activity';
import {StorePage} from "./pages/Store";

const router = createBrowserRouter([
  {
    path: '/Finding-Sport-Friend-App',
    element: <LogInPage/>,
  
    
  },
  {
    path: '/root', 
    element: 
      <ProtectedRoute>
        <RootLayout/>
      </ProtectedRoute>,
        
      
    children: [
      {index:true, element: <ExplorePage/>}, 
      {path: ":profilID", element: <ProfilePage/>},

      {path:':profilID/duzenlenen-aktiviteler', element: <OwnerActivitiesPage/> }, //<OwnerActivitiesPage/> <StorePage/>
      {path:':profilID/katilinan-aktiviteler', }, 

      
    ]
  }
  
  
])

function App() {
  return (
    <>
    
      <RouterProvider router={router}/>
    </>
  )
  
}

export default App;

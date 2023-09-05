import {
  createBrowserRouter, 
  //createRoutesFromElements, 
  RouterProvider, 
  //Route
} from 'react-router-dom';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import ProfilePage from './pages/Profile';
import RootLayout from './pages/Root';
import ProductDetailPage from './pages/ProductDetail'
import OwnerActivitiesPage from './pages/OwnerActivities';

const router = createBrowserRouter([
  {
    path: '/',   // parent örneğin '/root' adında olsaydı. bütün absolute patha sahip çocukarı da '/root ile başlaması gerekecekti.'
    // bu bir absolute pathdır.
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {index:true, element: <HomePage/>}, //alternative of path:'' usage.
      {path:'profil', element: <ProfilePage/>},
      {path:'profil/:profilID', element: <ProductDetailPage/>}, 
      {path:'profil/duzenlenen-aktiviteler', element: <OwnerActivitiesPage/>}, 
      {path:'profil/katilinan-aktiviteler', element: <ProductDetailPage/>}, 
      {path:'products/:productID', element: <ProductDetailPage/>}, // dynamic segment
      // relative pathlardır.
      //'products/:productID' is direct child of root route not products route
    ]
  }
  
])

//const routeDefinitions = createRoutesFromElements(
//  <Route>
//   <Route path="/" element={<HomePage/>}/>
//    <Route path="/products" element={<ProductsPage/>}/>
//  </Route>
//)

//const router = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;

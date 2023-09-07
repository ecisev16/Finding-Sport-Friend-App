import {Outlet} from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import Header from '../PageComponents/Header/Header';
import SideBar from '../PageComponents/SideBar/SideBar';


function RootLayout(){
    return (
        <>

            <Header/>
            {/*<h1>Root Layout</h1>*/}
            <SideBar></SideBar>
            <MainNavigation/>
            <main>
                <Outlet/>
            </main>
            
        </>
    );
}

export default RootLayout;
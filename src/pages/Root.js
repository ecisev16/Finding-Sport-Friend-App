import {Outlet} from 'react-router-dom';

import Header from '../PageComponents/Header/Header';
import SideBar from '../PageComponents/SideBar/SideBar';


function RootLayout(){
    return (
        <>

            <Header/>
            <SideBar/>
            
            <main>
                <Outlet/>
            </main>
            
        </>
    );
}

export default RootLayout;
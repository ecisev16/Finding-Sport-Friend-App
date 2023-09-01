import {NavLink} from 'react-router-dom'; //Bu bağlantılar, sitenin veya uygulamanın ana gezinme yapısını oluştururlar ve kullanıcıların siteyi dolaşmasını kolaylaştırır.
//"nav link" genellikle stil ve düzen açısından özelleştirilir ve menü öğelerini vurgulamak veya seçili bağlantıyı belirtmek için CSS veya JavaScript ile işlenir.
import classes from './MainNavigation.module.css';

function MainNavigation(){
    return(
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink 
                        to = "/"
                        className = {({isActive})=>
                            (isActive ? classes.active : undefined)
                        }
                        end // "/" bütün safya adlarında geçeceği için yanlış highlight yapmamak adına home page için "/" ile bitmesi koşulunu koyduk.
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                        to = "/products"
                        className = {({isActive})=>
                            (isActive ? classes.active : undefined)
                        }
                        >
                            Products
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;
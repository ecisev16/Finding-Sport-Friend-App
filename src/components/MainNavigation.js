import {NavLink} from 'react-router-dom';
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
import {Link, useNavigate} from 'react-router-dom';

function HomePage(){
    const navigate = useNavigate();
    function navigateHandler(){
        navigate('/products');
    }
    return (
        <>
            <h1>My Home Page</h1>
            <p>
                Go to <Link to="products">The List of Products </Link>
            </p>
            {/*Her seferinde http request göndererek bütün react app ini tekrar başlatır. Bu iyi bir şey değil
            Bu single page application mantığını bozar */}
            <p>
                <button onClick={navigateHandler}>Navigate</button>
            </p>
        </>
    )
}

export default HomePage;
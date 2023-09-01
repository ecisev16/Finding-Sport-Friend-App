import {useParams, Link} from 'react-router-dom';

function ProductDetailPage(){
    const params = useParams(); // dynamic segment
    return (
        <>
            <h1>Product Details!</h1>
            <p>{params.productID}</p> 
            <p><Link to=".." relative="path" >Back</Link></p>
        </>
    
    )

}

//relative="path" değil de relative="route" kullanırsan root page e geçer.

export default ProductDetailPage
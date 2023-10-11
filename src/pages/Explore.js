
import { useNavigate } from "react-router-dom";

function ExplorePage(){
    const navigate = useNavigate();

    const id_1 = "eMeM2Cc82APvzH5ngRRX8BaSKWp1";
    const id_2 = "Qu4WjdWQhPbUQsP3eCkOi5qI1Xq2";
    const id_3 = "cQ1S2d1FwCYEsnzzuXPsBtcr5PR2";

    const exploreHandler =  (id) =>{
        
         navigate(`/root/${id}`); 
        
    };

    

    return (
        <>
        <div className="sidebar-div">
            

            <div style={{textDecoration: 'none'}}>
                
                <button onClick={() => exploreHandler(id_1)} >Hüsamettin Solmaz</button>
                
            </div>
            <div style={{textDecoration: 'none'}}>
                
                <button onClick={() => exploreHandler(id_2)} >Aylin Koçyiğit</button>
                
            </div>
            <div style={{textDecoration: 'none'}}>
                
                <button onClick={() => exploreHandler(id_3)} >Eren Yılmaz</button>
                
            </div>
            
            
        </div>
            
        </>
    )
}

export default ExplorePage;
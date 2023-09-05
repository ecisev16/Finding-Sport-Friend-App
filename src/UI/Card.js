import './Card.css';

function Card(props){
    const classes = 'card ' + props.className;  {/* card'tan sonraki boşluk önemli! */ }
    
    return <div className = {classes}>{props.children}</div>;
    {/* children is a default name provided by react*/ }
    

}

export default Card;
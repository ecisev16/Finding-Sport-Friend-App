import React, { useState } from 'react';
import './SearchBar.css'

function SearchBar(props){
    const [enteredValue, setEnteredValue] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [enteredDate, setEnteredDate] = useState('');

    

    const inputSubmitHandler= event =>{
        event.preventDefault();
        
        const searchInput = {
            date: new Date(enteredDate),
            searchText: enteredValue
        }

        setEnteredValue('');
        setEnteredDate('');

        console.log(searchInput);

    }

    const inputChangeHandler = (identifier, value) => {
        if(identifier === "text"){
            setEnteredValue(value);
        }else{
            setEnteredDate(value);
        }
        
    };

    return(
        <>
            <form 
            className="form-control"
            onSubmit={inputSubmitHandler}
            >

                <input 
                    className = "form-control__input"
                    type="text" 
                    value= {enteredValue}
                    onChange={(event) => inputChangeHandler('text', event.target.value)}
                    
                />
                <input
                className = "form-control__date" 
                type = 'date' 
                min = "2019-01-01" 
                step = "2022-12-31" 
                value = {enteredDate} 
                onChange = {(event) => inputChangeHandler('date', event.target.value)}>
                </input>
                <button className="form-control__button" type="submit" >Ara</button>
            </form>
        </>)
            
        
        
}
export default SearchBar;
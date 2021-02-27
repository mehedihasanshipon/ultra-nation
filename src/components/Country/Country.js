import React from 'react';

const Country = (props) => {
    const flagStyle = {
        height : '50px'
    }
    const countryStyle = {
        border : '1px solid red',
        margin : '.8rem',
        padding : '.8rem'
    }
    // console.log(props.country);
    const {name,population,region,flag} = props.country;
    const handleAddCountry = props.handleAddCountry;
    return (
        <div style = {countryStyle}>
            <h1>This is  {name} </h1>
            <p>Population: {population} </p>
            <p>Region: {region} </p>
            <img style={flagStyle} src= {flag} alt=""/> <br/>
            <button onClick = {() => handleAddCountry(props.country)} >Add Country</button>
        </div>
    );
};

export default Country;
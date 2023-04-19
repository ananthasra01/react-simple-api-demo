import React ,{useState} from "react";

const Card = (props) => {
    const {name,capital,region,population,flags} = props.country;
    return (
        <>
            <div className="countryCard">
                <img src={flags.png} alt = "flag"  />
                <h2>Country Name : {name.common}</h2>
                <p>Region : {region}</p>
                <p>Capital :  {capital}</p>
                <p>Population : {population}</p>



            </div>
        </>
    )
}

export default Card;
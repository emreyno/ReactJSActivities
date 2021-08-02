import React from 'react';
import '../component-css/pokemons.css';

const Pokemon =({Name,Image,Type})=>{
    
        
        return(
            <tr className="poke-row">
                
                        
                            <td>
                                <div className="poke-name">
                                <p>{Name}</p>
                                </div>
                            </td>

                            <td>
                                <div className="img-container">
                                    <img className="pokemon-image" src={Image} alt={Name}/>
                                </div>
                            </td>

                            <td>
                                <div className="poke-type">
                                <p className={Type}>{Type}</p>
                                </div>
                            </td>
                   
               
            </tr>
        );
    
}

export default Pokemon;
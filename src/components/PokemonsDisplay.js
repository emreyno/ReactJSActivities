import { useState } from 'react';
import Pokemon from './Pokemon';
const PokemonsDisplay=()=>{

    const[filter,setFilter]=useState("All");

    const[pokemons,setPokemons]=useState([
        {
        id: "#001",
        name: "Bulbasaur",
        type: "Grass",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
        },
        {
        id: "#004",
        name: "Charmander",
        type: "Fire",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
        },
        {
        id: "#007",
        name: "Squirtle",
        type: "Water",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
        }
  ]);
  const[types,setTypes]=useState(["All","Grass","Fire","Water"]);
 

      
  

    if(filter==="All"){
        var display = pokemons.map(  pokemons => 
            <Pokemon key={pokemons.id} Name={pokemons.name} Image={pokemons.image} Type={pokemons.type}/>
            ) ;
    }
    else if(filter==="Water"){
         display = pokemons.filter(types=>types.type===filter).map(  pokemons => 
            <Pokemon key={pokemons.id} Name={pokemons.name} Image={pokemons.image} Type={pokemons.type}/>
            ) ;
    
        
          
    }
    else{
         display = pokemons.filter(types=>types.type===filter).map(  pokemons => 
            <Pokemon key={pokemons.id} Name={pokemons.name} Image={pokemons.image} Type={pokemons.type}/>
            ) ;
    }

    const btnOnclickFilter=(type)=>{
        console.log(type)
        setFilter(type);
    }
//   const display = pokemons.map(  pokemons => 
//         <Pokemon key={pokemons.id} Name={pokemons.name} Image={pokemons.image} Type={pokemons.type}/>
//         ) ;  
    
 
        return(
            <div>
                    <div className="buttons-con">
                    {types.map(type =><button className={`pokemon-btn ${type}`}onClick={() => btnOnclickFilter(type)}>{type}</button>)}
          
                    </div>
                    
              
                
                <table className="pokemon-table">
            <thead>
            <tr>
                <th >
                <div className="head-name">
                    <p className="head-text">Name</p>
                </div>
                  
                </th>
                <th >
                <div className="head-image">
                    <p className="head-text">Image</p>
                </div>
                  
                </th>
                <th >
                <div className="head-type">
                    <p className="head-text">Type</p>
                </div>
                  
                </th>
            </tr>
            </thead>
            <tbody>
                {display}
            </tbody>

            
          </table>
             
           
          </div>
        );
    
}

export default PokemonsDisplay;
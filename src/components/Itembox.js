
import '../component-css/resto.css';
const ItemBox = ({item,
    add,minus,
   
    editItem
}) =>{
   
   
   
    const decreaseOrder = () =>{
        
        minus(item);
       
        
    }
    const addOrder = () =>{
     
        add(item);
        
    }

    const editItems =() =>{
        editItem(item);
    }

    
        let {name,image,price} = item;
        return(
            <div className="container-flex">
                <div className="image-container">
                    <img className="image-icon" src={image} alt={name}/>
                </div>

                <div>
                    <strong>{name}</strong>
                    <p><small>Php {price}</small></p>
                    <p>
                    <input type="button" className="btn" value="+" 
                    onClick={addOrder}
                    ></input><input type="button" className="btn" value="-" 
                    onClick={decreaseOrder}
                    ></input></p>
                    <p>
                    <input type="button" className="btn" value="Edit"
                     onClick={editItems}
                     ></input></p>
                  
                </div>
            </div>

        );
    
}

export default ItemBox;
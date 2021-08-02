
import {useState} from 'react';
import '../component-css/resto.css';

    
const AddItem = ({addNewItem,setFilter}) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const   [errorMessage,setErrorMessage]=useState("")
    const newItem = (e) =>{
        if(category===""){
            setErrorMessage("Fill out all fields")
        }
        else if(price===0){
            setErrorMessage("Fill out all fields")
        }
        else if(image===""){
            setErrorMessage("Fill out all fields")
        }
        else if(name===""){
            setErrorMessage("Fill out all fields")
        }
        else{
            let newItem ={
                name:name,
                price:price,
                category:category,
                image:image
    
            }
            addNewItem(newItem);
           
        }
       
    }
    
     
    
        return(
            <div className="form-container">

                <h4>Add Item</h4>
               
                Name: <input 
                    className="item-input"
                    type="text" 
                    name="name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    autoComplete="off"
                   
                /><br/>
                Category:   <select className="input-select" name="degree" onChange={(e)=>setCategory(e.target.value)}>
                        <option value="Drink">Drink</option>
                        <option value="Food">Food</option>
                        
                    </select><br/>
                 Price: <input
                    className="item-input"
                    type="number"
                    name="price" 
                    value={price}
                    onChange={(e)=>setPrice(e.target.value)}
                    autoComplete="off"
                   
                /><br/>
                Image: <input
                    className="item-input"
                    type="text" 
                    name="image"
                    value={image}
                    onChange={(e)=>setImage(e.target.value)}
                    autoComplete="off"
                   
                /><br/>
                <button type="button"onClick={newItem}>Add New Item</button>
                
                <p className="centered-text">{errorMessage}</p>

               

            </div>

        )
    

}

export default AddItem;
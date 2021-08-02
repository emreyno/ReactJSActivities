
import '../component-css/resto.css';
import {useState,useEffect} from 'react';
const EditItemForms =({editItem,update,setEdit})=>{
    
     const [Name,setName] = useState(editItem.name);
     const [Category,setCategory] = useState(editItem.category);
     const [Price,setPrice] = useState(editItem.price);
     const [Image,setImage] = useState(editItem.image);
     useEffect(() =>{
        if(editItem){
        setName(editItem.name);
        setCategory(editItem.category);
        setPrice(editItem.price);
        setImage(editItem.image);
        }
    },[editItem]);
       
 
    const updateItem = () =>{
        let item = {
            id: editItem.id,
            name:Name,
            category:Category,
            price:Price,
            image:Image,

        }
        setEdit(false);
        update(item);
        console.log("Item")
    console.log(item)
   
        
        
      
    }
    console.log("editItem")
    console.log(editItem)
   

 
        return(
            <div className="form-container">

                <h4>UPDATE ITEM</h4>
               
                Name: <input 
                    className="item-input"
                    type="text" 
                    name="name"
                    autoComplete="off"
                    value={Name}
                    placeholder={editItem.name}
                    
                    onChange={(e)=>setName(e.target.value)}

                   
                   
                ></input><br/>
                Category:   <select className="input-select" name="degree" onChange={(e)=>setCategory(e.target.value)}>
                        <option value="Drink">Drink</option>
                        <option value="Food">Food</option>
                        
                    </select><br/>
                 Price: <input
                    className="item-input"
                    type="number"
                    name="price" 
                    value={Price}
                    placeholder={editItem.price}
                    onChange={(e)=>setPrice(e.target.value)}
              
                    autoComplete="off"
                   
                ></input><br/>
                Image: <input
                    className="item-input"
                    type="text" 
                    name="image"
                    value={Image}
                    placeholder={editItem.image}
                    onChange={(e)=>setImage(e.target.value)}
                   
                    autoComplete="off"
                   
                ></input><br/>
                <button type="button" onClick={updateItem}>Update</button>
                


               

            </div>

        );
    

}

export default EditItemForms;
import './App.css';
import TaskDisplay from './components/TaskDisplay';
import PokemonsDisplay from './components/PokemonsDisplay';
import RestoApp from './components/RestoApp';
import { Route, Link } from 'react-router-dom';
import { useState } from 'react';
function App() {
  const [items,setItems]=useState([
    {
        id: 1,
        name: "Burger", 
        price: 50, 
        category: "Food",
        status: 'active',
        image: "https://image.flaticon.com/icons/svg/1046/1046784.svg"
    },
    {
      id: 2,
        name: "Pizza", 
        price: 100, 
        category: "Food",
        status: 'active',
        image: "https://image.flaticon.com/icons/svg/1046/1046771.svg"
    },
    {
        id: 3,
        name: "Fries", 
        price: 25, 
        category: "Food",
        status: 'active',
        image: "https://image.flaticon.com/icons/svg/1046/1046786.svg"
    },
    {
        id: 4,
        name: "Coffee", 
        price: 35, 
        category: "Drink",
        status: 'active',
        image: "https://image.flaticon.com/icons/svg/1046/1046785.svg"
    },
    {
      id: 5,
        name: "Iced Tea",
        price: 45,
        category: "Drink",
        status: 'active',
        image: "https://image.flaticon.com/icons/svg/1046/1046782.svg"
    }, 
    {
      id: 6,
      name: "Hot Tea",
      price: 45,
      category: "Drink",
      status: 'active',
      image: "https://image.flaticon.com/icons/svg/1046/1046792.svg"
    }
  ]);
  const [cart,setCart] = useState([ ]); 
  const [editItem,setEditItem] = useState([]);


    const  addItem=(orderItem)=>{
      let cartCopy = [...cart];
      let index = cartCopy.findIndex(cartItem=>cartItem.id===orderItem.id);

      if(index===-1){
          orderItem.quantity=1;
          cartCopy.push(orderItem);
          console.log("add");
      }
      else{
          cartCopy[index].quantity++;
          console.log("increase");
      }
          setCart(cartCopy);
     }

  const  decreaseItem=(orderItem)=>{

      let cartCopy = [...cart];
      let index = cartCopy.findIndex(cartItem=>cartItem.id===orderItem.id);
      console.log(index);
      if(index>=0){
      if(cartCopy[index].quantity===1){
          cartCopy = cartCopy.filter(i => i.id !== orderItem.id)
          setCart(cartCopy);
          console.log("remove");
      }
      else if(cartCopy[index].quantity>1){
          cartCopy[index].quantity--;
          setCart(cartCopy);
          console.log("decrease");
      }
      
      }
      else{
          alert("Item Doesn't exist");
      }
  
  }
  const addNewItem=(newItem)=>{
    newItem.id=items.length + 1;
    let itemsCopy = [...items];
    itemsCopy.push(newItem);

    alert("New Item Added")
    console.log(newItem);
        setItems(itemsCopy);
}
  const update = (item)=>{
      console.log(item)
      alert("Item Updated")
      let updateCopy = [...items];
      
      let index = updateCopy.findIndex(i=>i.id===item.id);

      updateCopy[index]= item;
      // updateCopy[index].price = item.price;
      // updateCopy[index].category = item.category;
      // updateCopy[index].image = item.image;

       
          setItems(updateCopy);
     

      
  }

  return (
    <div className="App">

      <div className="header">
            <ul className="ul-header">
            <Link className="app-link" to="/TaskApp"><li className="li-header">Task App</li></Link>
            <Link className="app-link" to="/Pokemon"><li className="li-header">Pokemon App</li></Link>
            <Link className="app-link" to="/RestoApp"><li className="li-header">Resto App</li></Link>
            </ul>

      </div>

      <div className="functionDisplay">
        <Route path="/TaskApp" >
          <TaskDisplay/>
        </Route>

        <Route path="/Pokemon" >
          <PokemonsDisplay/>
        </Route>

        <Route path="/RestoApp" >
          <RestoApp 
          items={items} 
          setEditItem={setEditItem} 
          addItem={addItem}
          decreaseItem={decreaseItem}
          cart={cart}
          editItem={editItem}
          update={update}
          addNewItem={addNewItem}
          />
        </Route>
      </div>
      

    </div>
  );
}

export default App;


import Itembox from './Itembox';
import '../component-css/resto.css';

import Cart from './Cart';
import EditItemForms from './EditItemForms';

import { useState } from 'react';
import AddItem from './AddItem';
const RestoApp = ({items,setEditItem,addItem,decreaseItem,cart,editItem,update,addNewItem}) =>{
    
    const [filter,setFilter] = useState('All');
    
    const [edit,setEdit] = useState(false);
    
 

    
   

    const changeDisplay = (category) =>{
        setFilter(category);
        console.log(category)
    }
    
    //1) create a function in parent
    //2)pass that function as props to the child
    //3) invoke the function in child


   

    const editItems = (item) =>{

        setEdit(true);
        setEditItem(item);
       
        
    }
    
    
        const data = filter==='All'?
        items    :
        items.filter(item => item.category === filter);
        
       const itemsDisplay = data.map(item=>
         <  Itembox 
            key={item.id} 
            item={item}
            add={addItem}
            minus={decreaseItem}
            editItem={editItems}
         />
        );
        
       const cartDisplay = cart.map(cart=>
        <  Cart 
           key={cart.id} 
           Cart={cart}  
        />
       )
    //     let data = this.state.items.map(  items => 
    //         <ItemBox 
    //             key={items.id} 
    //             item={items}/>
    //   )
        return(

            <div className="wrapper" >
                <div className="Restobody-con">
                    <div className="left-content">
                        {edit?<EditItemForms editItem={editItem} update={update} setEdit={setEdit}/>:<AddItem addNewItem={addNewItem} />}
                    
                    
                    </div> 
                    
                    <div className="center-content">
                            
                        <div className="Top-header">
                        <h1 >RESTAURANT APP</h1>
                        </div>

                        <div className="btn-container">
                            <button className="btn-filter"onClick={()=>changeDisplay('All')}>All</button>
                            <button  className="btn-filter"onClick={()=>changeDisplay('Food')}>Food</button>
                            <button  className="btn-filter"onClick={()=>changeDisplay('Drink')}>Drink</button>
                        </div>

                        <div className="flex-row">
                            
                            {itemsDisplay}
                            
                        </div>
                        
                        {/* <div className="add-container">
                        <EditItemForms editItem={this.state.items} update={this.update}/> */}
                        

                            {/* {
                            this.state.edit?<EditItemForms editItem={editItem} update={update}/>:  <AddItem addItem={addItem}/>

                            } */}
                            {/* 

                            <AddItem addItem={this.addItem}/>
                        
                        </div>*/}

                    </div>

                    <div className="right-content">
                        {cartDisplay}
                    </div> 
                </div>

            </div>

        );
    
}

export default RestoApp;
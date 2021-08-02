
import '../component-css/resto.css';
const Cart =({Cart})=>{
  
        
        return(
            
            <div>
           
           <div className="image-container">
                    <img className="order-icon" src={Cart.image} alt={Cart.name}/>
                    <strong>{Cart.quantity}</strong>
                </div>

                <div>
                    
                    {/* <p><small>Php {this.props.item.price}</small></p>
                    <p><button className="btn" onClick={()=>this.alertName(this.props.item.name)}>Order</button></p> */}
                </div>
            
            </div>
        );
    
}

export default Cart;

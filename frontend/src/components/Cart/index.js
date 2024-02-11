import { useEffect } from "react";
import { useSelector ,useDispatch} from "react-redux";
import { checkout, getCartItems, resetCart } from "../../store/cart";
import { fetchProducts } from "../../store/products";
import CartIndexItem from "./cartIndexItem";
import Navbar from "../Navbar";


export default function Cart(){
    let currentUser = useSelector(state => state.session.user)

    const cart = useSelector(state => Object.values(state.cart))
    const products = useSelector(state => state.products)

    // const cartItem = Object.values(products).filter((product)=> productId === product.id)
    

    const dispatch = useDispatch()




    useEffect(()=>{
        dispatch(getCartItems(currentUser?.id))
        dispatch(fetchProducts())
    },[currentUser.cart])

    if(!products){
        return null
    }

    let quant = 0 
    let price = 0 
    if(currentUser && cart.length){
        cart.forEach((item)=>{
            quant += item.quantity
            price += products[item.productId].itemPrice * item.quantity
        });
    };

    const handleCheckout = () => {
        dispatch(resetCart())
        dispatch(checkout(currentUser?.id))
    }

    

    // console.log(allCartItems)
    // console.log(productInfo)
    
    if (cart && Object.keys(cart).length) {

    return(
        <>
    
        <Navbar/>
    
        <h1 className="shoppingCartHeader">Shopping Cart</h1>
        <div className="cartPageBreak"/>
        <div className="cartPageContainer">
                <div className="cartIndexContainer">
                    {Object.values(cart).map((item)=> <CartIndexItem key={item.productId} products={products} cartItemId={item.id} quantity={item.quantity} productId={item.productId}/>)}
                </div>

                <div className="checkoutArea">
                            <p className="checkoutAreaSubtotal">Subtotal ({quant})items: ${price}.00</p> 
                        
                            <button className="checkoutButton" onClick={handleCheckout}>Checkout</button>
                            
                </div>

            
        </div>

        <div className="subTotalArea">
            <p className="checkoutAreaSubtotal">Subtotal ({quant})items ${price}.00</p>

            {/* <p className="checkoutAreaItems">({quant})items</p>
            
            <p className="checkoutAreaPrice">${price}.00</p> */}
        </div>

    </>
    )} else {
        return (
            <>
                   <Navbar/>
                
                    <h1 className="shoppingCartHeader">Shopping Cart</h1>
                    <div className="cartPageBreak"/>
                    <div className="cartPageContainer">
                            <div className="cartEmpty">
                                Your TheoZon Cart is Empty! 
                            </div>

                            <div className="emptyCheckoutArea">
                                        <p className="checkoutAreaSubtotal">Subtotal ({quant})items: ${price}.00</p> 
                                    
                                        <button className="checkoutButton" onClick={handleCheckout}>Checkout</button>
                                        
                            </div>

                        
                    </div>

                  
            </>

            
        )
    }
}
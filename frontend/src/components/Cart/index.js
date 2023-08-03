import { useEffect } from "react";
import { useSelector ,useDispatch} from "react-redux";
import { getCartItems } from "../../store/cart";
import { fetchProducts } from "../../store/products";
import CartIndexItem from "./cartIndexItem";
import Navbar from "../Navbar";


export default function Cart(){
    let currentUser = useSelector(state => state.session.user)

    const cart = useSelector(state => state.cart)
    const products = useSelector(state => state.products)

    // const cartItem = Object.values(products).filter((product)=> productId === product.id)

    

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getCartItems(currentUser?.id))
        dispatch(fetchProducts())
    },[currentUser?.cart])

    if(!products){
        return null
    }
    const handleCheckout = () => {
        
    }

    

    // console.log(allCartItems)
    // console.log(productInfo)
    // debugger
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
                            <p className="checkoutAreaSubtotal">Subtotal </p>
                            <p className="checkoutAreaItems">{} items</p>
                            <p className="checkoutAreaPrice">price</p>
                            <button className="checkoutButton">Checkout</button>
                            
                </div>

            
        </div>

        <div className="subTotalArea">
            <p className="checkoutAreaSubtotal">Subtotal </p>
            <p className="checkoutAreaItems">{} items</p>
            <p className="checkoutAreaPrice">price</p>
        </div>

    </>
    )
    } else {
        return (
            <>
               <Navbar/>
            
                <h1 className="shoppingCartHeader">Shopping Cart</h1>

                <div className="cartPageBreak"/>

                <div className="cartPageContainer">
                    <div className="cartIndexContainer">
                        <h1 className="cartEmpty"> Your TheoZon Cart is empty. </h1>
                    </div>

                        <div className="checkoutArea">
                                    <h1>Hello from checkout area</h1>
                                    
                        </div>
                </div>
            </>

            
        )
    }
}
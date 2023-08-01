import { useEffect } from "react";
import { useSelector ,useDispatch} from "react-redux";
import { getCartItems } from "../../store/cart";


export default function Cart(){
    let currentUser = useSelector(state => state.session.user)

    const cart = useSelector(state => state.cart)
    const products = useSelector(state => state.products)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getCartItems(currentUser.id))
    },[])

    if(currentUser){
        return(
            <>
            {/* <h1>CART</h1> */}
            <i className="fa-solid fa-cart-shopping fa-xl" style={{color: "#ffffff"}}></i>
            {/* <p>{Object.values(cart).map((item) => {return products[item.productId]?.name})}</p> */}
            </>
        )
    } else{
        return(
            <>
                {/* <h1>CART</h1> */}
                <i className="fa-solid fa-cart-shopping fa-xl" style={{color: "#ffffff"}}></i>
            </>
        )
    }
}
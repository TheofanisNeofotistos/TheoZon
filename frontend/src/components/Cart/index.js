import { useSelector } from "react-redux";

export default function Cart(){
    let currentUser = useSelector(state => state.session.user)

    const cart = useSelector(state => state.cart)
    const products = useSelector(state => state.products)

    if(currentUser){
        return(
            <>
            <h1>CART</h1>
            <p>{Object.values(cart).map((item) => {return products[item.productId]?.name})}</p>
            </>
        )
    } else{
        return(
            <>
                <h1>CART</h1>
            </>
        )
    }
}
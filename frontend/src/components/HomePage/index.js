import Cart from "../Cart";
import Navbar from "../Navbar";
import ProductsIndex from "../ProductsIndex";

function HomePage(){
    return(
        <>
            <Navbar/>
            <ProductsIndex/>
            <Cart/>
        </>
    )
}

export default HomePage
import "./navbar.css" 
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { logout } from "../../store/session";
import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


function DropDown () {
        const [show, setShow] = useState(false);
        const currentUser = useSelector(state=>state.session.user);
        
        const dispatch = useDispatch();
        const history = useHistory();

        
        const handleLogOut = () => {
            dispatch(logout()).then(() => history.push("/login"))
        };
        
        const header = currentUser ? ` Hello ${currentUser.username}` : "Hello,sign in";


        return (
            <div className="dropDownMenu" onMouseEnter={()=> setShow(true)}
                onMouseLeave={() => setShow(false)}>
                {header}
                {show && !currentUser && (
                   <div className="dropdownLogin">
                        <Link className="dropdownLoginButton" to="/login">Log in</Link>
                   </div>
                )} 
                {show && currentUser && (
                    <div className="dropdownLogout">
                        <button className="dropdownlogoutButton" onClick={handleLogOut}>Log Out!</button>
                    </div>
                )}
            </div>
        );


    }

function Navbar () {

    return (
        <>
        
            <div className="navbar">
                <Link to="/"><img className="splashLogo" src="/TheoZonLogo1.png" alt="TheoZon"></img></Link>

                <span className="searchBarContainer">
                    <input className="searchBar" type="text" placeholder="    Search TheoZon"></input>
                    <button className="searchButton"/>
                    < a href="https://www.linkedin.com/in/theofanis-neofotistos-483b33254/" class="fa-brands fa-linkedin" style={{color: "#FEBD68",}}> </a>
                    < a href="https://github.com/TheofanisNeofotistos" class="fa-brands fa-github" style={{color: "#febd68",}}> </a>
                    <i className="fa-solid fa-magnifying-glass" style={{color: "",}}></i>
                </span>

            
                <DropDown />
                
                
            </div>
     
        </>
    )
}

export default Navbar


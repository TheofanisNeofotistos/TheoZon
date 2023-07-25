import "./navbar.css" 
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { logout } from "../../store/session";

function Navbar (){

    const history = useHistory();

    const dispatch = useDispatch()

    const handleLogOut = () => {
      dispatch(logout()).then(() => history.push("/login"))
    }
    return(
        <>
            <div className="navbar">
                <img className="splashLogo" src="./TheoZonLogo1.png" alt="TheoZon"></img>

                <span className="searchBarContainer">
                    <input className="searchBar" type="text" placeholder="    Search TheoZon"></input>
                    <button className="searchButton"/>
                    < a href="https://www.linkedin.com/in/theofanis-neofotistos-483b33254/" class="fa-brands fa-linkedin" style={{color: "#FEBD68",}}/>
                    < i href="https://github.com/TheofanisNeofotistos" class="fa-brands fa-github" style={{color: "#febd68",}}/>
                    <i class="fa-solid fa-magnifying-glass" style={{color: "",}}></i>
                </span>

                <div>
                    <button className="logoutButton" onClick={handleLogOut}>Log Out!</button>
                </div>
                
            </div>





            
        </>
    )
}

export default Navbar
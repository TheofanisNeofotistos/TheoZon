import "./navbar.css" 

function Navbar (){
    return(
        <>
            <div className="navbar">
                <img className="splashLogo" src="./TheoZonLogo1.png" alt="TheoZon"></img>

                <span className="searchBarContainer">
                    <input className="searchBar" type="text"></input>
                    <button className="searchButton"/>
                    <i class="fa-brands fa-linkedin" style={{color: "#FEBD68",}}></i>
                    <i class="fa-brands fa-github" style={{color: "#febd68",}}></i>
                    <i class="fa-solid fa-magnifying-glass" style={{color: "#ffffff",}}></i>
                </span>
                
            </div>





            
        </>
    )
}

export default Navbar
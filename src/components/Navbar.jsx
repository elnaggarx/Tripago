import React,{useState} from "react";
import "./NavbarStyles.css";
import MenuItem from "./MenuItem.jsx";
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';
function Navbar(){
    const [menuIconFlag , setMenuIconFlag] = useState(false);
    function handleMenuIconClick(){
        setMenuIconFlag(!menuIconFlag);
    }
    return <div>
    <nav className="nav-bar">
        <h1 className="nav-bar-logo">Tripago</h1>
        <button onClick={handleMenuIconClick} className="menu-close-button">{menuIconFlag ?<CancelIcon></CancelIcon>:<MenuIcon></MenuIcon> }</button>
        <ul className={menuIconFlag ? "show-list":"hide-list"}>
           {MenuItem.map((item)=><li className="nav-links"><a href={item.url} className={item.cName}>{item.title} </a></li>)}
           
        </ul>

    </nav>
    </div>;
}
export default Navbar;
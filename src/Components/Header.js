import Navbar from "./Navbar"
import { TbLogout2 } from "react-icons/tb";
import { GiBookAura } from "react-icons/gi";
import { Link} from 'react-router-dom';

const Header = () => {

    let loginJson = localStorage.getItem("LoginJSON");
    let LoginJSON = JSON.parse(loginJson);

    const handleLogOut = () => {
        localStorage.setItem("OrderbookRecords", null);
        localStorage.setItem("LoginJSON", null);
        alert("Logout Successfully.");
    }

    return (
        <div className='table-wrapper'>
        <div className="Navbar-Section">
        <div className='width-adjust'>
            <div className='logo-adjust'>
                <span className="icon-adjustment book-icon"><GiBookAura /></span>
                <h2 className='header'>{LoginJSON.loginId}'s Orderbook</h2>
            </div>
            <div><Navbar /></div>
            <Link to="/" className="icon-adjustment search-icon" onClick={handleLogOut}><TbLogout2 />LogOut</Link>
        </div>
    </div>
    </div>
    )

}

export default Header
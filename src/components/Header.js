import { LOGO_URL } from "../utils/contants";
const Header = () => {
    return (
      <div className="Header">
        <div className="logo">
          <img src={LOGO_URL}/>
        </div>
        <div className="nav">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>  
            <li>Card</li>
          </ul>
        </div>
      </div>
    );
  };
  export default Header; 
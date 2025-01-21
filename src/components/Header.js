import { LOGO_URL } from "../utils/contants";
import { useState } from "react";
const Header = () => {
  let btnName ="Login";
   const  [btnNameReact ,setbtnNameReact]=useState(btnName); 
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
            <button className="Login"
             onClick={()=>{
              btnNameReact==="Login"
              ?setbtnNameReact("Logout")
              :setbtnNameReact("Login");
            }}>
              {btnNameReact}
            </button>
          </ul>
        </div>
      </div> 
    );
  };
  export default Header; 
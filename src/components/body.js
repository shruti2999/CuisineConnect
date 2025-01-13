import RestaurantCard from "./RestaurantCart";
import {useState} from "react";
import resList from "../utils/mockData";

const Body = () => {
  const [ListOfRestro ,setListOfRestro]=useState(resList);
    return (
      <div className="body">
        <div className="filter">
         <button
          className="filter-btn"
          onClick={()=>{
          const filterList = ListOfRestro.filter(
            (res)=>res.data.avgRating>=4
          );
          setListOfRestro(filterList);
           }}
          >
            top 
          </button>
        </div>
        <div className="res-container">  
          {ListOfRestro.map((restaurant)=>(
            <RestaurantCard key ={restaurant.data.id} resData={restaurant}/>
          ))}
        </div>
      </div> 
    );
  };

  export default Body;
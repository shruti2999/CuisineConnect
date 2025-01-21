import RestaurantCard from "./RestaurantCart";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import Shimmer from "./shimmer";

const Body = () => {
   const [listOfRestaurants, setListOfRestaurants] = useState(resList);
   const [SearchText,setSearchText] =  useState("");
  // useEffect(() => {
  //   fetchData();
  // }, []);

  
// Conditional Rendering 
  
  return listOfRestaurants.length === 0 ?(
  <Shimmer/> 
   ):(
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value ={SearchText}onChange={(e)=>{
            setSearchText(e.target.value)
          }}/>
          <button onClick={()=>{
            
          }}>search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            ); 
            setListOfRestaurants(filterList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div> 
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
        ))}
      </div>
    </div>
  );
};

export default Body;

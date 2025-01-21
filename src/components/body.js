import RestaurantCard from "./RestaurantCart";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import Shimmer from "./shimmer";

const Body = () => {
   const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940499&lng=85.1376051&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json(); 

    console.log(json);
    setListOfRestaurants(json?.data?.cards);
  };
// Conditional Rendering 
  
  return listOfRestaurants.length === 0 ?(
  <Shimmer/> 
   ):(
    <div className="body">
      <div className="filter">
        <div className="serach">
          <input type="text" className="serach-box"/>
          <button>search</button>
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

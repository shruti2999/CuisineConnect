import RestaurantCard from "./RestaurantCart";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import shimmer  from "./shimmer";

const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState(resList);

  useEffect(() => {
    fetchData();
  }, []);

  /*const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940499&lng=85.1376051&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"  
      );
    const json = await data.json();
 
   console.log(json);
  setListOfRestaurants(json?.data?.cards);
  };*/
  if (ListOfRestaurants.length === 0){
    return <shimmer/>;
  }
  return ( 
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = ListOfRestaurants.filter(
              (res) => res.data.avgRating >= 4
            );
            setListOfRestaurants(filterList);
          }}
        >
          top restro
        </button>
      </div>
      <div className="res-container">
        {ListOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

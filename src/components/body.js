import RestaurantCard from "./RestaurantCart";
import {useEffect, useState} from "react";
import resList from "../utils/mockData";

const Body = () => {
  const [ListOfRestro ,setListOfRestro]=useState(resList);

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async()=>{
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log(json);
  };

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
          top restro 
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
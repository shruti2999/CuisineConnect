import { CDN_URL } from "../utils/contants";
const RestaurantCard = (props) => {
    const { resData } = props;
    const{
      name,
      cuisines,
      avgRating,
      costForTwo,
      deliveryTime,
    }=resData?.data;
    return (
      <div className="res-card">
        {/* <h3>{resData.info.name}</h3> */}
        <img className="food_a"
        alt="res-logo"
        src={CDN_URL+ 
        resData.data.cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime}</h4>
  
      </div>
    );
  };
  
  
  export default RestaurantCard;
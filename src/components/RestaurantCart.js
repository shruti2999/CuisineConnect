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
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ 
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
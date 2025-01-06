import React from "react";
import ReactDOM from "react-dom/client";
//layout
//logo
//nav
//body
//search
//card
//footer
//copyright
//links

const Header = () => {
  return (
    <div className="Header">
      <div className="logo">
        <img src="../images/images.png" />
      </div>
      <div className="nav">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contct</li>
          <li>Card</li>
        </ul>
      </div>
    </div>
  );
};

const Card = (props) => {
  const {resData}=props 
  return ( 
    <div className="res-card">
      <h3>{resData.info.name}</h3>
      <img  className="food_a" src ="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400"/>
      <p>{resData.info.areaName}</p>
      <h4>{resData.info.cuisines}</h4>
      <h4>{resData.info.time}</h4>
    </div>
  );
};
const resobj={
                    "info": {
                      "id": "10576",
                      "name": "Pizza Hut",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/87e56c63-b521-4257-96ae-a42229b92009_10576.jpg",
                      "locality": "6th Block",
                      "areaName": "Koramangala",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Pizzas"
                      ],
                      "avgRating": 4.2,
                      "parentId": "721",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "21K+",
                      "sla": {
                        "deliveryTime": 28,
                        "lastMileTravel": 0.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "0.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-07 04:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹300 OFF",
                        "subHeader": "ABOVE ₹1699",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.6",
                          "ratingCount": "3.2K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-1e1a226f-9ddd-4daf-9cb5-18b890bb98f1"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/pizza-hut-6th-block-koramangala-rest10576",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "5934",
                      "name": "Burger King",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/7f76a072-c1bc-4d74-ac56-33e0eea20c1e_5934.JPG",
                      "locality": "Koramangala",
                      "areaName": "Koramangala",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Burgers",
                        "American"
                      ],
                      "avgRating": 4.3,
                      "parentId": "166",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "100K+",
                      "sla": {
                        "deliveryTime": 26,
                        "lastMileTravel": 1.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "1.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-07 06:55:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "Rxawards/_CATEGORY-Burger.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹120"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.2",
                          "ratingCount": "4.0K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-1e1a226f-9ddd-4daf-9cb5-18b890bb98f1"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/burger-king-koramangala-rest5934",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "676",
                      "name": "Chai Point",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/19/90be450a-78a5-47e7-a689-894c351d64fc_676.jpg",
                      "locality": "Koramangala",
                      "areaName": "Koramangala",
                      "costForTwo": "₹150 for two",
                      "cuisines": [
                        "Bakery",
                        "Beverages",
                        "Maharashtrian",
                        "Snacks",
                        "Street Food",
                        "South Indian",
                        "Punjabi",
                        "Chaat",
                        "Indian",
                        "American"
                      ],
                      "avgRating": 4.4,
                      "parentId": "1607",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "45K+",
                      "sla": {
                        "deliveryTime": 31,
                        "lastMileTravel": 1.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "1.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-06 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.4",
                          "ratingCount": "104"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-1e1a226f-9ddd-4daf-9cb5-18b890bb98f1"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/chai-point-koramangala-rest676",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "27811",
                      "name": "Natural Ice Cream",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/3/da275b37-744c-464f-9c92-2104f4c92e05_27811.JPG",
                      "locality": "Koramangala",
                      "areaName": "Koramangala",
                      "costForTwo": "₹150 for two",
                      "cuisines": [
                        "Ice Cream",
                        "Desserts"
                      ],
                      "avgRating": 4.8,
                      "parentId": "2093",
                      "avgRatingString": "4.8",
                      "totalRatingsString": "19K+",
                      "sla": {
                        "deliveryTime": 19,
                        "lastMileTravel": 1.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "15-20 mins",
                        "lastMileTravelString": "1.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-07 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "30% OFF",
                        "subHeader": "UPTO ₹75"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.5",
                          "ratingCount": "4.8K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-1e1a226f-9ddd-4daf-9cb5-18b890bb98f1"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/natural-ice-cream-koramangala-rest27811",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "186101",
                      "name": "The Biryani Life",
                      "cloudinaryImageId": "ggd0zsrhjn6bija7olci",
                      "locality": "Jakkasandra",
                      "areaName": "Hsr Layout 5th Sector",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Biryani",
                        "Mughlai",
                        "Lucknowi",
                        "Hyderabadi",
                        "Kebabs",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 3.8,
                      "parentId": "8496",
                      "avgRatingString": "3.8",
                      "totalRatingsString": "939",
                      "sla": {
                        "deliveryTime": 28,
                        "lastMileTravel": 2.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "2.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-06 23:59:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹49"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-1e1a226f-9ddd-4daf-9cb5-18b890bb98f1"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/the-biryani-life-jakkasandra-hsr-layout-5th-sector-rest186101",
                      "type": "WEBLINK"
                    }
                  }
                };

    

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search where"></input>
        search
      </div>
      <div className="res-container">
        <Card resData={resobj}/>
       </div> 
    </div>
  );
};

const AppLayout = () => {
  return ( 
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

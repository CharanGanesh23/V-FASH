import React from "react";
import "./Card.scss"; 
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Card=({item})=>{

  const navigate=useNavigate();
  const _id=item._id;
  
  const handleDetails=()=>{
    navigate(`/productt/${_id}`,{
      state:{data:item,}
    
    },)
  }

    return(
        //<Link className="link" to={`/productt/${item.id}`}>

<div className="card" onClick={handleDetails}>
        <div className="image">
          {item.isNew && <span>New</span>}
          <img
            src={ item.img }
            alt=""
            className="mainImg"
          />
          <img
            src={ item.img2
            }
            alt=""
            className="secondImg"
          />
        </div>
        <h2>{item.title}</h2>
        <div className="prices">
          <h3>₹{item.oldPrice}</h3>
          <h3>₹{item.price}</h3>
        </div>

        
      </div>



         
        
        //</Link>
    );


};

export default Card;
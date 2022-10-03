import React from "react";
import star from "../Images/Star.png";
import "../Css/Products.css";
import { useContext } from "react";
import { CountContext } from "../App";
import {useSelector, useDispatch} from 'react-redux';
import {inNum} from '../actions/index';

function Products() {
  
  const dispatch=useDispatch();
  let arr = [1, 2, 3, 4, 5];
  const userResponse = [];
  const [allResponses, setAllResponses] = React.useState([]);
  const [stopInfiniteLoop, setStopInfiniteLoop] = React.useState(false);

  // Getting all the responses
  if (!stopInfiniteLoop) {
    fetch(
      "https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        for (const dataItem in data) {
          console.log(data[dataItem].userName, data[dataItem].userMessage);
          userResponse.push({
            img: data[dataItem].productImage,
            newPrice: data[dataItem].newPrice,
            oldPrice: data[dataItem].oldPrice,
            itemName: data[dataItem].productName,
          });
        }
        setAllResponses(userResponse);
        // setUserResponse(data);
      });
    setStopInfiniteLoop(true);
  }

  return (
    
    <>
      {allResponses &&
        allResponses.map((item) => {
          return (
            <div className="main-box">
              <div className="mainimg">
                <img src={item.img} />
              </div>
              <div>
                <p>{item.itemName}</p>
              </div>
              <div className="start-price">
                <div>
                  {arr.map((data) => (
                    <img src={star} />
                  ))}
                </div>
                <div className="price">
                  <p>{item.oldPrice}</p>
                  <p>{item.newPrice}</p>
                </div>
              </div>
              <div className="button">
                <button onClick={()=>dispatch(inNum())}>ADD TO CART</button>
              </div>
            </div>
          );
        })}
      {/* <div className="main-box">
        <div>
          <img src={phone} />
        </div>
        <div>
          <p>Apple iPhone 13 (128GB) - Blue</p>
        </div>
        <div className="start-price">
          <div>
            {arr.map((data) => (
              <img src={star} />
            ))}
          </div>
          <div className="price">
            <p>59999/-</p>
            <p>47999/-</p>
          </div>
        </div>
        <div className="button">
          <button>ADD TO CART</button>
        </div>
      </div> */}
    </>
    
  );
}

export default Products;

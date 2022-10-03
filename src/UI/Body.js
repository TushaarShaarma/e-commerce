import React from "react";
import Products from "../Components/Products";
import container from "../Images/Container-fluid.png";
import "../Css/Body.css";
function Body() {
  let arr= [1,2,3,4]
  return (
    <>
      <div className="image-cont">
      <div className="image">
        <img src={container} />
      </div>
      </div>
      <div className="image-cont">
      <div className="title">
        <h3>Products</h3>
      </div>
      </div>

     <div style={{paddingLeft:'50px'}}>
     <div className="products">
        <div className="productss">
        <Products />
        {/* {arr.map((data)=>(
          <Products />
        ))} */}
        </div>
      </div>
     </div>
    </>
  );
}

export default Body;

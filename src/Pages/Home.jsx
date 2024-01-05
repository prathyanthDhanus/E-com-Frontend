import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import CommonButton from "../Components/CommonButton";
import "../Styles/Home.css";
import axios from "axios";
import baseURL from "../Api/api";

const Home = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseURL}/admin/get/products`);
        const data = response.data.data;
        setProductData(data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="home-maindiv">
      {" "}
      {/*-----------------parent div*/}
      <div className="sidebar">      {/* Sidebar container */}
      <div className="sidebar-header">
      <div className="home-txt">Home</div>
      <div   className="toggle-icon">
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      
      >
      <path
      d="M8.95019 4.08L15.4702 10.6C16.2402 11.37 16.2402 12.63 15.4702 13.4L8.9502 19.92"
      stroke="#292D32"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
      />
      </svg>
      </div>
      </div>
      </div>
      <div className="content-container">
        <div className="button-container"> {/*-----------------button main div*/}
          <div>
            <CommonButton label="Add category" />
          </div>
          <div>
            <CommonButton label="Add sub category" />
          </div>
          <div>
          
            <CommonButton label="Add product" />
          </div>
        </div> {/*----------------end button main div*/}
        <div className="card-container"> {/*-----------------card div*/}
          {productData.length > 0 ? (
            productData.map((product) => (
              <Card key={product.id} title={product.title} price={product.price} />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;

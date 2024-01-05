  import React, { useEffect, useState } from 'react';
  import Card from '../Components/Card';
  import CommonButton from '../Components/CommonButton';
  import "../Styles/Home.css"
  import axios from 'axios';
  import baseURL from '../Api/api';

  const Home = () => {

    const[productData,setProductData] = useState([]);

    useEffect(()=>{
  const fetchData = async()=>{
    try{
      const response = await axios.get(`${baseURL}/admin/get/products`)
      const data = response.data.data;
      console.log(data);
      setProductData(data)
      console.log("pro",productData);
    }catch(error){
      console.log("Error",error);
    }
  }
  fetchData();
    },[])


    return (
    
    
      <div className='home-maindiv'> {/*-----------------parent div*/}
      <div className="sidebar"> {/* Sidebar container */}
      <h6>Home</h6>
      </div>

      <div className='content-container'>
      <div className='button-container' > {/*-----------------button main div*/}
      
      <div ><CommonButton label="Add category"  /></div>
      <div ><CommonButton label="Add sub category"  /></div>
      <div  > <CommonButton label="Add product" /></div>
      </div>                              {/*----------------end button main div*/}
      
      <div className='card-container'>       {/*-----------------card div*/}
      {productData.map((product) => (
        <Card key={product._id} title={product.title} price={product.price} content={product.content} />
        ))}
        </div>
        
        </div>
        </div>
        )
      }
      
      export default Home
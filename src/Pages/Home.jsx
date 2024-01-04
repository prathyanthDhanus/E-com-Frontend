import React from 'react';
import Card from '../Components/Card';
import CommonButton from '../Components/CommonButton';
import "../Styles/Home.css"

const Home = () => {
  return (
    <div >


    <div className='home-buttondiv' style={{backgroundColor:"orange"}}><CommonButton label="Add category" className={`custom-button-class`} /></div>
    <div className='home-buttondiv' style={{backgroundColor:"red"}}><CommonButton label="Add sub category" className={`custom-button-class`} /></div>
    <div className='home-buttondiv' style={{backgroundColor:"blue"}}> <CommonButton label="Add product" className={`custom-button-class`} /></div>
   
    <Card title="Card Title" price={2} content="This is the content of the card." />
    </div>
  )
}

export default Home
import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>

      <HorizontalCardProduct category={"Poloshirts"} heading={"Top Polo Shirts"}/>

      <HorizontalCardProduct category={"T-shirts"} heading={"Top's round neck shirt"}/>

      <VerticalCardProduct category={"Dressshirts"} heading={"Top's round neck shirt"}/>
      <VerticalCardProduct category={"Shortsleeveshirts"} heading={"Top's round neck shirt"}/>
    </div>
  )
}

export default Home
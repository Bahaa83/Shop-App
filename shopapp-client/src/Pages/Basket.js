import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Basket = () => {
  const [basket, setBasket] = useState("");
  useEffect(() =>
  { 
    axios.get("https://localhost:5000/api/Basket",{withCredentials:true})
      .then(resp => {
        setBasket(resp.data);
        console.log(resp.data)
      }).catch(error => console.log(error))
      
  }, [])
  return (
    <div style={{ marginTop: "100px" }}>
      {basket.buyerId}
    </div>
  )
}
export default Basket;

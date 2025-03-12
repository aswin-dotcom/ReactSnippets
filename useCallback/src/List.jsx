import React, { useEffect, useState } from 'react'

const List = ({getItems}) => {
    const [items,setItems] = useState([]);
    useEffect(()=>{
      setItems(getItems(10));//calling the function
    },[getItems])// when this function regenerated this useEffect will be called
  return (
    <div>
        {items.map((item,index)=>{
            return <p key={index}> {item}</p>
        })}
    </div>
  )
}

export default List
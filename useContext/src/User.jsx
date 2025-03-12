import React, { useContext } from 'react'
import { them } from './App';

const User = () => {
    const { light } =  useContext(them);

    const style = {
        backgroundColor:light==='light'?'white':'black',
        color:light==='light'?'black':'white'
    }
   
  return (
    <div style={style}>User</div>
  )
}

export default User
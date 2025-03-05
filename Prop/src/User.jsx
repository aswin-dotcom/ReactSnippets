import React from "react";
//without destructing
// function User(props) {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h1>{props.age}</h1>
//       <h1>{props.location}</h1>
//     </div>
//   );
// }



//with destructing
function User({name,age,location})
{
  return(
    <>
    <h1>{name}</h1>
    <h1>{age}</h1>
    <h1>{location}</h1>
    </>
  )
}
export default User;

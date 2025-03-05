
import './App.css'
import User from './User'

function App() {
  const userData = {
    name:"aswin",
    age:21,
    location:"coimbatore"
  }

  return (
    <>
    <div>Hello World</div>
    <User 
    //  name={userData.name} 
    //  age={userData.age}
    //  location={userData.location} 
    {...userData}
     />
   
    </>
  )
}

export default App

function Hello(){
   return(
    <h1> Good morning</h1>

   );
}

// export default Hello;
//by using this we can also import this function in the  Differenet  name component but this is not a good practise 
// A Function Should always be a captial letter and return a html     
//A function should always return a single div element or a  fragments  




//we can also export  multiple functions 
function Name(){
  return  (<h1>Aswin Samuvel </h1>)
}
export  {Name,Hello};


import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Cardlist from "./Cardlist"
import "../style/body.css"
import Shimmer_home from "./Shimmer_home";

const Body=()=>{

    const[getbooks,setbooks]=useState([]);
    const[searchText,setSearchText]=useState("Search");
    const[find,setfind]=useState("react");

    useEffect(()=>{
      getRestaurant();
    },[find])

    async function getRestaurant(){
      const response = await fetch("https://www.googleapis.com/books/v1/volumes?q="+find+"&key=AIzaSyD7Npb6OLdapjI1v5p-TzPQ6WbSSn_ib3I");
      const jsn = await response.json();
      setbooks(jsn?.items);
      //console.log(jsn?.items);
    }

   if(getbooks.length===0)
   return <Shimmer_home/>
   
  return (
    <div>
     <div className="input">
      <input
       type="text"
       className="search"
       placeholder="seach for books"
       value={searchText} 

       onChange={
        (e)=>{
            setSearchText(e.target.value);
        }
       }

       onClick={()=>{
        setSearchText("");
       }}
      ></input>

  
      <button
      className="button-3"

       onClick={()=>{
         setbooks([]);
         setfind(searchText);
       }}
      >Search</button>

     </div>
     <div className="card-list">
        {
          getbooks.map((book)=>{
            return (
              <Link to={"/Bookdetails/"+book.id} key={book.id} className="link"> 
              <Cardlist data={book}/> 
              </Link>

            )
          })
        }
      </div>
    </div>
    
  );
}

export default Body;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../style/bookdetails.css"
const Bookdetails=()=>{

    const {id}=useParams();
    const[data,setdata]=useState([]);
    
    let thumbnail="http://books.google.com/books/publisher/content?id="+id+"&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71CX5zvZf9rOLN14Yq9lzqBzTPuJszOIFLMTUdhdneiw7eTHhe7qY19pwIL4OsunfYrVnmWB94mC7GxCT9xDaxJphRq61ZCOin-0qBlxrxG9-2OsWnUbzXNIjA-KSptt36ztMuu&source=gbs_api";

    useEffect(()=>{
        getdetails();
      },[])
  
      async function getdetails(){
        const response = await fetch("https://www.googleapis.com/books/v1/volumes/"+id);
        const jsn = await response.json();
        console.log(jsn)
        setdata(jsn);
      }


        if(!data)
       return <h1>NO data...!! wait...!!</h1>

       return (
        <div className="detail">
            <img src={thumbnail} className="image"/>
            <div className="info">
              <h1 >{data.volumeInfo?.title}</h1>
              <h1 className="dis">{data.volumeInfo?.description}</h1>
              <h1>{data.volumeInfo?.publishedDate}</h1>
            </div>
        </div>
    )
}

export default Bookdetails;
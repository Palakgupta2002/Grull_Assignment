import { useEffect, useState } from "react"

const UseGetAllData=()=>{
    const [userData,setData]=useState([])

    useEffect(()=>{
        const fetchdata= async()=>{
        try {
            const fetchData= await fetch("https://fakestoreapi.com/products");
        const data= await fetchData.json();
        setData(data);
        }
        catch(error){
            console.log(error)
        }

        }
        fetchdata()

    },[])
    return userData;

}
export default UseGetAllData
import { useState,useEffect } from "react";
import axios from "axios";

const useApi = (url) => {

  const [loading,setLoading] = useState(true);
  const [data, setData] =  useState(null);

  const loadData = ()=>{
    axios.get(url)
    // fetch(url)
    // .then(res=>{
    //     console.log("HELLO")
    //     return res.json();
    // })
    .then(resData=>{
        setLoading(false);
        setData(resData.data);
    }).catch(err=>{
        alert(err);
    });
  }
  useEffect(()=>{
    loadData();
  },[])
  return {loading, data, setData}
}

export default useApi;

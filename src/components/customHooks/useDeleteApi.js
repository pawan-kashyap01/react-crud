import { useState,useEffect } from "react";
import axios from "axios";

const useDeleteApi = (url) => {

  const [deleted,setdeleted] = useState(false);

  const deleteData = ()=>{
    axios.delete(url)
    .then(resData=>{
        setdeleted(true);
    }).catch(err=>{
        alert(err);
    });
  }
  useEffect(()=>{
    deleteData();
  },[])
  return {deleted}
}

export default useDeleteApi;

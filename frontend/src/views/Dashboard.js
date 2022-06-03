import React, {useEffect,useState} from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from "react-router-dom";
import Loader from '../components/Loader';
export default function Dashboard() {
  const [loaded, setLoaded] = useState(false);
    
  useEffect(() => {
    let timer = setTimeout(() => setLoaded(true), 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
        <Navbar></Navbar>
      {!loaded ? (
        <center>
         <Loader />
         </center>
      ) : (
        <Outlet /> 
      )}
        
    </div>
  )
}

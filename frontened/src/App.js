import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React,{useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SummaryApi from "./common";
function App() {
const fetchUserDetails= async()=>{
   const dataResponse=await fetch(SummaryApi.current_user.url,{
      method: SummaryApi.current_user.method,
      credentials:'include',
      headers:{
        'Content-Type':'application/json'
      }
    }).then(res=>res.json()).then(data=>{
      if(data.success){
        toast.success(data.message)
      }
      else{
        toast.error(data.message)
      }
    })
    const dataApi=await dataResponse.json();
    console.log(dataApi)
}
  useEffect(()=>{
    fetchUserDetails()
  })

  return (
    <>
     <ToastContainer />
      <Header />
      <main className='min-h-[calc(100vh-120px)] pt-16'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;

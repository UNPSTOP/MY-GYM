// import { SpeedInsights } from "@vercel/speed-insights/next";
import { useState,createContext } from 'react'
import './App.css'
import Register from './Components/Register'
import Loging from './Components/Loging'
import Newpassord from './Components/Newpassord'
import Forget from './Components/Forget'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TermsOfcondition from './Components/TermsOfcondition'
import Landingpage from './Components/Landingpage'
import Strength from './Components/Strength'
import Cardio from './Components/Cardio'
import Health from './Components/Health'
import Shape from './Components/BodShape'
import CancellationandRefund from './Components/CancellationandRefund'
import ShippingandDeliveryPolicy from './Components/ShippingandDeliveryPolicy'
import Prve from './Components/Prve'
// import ContactUs from './Components/ContactUs'
import Receipt from './Components/Receipt'
import About from './Components/About'
import Contact from './Components/Contact'
 // 
import CompanyInfo from './Components/CompanyInfo'
import BusinessArea from './Components/BusinessArea'
import Member from './Components/Member'
import Newsroom from './Components/Newsroom'

export const Numbercontext=createContext();

const router=createBrowserRouter([
  {
path:"/",
element:<div style={{ width: "100%",display:"flex",justifyContent:"center",alignItems:"center"}} >
  
  <Landingpage/>
 
</div>
  },
    {
path:"/CompanyInfo",
element:<div style={{ width: "100%",display:"flex",justifyContent:"center",alignItems:"center"}} >
  
  <CompanyInfo/>
 
</div>
  },
  
    {
path:"/BusinessArea",
element:<div style={{ width: "100%",display:"flex",justifyContent:"center",alignItems:"center"}} >
  
  <BusinessArea/>
 
</div>
  },
    {
path:"/Member",
element:<div style={{ width: "100%",display:"flex",justifyContent:"center",alignItems:"center"}} >
  
  
  <Member/>
  
</div>
  },
  {
path:"/Newsroom",
element:<div style={{ width: "100%",display:"flex",justifyContent:"center",alignItems:"center"}} >
  
  
  <Newsroom/>
  
</div>
  },
  {
    path:"/Receipt",
    element: <div style={{ width: "100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
   
      <Receipt/>
    </div>
  },
  {
    path:"/Register",
    element: <div style={{ width: "100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
   
      <Register/>
    </div>
    // 591420
  },
  {
    path:"/loging",
    element: <div style={{ width: "100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
      
      <Loging/>
    </div>
  },

  {
    path:"/Forget",
    element: <div style={{ width: "100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
 
      <Forget/>
    </div>
  },
  {
    path:"/newpassord",
    element: <div style={{ width: "100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
 
      <Newpassord/>
    </div>
  },
  {
    path:"/Strength",
    element: <div style={{ width: "100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
 
      <Strength/>
    </div>
  },
  {
    path:"/termsofcondition",
    element: <div style={{ width: "100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
 
      <TermsOfcondition/>
    </div>
  },
  {
    path:"/CancellationandRefund",
    element: <div style={{ width: "100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
 
      <CancellationandRefund/>
    </div>
  },
  {
    path:"/ContactUs",
    element: <div style={{ width: "100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
 
      <Contact/>
    </div>
  },
  {
    path:"/PrivacyPolicy",
    element: <div style={{ width: "100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
 
      <Prve/>
    </div>
  },
  {
    path:"/Landingpage",
    element: <div style={{ width: "100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
 
      <Landingpage/>
    </div>
  },
  {
    path:"/ShippingandDeliveryPolicy",
    element: <div style={{ width: "100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
 
      <ShippingandDeliveryPolicy/>
    </div>
  },
  {
    path:"/cardio",
    element: <div style={{ width: "100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
 
      <Cardio/>
    </div>
  },
  {
    path:"/Health",
    element: <div style={{ width: "100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
 
      <Health/>
    </div>
  },
  {
    path:"/Shape",
    element: <div style={{ width: "100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
 
      <Shape/>
    </div>
  },
 {
    path:"/about",
    element:<div>
      {/* <h1 style={{color:"red",fontSize:"2rem",fontWeight:"bold"}}>404 page not found</h1> */}
      <About/>
    </div>
  },

  
  {
    path:"*",
    element:<div>
      <h1 style={{color:"red",fontSize:"2rem",fontWeight:"bold"}}>404 page not found</h1>
    </div>
  },
  
]);

function App() {
  
  const[istrue2,settrur2]=useState(false);
  const[currentnumber,setcurrentnumber]=useState('');
  const [currentemail, setcurrentemail] = useState('');
  const [day1,setday]=useState(0);
  const[amount,setamount]=useState(0);
  const[upiid,setupiid]=useState('');
  return (
<Numbercontext.Provider value={{istrue2,settrur2,currentnumber,setcurrentnumber,currentemail,setcurrentemail,day1,setday,amount,setamount,upiid,setupiid}} >
    <div className='main1'  >
      <RouterProvider
      router={router}
      >

      </RouterProvider>
      
      
    </div>
     </Numbercontext.Provider>
    
  )
}

export default App

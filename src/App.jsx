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
import ContactUs from './Components/ContactUs'
export const Numbercontext=createContext();

const router=createBrowserRouter([
  {
path:"/",
element:<div style={{ width: "100%",display:"flex",justifyContent:"center",alignItems:"center"}} >
  
  <Landingpage/>
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
    element: <div>
      
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
 
      <ContactUs/>
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
    path:"*",
    element:<div>
      <h1 style={{color:"red",fontSize:"2rem",fontWeight:"bold"}}>404 page not found</h1>
    </div>
  }
]);

function App() {
  const [number, setNumber] = useState('');
  const[istrue2,settrue2]=useState(false);
  return (
<Numbercontext.Provider value={{number,setNumber,istrue2,settrue2}} >
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
